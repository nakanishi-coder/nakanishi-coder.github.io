// ...existing code...
// fan_model.js
// 扇風機モデル生成関連の関数をESモジュール化
import * as THREE from './libs/three.module.js';

/**
 * 羽根1枚の形状（ExtrudeGeometry）を生成
 * @param {number} topWidth - 先端幅
 * @param {number} bottomWidth - 根元幅
 * @param {number} height - 羽根長さ
 * @param {number} thickness - 羽根厚さ
 * @param {number} tiltAngleRad - 羽根の傾き（ラジアン）
 */
export function createFanBladeGeometry(topWidth, bottomWidth, height, thickness, tiltAngleRad) {
  const shape = new THREE.Shape();
  shape.moveTo(-bottomWidth / 2, 0);
  shape.lineTo( bottomWidth / 2, 0);
  shape.lineTo( topWidth / 2, height);
  shape.lineTo(-topWidth / 2, height);
  shape.lineTo(-bottomWidth / 2, 0);
  const extrudeSettings = {
    steps: 1,
    depth: thickness,
    bevelEnabled: false
  };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const bladeThickOffset = thickness / 2;
  geometry.translate(0, 0, -bladeThickOffset);
  geometry.rotateY(tiltAngleRad);
  return geometry;
}

/**
 * 羽根グループ（複数枚）を生成
 * @param {number} numBlades - 羽根枚数
 * @param {number} topWidth - 先端幅
 * @param {number} bottomWidth - 根元幅
 * @param {number} height - 羽根長さ
 * @param {number} thickness - 羽根厚さ
 * @param {number} tiltAngleDeg - 羽根の傾き（度）
 * @param {number} radius - 羽根配置半径
 * @param {number} bossDiameter - ボス直径
 * @param {number} bossHeight - ボス高さ
 */
export function createFanBlades(numBlades, topWidth, bottomWidth, height, thickness, tiltAngleDeg, radius, bossDiameter, bossHeight) {
  const blades = new THREE.Group();
  const tiltAngleRad = THREE.MathUtils.degToRad(tiltAngleDeg);
  const centralAngle = 2 * Math.PI / numBlades;
  const bossRadius = bossDiameter / 2;
  const bladeOffset = bossRadius;
  for (let i = 0; i < numBlades; i++) {
    const bladeGeometry = createFanBladeGeometry(topWidth, bottomWidth, height, thickness, tiltAngleRad);
    const bladeMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, side: THREE.DoubleSide });
    const bladeMesh = new THREE.Mesh(bladeGeometry, bladeMaterial);
    const angle = i * centralAngle;
    bladeMesh.rotation.y = angle;
    bladeMesh.rotation.z = Math.PI / 2;
    const bossOffset = 2.0;
    bladeMesh.position.x = - (bladeOffset - bossOffset) * Math.cos(angle);
    bladeMesh.position.z = (bladeOffset - bossOffset) * Math.sin(angle);
    bladeMesh.position.y = - bossHeight / 2;
    blades.add(bladeMesh);
  }
  return blades;
}

/**
 * ボス（中心軸部）を生成
 * @param {number} radius - ボス半径
 * @param {number} height - ボス高さ
 * @param {number} holeRadius - 穴半径
 */
export function createBoss(radius, height, holeRadius) {
  const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
  const material = new THREE.MeshPhongMaterial({ color: 0x333333, side: THREE.DoubleSide });
  const bossMesh = new THREE.Mesh(geometry, material);
  bossMesh.position.y = -height / 2;
  if (holeRadius > 0) {
    const holeGeometry = new THREE.CylinderGeometry(holeRadius, holeRadius, height + 0.1, 32);
    const holeMesh = new THREE.Mesh(holeGeometry, material);
    holeMesh.position.y = -height /2;
    const transparentMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, transparent: true, opacity: 0, side: THREE.DoubleSide });
    holeMesh.material = transparentMaterial;
    const bossGroup = new THREE.Group();
    bossGroup.add(bossMesh);
    bossGroup.add(holeMesh);
    return bossGroup;
  }
  return bossMesh;
}

/**
 * 扇風機全体（羽根＋ボス）を生成
 * @param {number} bossDiameter - ボス直径
 * @param {number} bossHeight - ボス高さ
 * @param {number} bossHoleDiameter - ボス穴直径
 * @param {number} bladeLength - 羽根長さ
 * @param {number} bladeThickness - 羽根厚さ
 * @param {number} bladeTopWidth - 羽根先端幅
 * @param {number} bladeBottomWidth - 羽根根元幅
 * @param {number} bladeTiltAngleDeg - 羽根傾き（度）
 * @param {number} numBlades - 羽根枚数
 */
export function generateFan(bossDiameter, bossHeight, bossHoleDiameter, bladeLength, bladeThickness, bladeTopWidth, bladeBottomWidth, bladeTiltAngleDeg, numBlades) {
  const bossRadius = bossDiameter / 2;
  const fanRadius = bossRadius;
  const fanBlades = createFanBlades(numBlades, bladeTopWidth, bladeBottomWidth, bladeLength, bladeThickness, bladeTiltAngleDeg, fanRadius, bossDiameter, bossHeight);
  const fanBoss = createBoss(bossDiameter / 2, bossHeight, bossHoleDiameter / 2);
  const newFan = new THREE.Group();
  newFan.add(fanBlades);
  newFan.add(fanBoss);
  return newFan;
}
