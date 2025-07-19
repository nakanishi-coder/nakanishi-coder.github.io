// fanドラッグ移動用変数

// ...existing code...
// main.js
// ESモジュールとしてthree.js, fan_model.js, examplesをimportし、アプリ全体を管理

import * as THREE from './libs/three.module.js';
import { OrbitControls } from './libs/OrbitControls.js';
import { STLExporter } from './libs/STLExporter.js';
import { FontLoader } from './libs/FontLoader.js';
import { TextGeometry } from './libs/TextGeometry.js';
import { createFanBladeGeometry, createFanBlades, createBoss, generateFan } from './fan_model.js';

// ここから従来のindex_風力計算追加.htmlのmain処理を移植

// シーンの初期化
const scene = new THREE.Scene();
// アスペクト比・カメラサイズ設定
const aspectRatio = window.innerWidth / window.innerHeight; // アスペクト比を計算
const cameraWidth = 1000;  // カメラの幅
const cameraHeight = cameraWidth / aspectRatio; // 高さをアスペクト比に基づいて計算
// 正射影カメラの初期化
const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0.1, 1000);

// ライトの追加
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 環境光
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // 平行光源
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// レンダラーの初期化・背景色設定
const renderer = new THREE.WebGLRenderer({ antialias: true }); // アンチエイリアス有効
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // 背景色を白に設定
document.body.appendChild(renderer.domElement);

// カメラ位置設定（真上から見下ろす）
camera.position.set(0, 600, 0); // カメラを真上から見下ろす位置に設定
camera.lookAt(scene.position); // シーンの中心を見るように設定

// OrbitControlsの初期化
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // スムーズな回転
controls.dampingFactor = 0.25;
controls.enableZoom = true;

let fan; // 扇風機全体のグループ
let animationEnabled = false; // アニメーションの状態
let gridEnabled = true; // グリッド表示の状態
let textMeshXArray = []; // X軸方向のテキストメッシュ配列
let textMeshZArray = []; // Z軸方向のテキストメッシュ配列

// fanドラッグ移動用変数と補助関数
let isDraggingFan = false;
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const dragOffset = { x: 0, z: 0 };
function getWorldPositionFromMouse(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const planeY = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersection = new THREE.Vector3();
  raycaster.ray.intersectPlane(planeY, intersection);
  return intersection;
}

const bossHeight = parseFloat(document.getElementById("bossHeight").value);
// グリッド表示
const gridSize = 400; // グリッドのサイズ
const gridDivisions = 20; // グリッドの分割数
const gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
scene.add(gridHelper);

// グリッドに数値を表示
const fontLoader = new FontLoader();
fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
  const textColor = 0x000000; // テキストの色
  const textSize = 5; // テキストのサイズ
  for (let i = -gridDivisions / 2; i <= gridDivisions / 2; i++) {
    const textValue = i * (gridSize / gridDivisions);
    const textGeometry = new TextGeometry(textValue.toString(), {
      font: font,
      size: textSize,
      height: 0.1,
      curveSegments: 12,
      bevelEnabled: false
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: textColor });
    const textMeshX = new THREE.Mesh(textGeometry, textMaterial);
    const textMeshZ = new THREE.Mesh(textGeometry, textMaterial);
    // X軸方向にテキストを配置
    textMeshX.position.x = textValue;
    textMeshX.position.y = -bossHeight - 2; // グリッドから少し浮かせる
    textMeshX.position.z = 0;
    textMeshX.rotation.x = -Math.PI / 2; // X軸を中心に90度回転
    textMeshX.userData.offsetX = textValue;
    textMeshX.userData.offsetZ = 0;
    // Z軸方向にテキストを配置
    textMeshZ.position.x = 0;
    textMeshZ.position.y = -bossHeight - 2; // グリッドから少し浮かせる
    textMeshZ.position.z = -textValue;
    textMeshZ.rotation.x = -Math.PI / 2; // X軸を中心に90度回転
    textMeshZ.userData.offsetX = 0;
    textMeshZ.userData.offsetZ = -textValue;
    scene.add(textMeshX);
    scene.add(textMeshZ);
    textMeshXArray.push(textMeshX); // 配列にテキストメッシュを追加
    textMeshZArray.push(textMeshZ); // 配列にテキストメッシュを追加
  }
});

function updateFan() {
  const bossDiameter = parseFloat(document.getElementById("bossDiameter").value);
  const bossHeight = parseFloat(document.getElementById("bossHeight").value);
  const bossHoleDiameter = parseFloat(document.getElementById("bossHoleDiameter").value);
  const bladeLengthInit = parseFloat(document.getElementById("bladeLength").value);
  const bladeThickness = parseFloat(document.getElementById("bladeThickness").value);
  const bladeTopWidth = parseFloat(document.getElementById("bladeTopWidth").value);
  const bladeBottomWidth = parseFloat(document.getElementById("bladeBottomWidth").value);
  const bladeTiltAngleDeg = parseFloat(document.getElementById("bladeTiltAngleDeg").value);
  const numBlades = parseFloat(document.getElementById("numBlades").value);
  const bossOffset = 2.0;
  const bladeLength = bladeLengthInit + bossOffset;
  // モデル表示位置は初期値(0,0,0)で固定
  if (fan) {
    scene.remove(fan);
  }
  fan = generateFan(bossDiameter, bossHeight, bossHoleDiameter, bladeLength, bladeThickness, bladeTopWidth, bladeBottomWidth, bladeTiltAngleDeg, numBlades);
  fan.position.set(0, 0, 0); // 位置は初期値
  gridHelper.position.y = -bossHeight;
  scene.add(fan);
}


updateFan();
document.getElementById("animationCheckbox").checked = animationEnabled;
document.getElementById("gridCheckbox").checked = gridEnabled;
document.getElementById("updateButton").addEventListener("click", updateFan);
document.getElementById("animationCheckbox").addEventListener("change", () => {
  animationEnabled = document.getElementById("animationCheckbox").checked;
});
document.getElementById("gridCheckbox").addEventListener("change", () => {
  gridEnabled = document.getElementById("gridCheckbox").checked;
  gridHelper.visible = gridEnabled;
  textMeshXArray.forEach(textMesh => { textMesh.visible = gridEnabled; });
  textMeshZArray.forEach(textMesh => { textMesh.visible = gridEnabled; });
});
document.getElementById("exportSTL").addEventListener("click", () => { exportSTL(); });

// fan初期化後にドラッグ用イベントリスナーを登録
renderer.domElement.addEventListener('mousedown', (event) => {
  if (!fan) return;
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(fan, true);
  if (intersects.length > 0) {
    isDraggingFan = true;
    const worldPos = getWorldPositionFromMouse(event);
    if (!worldPos) return;
    dragOffset.x = worldPos.x - fan.position.x;
    dragOffset.z = worldPos.z - fan.position.z;
    controls.enabled = false;
  }
});

renderer.domElement.addEventListener('mousemove', (event) => {
  if (isDraggingFan && fan) {
    const worldPos = getWorldPositionFromMouse(event);
    if (!worldPos) return;
    const newX = worldPos.x - dragOffset.x;
    const newZ = worldPos.z - dragOffset.z;
    fan.position.x = newX;
    fan.position.z = newZ;
    gridHelper.position.x = newX;
    gridHelper.position.z = newZ;
    // グリッド上の数値テキストも一体化して移動
    textMeshXArray.forEach(textMesh => {
      textMesh.position.x = newX + textMesh.userData.offsetX;
      textMesh.position.z = newZ + textMesh.userData.offsetZ;
    });
    textMeshZArray.forEach(textMesh => {
      textMesh.position.x = newX + textMesh.userData.offsetX;
      textMesh.position.z = newZ + textMesh.userData.offsetZ;
    });
  }
});

renderer.domElement.addEventListener('mouseup', () => {
  if (isDraggingFan) {
    isDraggingFan = false;
    controls.enabled = true;
  }
});

/**
 * 扇風機の風力・風速・風量などを計算する関数（距離減衰対応）
 * @param {Object} params - 計算パラメータ
 * @param {number} params.diameter - 羽根円直径[mm]
 * @param {number} params.rpm - 回転数[rpm]
 * @param {number} params.distance - 距離[m]
 * @param {number} params.angle - 拡散角度[deg]
 * @param {number} params.numBlades - 羽根枚数
 * @param {number} params.bladeTopWidth - 羽根先端幅[mm]
 * @param {number} params.bladeBottomWidth - 羽根根元幅[mm]
 * @returns {Object} 計算結果（推力, 風速, 風量, 面積, 距離xでの風速・面積, Ct, 補正係数など）
 *
 * 空気密度・推力係数Ct・枚数/形状補正・運動量理論・距離減衰を考慮
 * - Ct = Ct_base * 枚数補正 * 形状補正
 * - 枚数補正: 4枚基準、枚数が多いほど効率低下（Ct補正 = 1 - 0.03*(numBlades-4)）
 * - 形状補正: 幅比（先端幅/根元幅）が大きいほど効率UP（Ct補正 = 1 + 0.05*(widthRatio-1)）
 * - 推力: Ct * 空気密度 * n^2 * D^4
 * - 風速: sqrt(推力 / (空気密度 * 羽根面積 * 0.8))
 * - 風量: 羽根面積 * 風速 * 3600
 * - 距離xでの断面積: Ax = π * ((D/2) + x * tanθ)^2
 * - 距離xでの風速: Vx = V0 * (A0 / Ax)
 */
function calcFanWindForce(params) {
  // 空気密度 [kg/m^3]
  const AIR_DENSITY = 1.225;
  // 推力係数（基本値）
  let Ct_base = 0.12;
  // 羽根枚数・形状補正係数
  // 枚数補正: 4枚基準、枚数が多いほど効率低下（例: Ct補正 = 1 - 0.03*(numBlades-4)）
  const numBlades = params.numBlades || 4;
  let bladeCountCoef = 1 - 0.03 * (numBlades - 4); // 4枚基準
  // 形状補正: 幅比（先端幅/根元幅）が大きいほど効率UP（例: Ct補正 = 1 + 0.05*(widthRatio-1)）
  const widthRatio = params.bladeTopWidth && params.bladeBottomWidth ? (params.bladeTopWidth / params.bladeBottomWidth) : 1;
  let bladeShapeCoef = 1 + 0.05 * (widthRatio - 1);
  // 総合Ct
  const Ct = Ct_base * bladeCountCoef * bladeShapeCoef;

  // 入力値取得
  const D = params.diameter / 1000; // mm→m
  const n = params.rpm / 60; // rpm→rps
  const A0 = Math.PI * Math.pow(D/2, 2); // 羽根円面積
  // 推力計算
  const thrust = Ct * AIR_DENSITY * Math.pow(n,2) * Math.pow(D,4);
  // 風速計算（運動量理論）
  const V0 = Math.sqrt(thrust / (AIR_DENSITY * A0 * 0.8));
  // 風量計算
  const volumeFlow = A0 * V0 * 3600; // m^3/h

  // 距離ごとの風速減衰
  const x = params.distance; // m
  const theta = params.angle * Math.PI / 180; // rad
  const Ax = Math.PI * Math.pow((D/2) + x * Math.tan(theta), 2); // 拡散断面積
  const Vx = V0 * (A0 / Ax); // 距離xでの風速
  return {
    thrust: thrust,
    velocity: V0,
    volumeFlow: volumeFlow,
    area: A0,
    velocity_x: Vx,
    area_x: Ax,
    Ct: Ct,
    bladeCountCoef: bladeCountCoef,
    bladeShapeCoef: bladeShapeCoef,
    widthRatio: widthRatio,
    numBlades: numBlades
  };
}

if (document.getElementById("calcWindButton")) {
  document.getElementById("calcWindButton").addEventListener("click", function() {
    const diameter = parseFloat(document.getElementById("bossDiameter").value);
    const rpm = parseFloat(document.getElementById("fanRPM").value);
    const distance = parseFloat(document.getElementById("fanDistance").value);
    const angle = parseFloat(document.getElementById("fanAngle").value);
    const numBlades = parseFloat(document.getElementById("numBlades").value);
    const bladeTopWidth = parseFloat(document.getElementById("bladeTopWidth").value);
    const bladeBottomWidth = parseFloat(document.getElementById("bladeBottomWidth").value);
    const result = calcFanWindForce({ diameter, rpm, distance, angle, numBlades, bladeTopWidth, bladeBottomWidth });
    document.getElementById("windResult").innerHTML =
      `<b>推力:</b> ${result.thrust.toFixed(2)} N<br>` +
      `<b>羽根面風速:</b> ${result.velocity.toFixed(2)} m/s<br>` +
      `<b>羽根面風量:</b> ${result.volumeFlow.toFixed(1)} m³/h<br>` +
      `<b>羽根面積:</b> ${result.area.toFixed(4)} m²<br>` +
      `<b>${distance} m 位置の断面風速:</b> ${result.velocity_x.toFixed(2)} m/s<br>` +
      `<b>${distance} m 位置の断面積:</b> ${result.area_x.toFixed(4)} m²<br>` +
      `<b>推力係数Ct:</b> ${result.Ct.toFixed(4)}<br>` +
      `<b>枚数補正:</b> ${result.bladeCountCoef.toFixed(3)}（枚数:${result.numBlades}）<br>` +
      `<b>形状補正:</b> ${result.bladeShapeCoef.toFixed(3)}（幅比:${result.widthRatio.toFixed(2)}）`;
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (animationEnabled && fan) {
    fan.rotation.y += 0.01;
  }
  controls.update();
  renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ時もモデルの縦横比を維持
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  renderer.setSize(newWidth, newHeight);
  // 新しいアスペクト比でカメラの投影範囲を再計算
  const aspect = newWidth / newHeight;
  const cameraWidth = 1000; // 初期値と同じ
  const cameraHeight = cameraWidth / aspect;
  camera.left = cameraWidth / -2;
  camera.right = cameraWidth / 2;
  camera.top = cameraHeight / 2;
  camera.bottom = cameraHeight / -2;
  camera.updateProjectionMatrix();
});

function exportSTL() {
  if (!fan) {
    alert("扇風機が生成されていません。");
    return;
  }
  const exporter = new STLExporter();
  const stlString = exporter.parse(fan);
  const blob = new Blob([stlString], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'fan.stl';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
