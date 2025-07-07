import * as THREE from 'three';
import type { 
  Model, 
  AnalysisResult, 
  VisualizationSettings, 
  InteractionMode, 
  SelectionData, 
  InteractionCallbacks, 
  MouseEventData, 
  Vector3D,
  StressDisplaySettings,
  ElementStressData
} from '../types';

export class Renderer3D {
  private scene: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private container: HTMLElement;
  private model: Model;
  private result?: AnalysisResult;
  private settings: VisualizationSettings;

  // レンダリング要素
  private nodeGroup: THREE.Group;
  private elementGroup: THREE.Group;
  private loadGroup: THREE.Group;
  private deformedGroup: THREE.Group;
  private gridGroup: THREE.Group;
  private nodeLabelsGroup: THREE.Group;
  private controls?: any; // OrbitControlsの型

  // グリッド設定
  private gridSettings = {
    visible: false,
    snapEnabled: true,
    snapDistance: 2.0, // スナップ距離（グリッド間隔）
    plane: 'xy' as 'xy' | 'xz' | 'yz'
  };

  // カメラ制御
  private isGridViewMode: boolean = false;
  private savedCameraPosition: THREE.Vector3 | null = null;
  private savedCameraTarget: THREE.Vector3 | null = null;

  // インタラクション機能
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private interactionMode: InteractionMode;
  private selectionData: SelectionData;
  private callbacks: InteractionCallbacks;
  private isDragging: boolean = false;
  private dragTarget: number | null = null;
  private nodeObjects: Map<number, THREE.Object3D>;
  private elementObjects: Map<number, THREE.Object3D>;
  
  // マウス操作の状態管理
  private mouseDownPosition: THREE.Vector2 = new THREE.Vector2();
  private mouseDownTime: number = 0;
  private isMouseMoved: boolean = false;
  private mouseMoveThreshold: number = 5; // ピクセル単位
  private clickTimeThreshold: number = 200; // ミリ秒
  private isOrbitControlsActive: boolean = false;

  constructor(container: HTMLElement, model: Model, callbacks?: InteractionCallbacks) {
    this.container = container;
    this.model = model;
    this.callbacks = callbacks || {};
    this.settings = {
      showDisplacements: true,
      displacementScale: 1.0,
      showStresses: true,
      showStrains: false,
      colorMap: 'rainbow',
      showMesh: true,
      showNodes: true,
      showLoads: true,
      showBoundaryConditions: true,
      stressDisplay: {
        showStressValues: false,
        showStressDistribution: false,
        colorMapType: 'rainbow',
        scaleMode: 'auto'
      }
    };

    // インタラクション機能の初期化
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.interactionMode = { type: 'select', isActive: true };
    this.selectionData = {
      selectedNodes: [],
      selectedElements: []
    };
    this.nodeObjects = new Map();
    this.elementObjects = new Map();

    this.scene = new THREE.Scene();
    this.nodeGroup = new THREE.Group();
    this.elementGroup = new THREE.Group();
    this.loadGroup = new THREE.Group();
    this.deformedGroup = new THREE.Group();
    this.gridGroup = new THREE.Group();
    this.nodeLabelsGroup = new THREE.Group();

    this.scene.add(this.nodeGroup);
    this.scene.add(this.elementGroup);
    this.scene.add(this.loadGroup);
    this.scene.add(this.deformedGroup);
    this.scene.add(this.gridGroup);
    this.scene.add(this.nodeLabelsGroup);
    
    console.log('Scene children count:', this.scene.children.length);
    console.log('GridGroup added to scene:', this.scene.children.includes(this.gridGroup));

    this.initializeRenderer();
    this.initializeCamera();
    this.initializeLighting();
    this.initializeControls();
    this.setupEventListeners();
    this.updateCursorStyle(); // カーソルスタイルを初期化
    this.renderModel();
  }

  private initializeRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setClearColor(0xf0f0f0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // リサイズ対応
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private initializeCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    
    // モデルの範囲を計算してカメラ位置を設定
    const bbox = this.calculateModelBounds();
    const center = bbox.center;
    const size = bbox.size;
    const distance = Math.max(size.x, size.y, size.z) * 1.5; // 倍率を2から1.5に調整
    
    // 最小距離を設定（ノードが小さすぎる場合）
    const minDistance = 3; // 5から3に調整
    const actualDistance = Math.max(distance, minDistance);
    
    console.log('カメラ初期化:', { bbox, center, size, distance, actualDistance });
    
    this.camera.position.set(
      center.x + actualDistance,
      center.y + actualDistance,
      center.z + actualDistance
    );
    this.camera.lookAt(center.x, center.y, center.z);
    
    console.log('カメラ位置:', this.camera.position);
    console.log('カメラ注視点:', center);
  }

  private initializeLighting(): void {
    // 環境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);

    // 指向性光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    this.scene.add(directionalLight);
  }

  private async initializeControls(): Promise<void> {
    // OrbitControlsを動的にインポート
    try {
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.1;
      this.controls.screenSpacePanning = false;
      this.controls.minDistance = 1;
      this.controls.maxDistance = 1000;
      this.controls.maxPolarAngle = Math.PI;
      
      // OrbitControlsのイベントリスナーを設定
      this.controls.addEventListener('start', () => {
        this.isOrbitControlsActive = true;
      });
      
      this.controls.addEventListener('end', () => {
        this.isOrbitControlsActive = false;
      });
      
      // changeイベントでカメラの更新を監視
      this.controls.addEventListener('change', () => {
        // グリッドビューモード中は回転設定のみ強制的に無効化（位置は変更しない）
        if (this.isGridViewMode && this.controls.enableRotate !== false) {
          this.controls.enableRotate = false;
          this.controls.minPolarAngle = 0;
          this.controls.maxPolarAngle = 0;
          this.controls.minAzimuthAngle = 0;
          this.controls.maxAzimuthAngle = 0;
        }
      });
      
    } catch (error) {
      console.warn('OrbitControlsの読み込みに失敗しました:', error);
    }
  }

  private calculateModelBounds() {
    let minX = Infinity, minY = Infinity, minZ = Infinity;
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    if (this.model.nodes.length === 0) {
      // ノードがない場合のデフォルト値
      return {
        center: { x: 0, y: 0, z: 0 },
        size: { x: 10, y: 10, z: 10 }
      };
    }

    this.model.nodes.forEach(node => {
      minX = Math.min(minX, node.position.x);
      minY = Math.min(minY, node.position.y);
      minZ = Math.min(minZ, node.position.z);
      maxX = Math.max(maxX, node.position.x);
      maxY = Math.max(maxY, node.position.y);
      maxZ = Math.max(maxZ, node.position.z);
    });

    // サイズが0の場合の最小値を設定
    const sizeX = Math.max(maxX - minX, 1);
    const sizeY = Math.max(maxY - minY, 1);
    const sizeZ = Math.max(maxZ - minZ, 1);

    return {
      center: {
        x: (minX + maxX) / 2,
        y: (minY + maxY) / 2,
        z: (minZ + maxZ) / 2
      },
      size: {
        x: sizeX,
        y: sizeY,
        z: sizeZ
      }
    };
  }

  private renderModel(): void {
    console.log('モデルレンダリング開始');
    console.log('モデルデータ:', this.model);
    console.log('グリッドビューモード:', this.isGridViewMode);
    this.renderNodes();
    this.renderElements();
    this.renderLoads();
    this.renderBoundaryConditions();
    this.renderNodeLabels();
    
    // グリッドビューモード時はカメラ自動調整を行わない
    if (this.model.nodes.length > 0 && !this.isGridViewMode) {
      console.log('通常モード: カメラ位置を自動調整');
      this.adjustCameraPosition();
    } else if (this.isGridViewMode) {
      console.log('グリッドビューモード: カメラ自動調整をスキップ');
    }
    
    console.log('モデルレンダリング完了');
  }

  private adjustCameraPosition(): void {
    // グリッドビューモード時はカメラ位置を自動調整しない
    if (this.isGridViewMode) {
      console.log('グリッドビューモード時のため、カメラ自動調整をスキップ');
      return;
    }

    const bbox = this.calculateModelBounds();
    const center = bbox.center;
    const size = bbox.size;
    const distance = Math.max(size.x, size.y, size.z) * 1.5; // 倍率を2から1.5に調整
    
    // 最小距離を設定（ノードが小さすぎる場合）
    const minDistance = 3; // 5から3に調整
    const actualDistance = Math.max(distance, minDistance);
    
    console.log('カメラ位置調整:', { center, size, actualDistance });
    
    // OrbitControlsがある場合は、targetを更新
    if (this.controls) {
      this.controls.target.set(center.x, center.y, center.z);
      this.controls.update();
    }
    
    // カメラが既に適切な位置にない場合のみ移動
    const currentDistance = this.camera.position.distanceTo(new THREE.Vector3(center.x, center.y, center.z));
    if (currentDistance < minDistance * 0.3 || currentDistance > actualDistance * 3) { // 閾値を調整
      this.camera.position.set(
        center.x + actualDistance,
        center.y + actualDistance,
        center.z + actualDistance
      );
      this.camera.lookAt(center.x, center.y, center.z);
      console.log('カメラ位置を更新:', this.camera.position);
    }
  }

  private renderNodes(): void {
    console.log('ノードレンダリング開始');
    this.nodeGroup.clear();
    this.nodeObjects.clear();
    
    if (!this.settings.showNodes) {
      console.log('ノード表示設定がオフです');
      return;
    }

    console.log('レンダリング対象ノード数:', this.model.nodes.length);
    console.log('ノードデータ:', this.model.nodes);

    const nodeGeometry = new THREE.SphereGeometry(0.1); // ノードサイズを0.1に調整
    const nodeMaterial = new THREE.MeshPhongMaterial({ color: 0x2196f3 });

    this.model.nodes.forEach((node, index) => {
      console.log(`ノード${index}をレンダリング:`, node);
      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      nodeMesh.position.set(node.position.x, node.position.y, node.position.z);
      nodeMesh.userData = { nodeId: node.id, type: 'node' };
      nodeMesh.castShadow = true;
      nodeMesh.receiveShadow = true;
      this.nodeGroup.add(nodeMesh);
      this.nodeObjects.set(node.id, nodeMesh);
      console.log(`ノード${node.id}をシーンに追加:`, nodeMesh.position);
    });
    
    console.log('ノードグループの子要素数:', this.nodeGroup.children.length);
    console.log('シーンの子要素:', this.scene.children.map(child => child.type));
  }

  private renderElements(): void {
    this.elementGroup.clear();
    this.elementObjects.clear();
    
    if (!this.settings.showMesh) return;

    this.model.elements.forEach(element => {
      const node1 = this.model.nodes.find(n => n.id === element.nodeIds[0])!;
      const node2 = this.model.nodes.find(n => n.id === element.nodeIds[1])!;

      // ビーム要素を円柱で表現
      const length = Math.sqrt(
        Math.pow(node2.position.x - node1.position.x, 2) +
        Math.pow(node2.position.y - node1.position.y, 2) +
        Math.pow(node2.position.z - node1.position.z, 2)
      );

      const geometry = new THREE.CylinderGeometry(0.05, 0.05, length);
      let material: THREE.Material;

      if (this.result && this.settings.showStresses) {
        // 応力による色分け
        const stressIndex = this.model.elements.indexOf(element);
        const stress = this.result.stresses[stressIndex] || 0;
        console.log(`要素${element.id}の応力表示:`, {
          stressIndex,
          stress,
          hasResult: !!this.result,
          showStresses: this.settings.showStresses,
          stressesLength: this.result.stresses.length
        });
        
        const color = this.stressToColor(stress);
        console.log(`要素${element.id}の色:`, color);
        material = new THREE.MeshPhongMaterial({ color });
      } else {
        material = new THREE.MeshPhongMaterial({ color: 0x666666 });
      }

      const mesh = new THREE.Mesh(geometry, material);
      
      // 要素の位置と方向を設定
      const midpoint = {
        x: (node1.position.x + node2.position.x) / 2,
        y: (node1.position.y + node2.position.y) / 2,
        z: (node1.position.z + node2.position.z) / 2
      };
      
      mesh.position.set(midpoint.x, midpoint.y, midpoint.z);
      
      // 要素の方向を設定
      const direction = new THREE.Vector3(
        node2.position.x - node1.position.x,
        node2.position.y - node1.position.y,
        node2.position.z - node1.position.z
      ).normalize();
      
      const axis = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
      mesh.setRotationFromQuaternion(quaternion);
      
      mesh.userData = { elementId: element.id, type: 'element' };
      this.elementGroup.add(mesh);
      this.elementObjects.set(element.id, mesh);
    });
  }

  private renderLoads(): void {
    this.loadGroup.clear();
    
    if (!this.settings.showLoads) return;

    this.model.loads.forEach(load => {
      const node = this.model.nodes.find(n => n.id === load.nodeId)!;
      
      // 力の矢印を描画
      if (load.force.x !== 0 || load.force.y !== 0 || load.force.z !== 0) {
        const arrow = this.createArrow(
          new THREE.Vector3(node.position.x, node.position.y, node.position.z),
          new THREE.Vector3(load.force.x, load.force.y, load.force.z).normalize(),
          0.5, // 固定の長さに変更（0.5単位）
          0xff0000
        );
        this.loadGroup.add(arrow);
      }
    });
  }

  private renderBoundaryConditions(): void {
    if (!this.settings.showBoundaryConditions) return;

    this.model.nodes.forEach(node => {
      if (node.isFixed) {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshPhongMaterial({ color: 0x4caf50 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(node.position.x, node.position.y, node.position.z);
        this.nodeGroup.add(mesh);
      }
    });
  }

  private renderNodeLabels(): void {
    this.nodeLabelsGroup.clear();
    
    if (!this.settings.showNodeNumbers) {
      return;
    }

    this.model.nodes.forEach(node => {
      // テキストラベルを作成
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      const size = 64; // キャンバスサイズ
      canvas.width = size;
      canvas.height = size;
      
      // 背景を透明にする
      context.clearRect(0, 0, size, size);
      
      // テキストスタイル設定
      context.fillStyle = 'black';
      context.font = 'bold 20px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // シンプルな黒文字
      context.fillText(node.id.toString(), size / 2, size / 2);
      
      // テクスチャとスプライトを作成
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      
      // ラベルの位置をノードの少し上に設定
      sprite.position.set(
        node.position.x + 0.15,
        node.position.y + 0.15,
        node.position.z + 0.15
      );
      
      // スプライトのサイズを設定
      sprite.scale.set(0.3, 0.3, 1);
      
      this.nodeLabelsGroup.add(sprite);
    });
  }

  private createArrow(origin: THREE.Vector3, direction: THREE.Vector3, length: number, color: number): THREE.Group {
    const arrowGroup = new THREE.Group();
    
    // 矢印の軸（長さの80%）
    const shaftLength = length * 0.8;
    const shaftGeometry = new THREE.CylinderGeometry(0.02, 0.02, shaftLength);
    const shaftMaterial = new THREE.MeshPhongMaterial({ color });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    
    // 矢印の頭（長さの20%）
    const headLength = length * 0.2;
    const headGeometry = new THREE.ConeGeometry(0.08, headLength);
    const headMaterial = new THREE.MeshPhongMaterial({ color });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    
    // 軸の位置（原点から軸の長さの半分の位置）
    const shaftOffset = direction.clone().multiplyScalar(shaftLength / 2);
    shaft.position.copy(origin).add(shaftOffset);
    
    // 頭の位置（軸の終端から頭の長さの半分の位置）
    const headOffset = direction.clone().multiplyScalar(shaftLength + headLength / 2);
    head.position.copy(origin).add(headOffset);
    
    // 方向に応じて回転（Y軸が上向きのデフォルト状態から、direction方向へ回転）
    const axis = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
    shaft.setRotationFromQuaternion(quaternion);
    head.setRotationFromQuaternion(quaternion);
    
    arrowGroup.add(shaft);
    arrowGroup.add(head);
    
    return arrowGroup;
  }

  private stressToColor(stress: number): THREE.Color {
    if (!this.result || this.result.stresses.length === 0) {
      return new THREE.Color(0x666666); // デフォルト色
    }

    // 応力の範囲を取得
    const stresses = this.result.stresses;
    const minStress = Math.min(...stresses);
    const maxStress = Math.max(...stresses);
    
    // 応力範囲が0の場合はデフォルト色
    if (maxStress === minStress) {
      return new THREE.Color(0x666666);
    }

    // 正規化された応力値 (0-1)
    const normalizedStress = (stress - minStress) / (maxStress - minStress);
    
    // カラーマップに基づいて色を決定
    switch (this.settings.stressDisplay.colorMapType) {
      case 'rainbow':
        return this.rainbowColorMap(normalizedStress);
      case 'heat':
        return this.heatColorMap(normalizedStress);
      case 'viridis':
        return this.viridisColorMap(normalizedStress);
      case 'grayscale':
        return this.grayscaleColorMap(normalizedStress);
      default:
        return this.rainbowColorMap(normalizedStress);
    }
  }

  public updateVisualizationSettings(settings: Partial<VisualizationSettings>): void {
    Object.assign(this.settings, settings);
    this.renderModel();
    if (this.result) {
      this.updateResults(this.result);
    }
  }

  public updateResults(result: AnalysisResult): void {
    console.log('=== Renderer3D: 解析結果更新 ===');
    console.log('解析結果:', result);
    console.log('応力データ:', result.stresses);
    
    this.result = result;
    this.renderDeformed();
    this.renderModel(); // 応力表示の更新
    
    console.log('=== Renderer3D: 結果更新完了 ===');
  }

  private renderDeformed(): void {
    this.deformedGroup.clear();
    
    if (!this.result || !this.settings.showDisplacements) return;

    // 変形後の形状を描画
    this.model.elements.forEach(element => {
      const node1 = this.model.nodes.find(n => n.id === element.nodeIds[0])!;
      const node2 = this.model.nodes.find(n => n.id === element.nodeIds[1])!;
      const node1Index = this.model.nodes.indexOf(node1);
      const node2Index = this.model.nodes.indexOf(node2);
      
      const disp1 = this.result!.displacements[node1Index];
      const disp2 = this.result!.displacements[node2Index];
      
      const deformedPos1 = {
        x: node1.position.x + disp1.x * this.settings.displacementScale,
        y: node1.position.y + disp1.y * this.settings.displacementScale,
        z: node1.position.z + disp1.z * this.settings.displacementScale
      };
      
      const deformedPos2 = {
        x: node2.position.x + disp2.x * this.settings.displacementScale,
        y: node2.position.y + disp2.y * this.settings.displacementScale,
        z: node2.position.z + disp2.z * this.settings.displacementScale
      };
      
      // 変形後の要素を描画
      const length = Math.sqrt(
        Math.pow(deformedPos2.x - deformedPos1.x, 2) +
        Math.pow(deformedPos2.y - deformedPos1.y, 2) +
        Math.pow(deformedPos2.z - deformedPos1.z, 2)
      );
      
      const geometry = new THREE.CylinderGeometry(0.03, 0.03, length);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xff9800, 
        transparent: true, 
        opacity: 0.8 
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      const midpoint = {
        x: (deformedPos1.x + deformedPos2.x) / 2,
        y: (deformedPos1.y + deformedPos2.y) / 2,
        z: (deformedPos1.z + deformedPos2.z) / 2
      };
      
      mesh.position.set(midpoint.x, midpoint.y, midpoint.z);
      
      const direction = new THREE.Vector3(
        deformedPos2.x - deformedPos1.x,
        deformedPos2.y - deformedPos1.y,
        deformedPos2.z - deformedPos1.z
      ).normalize();
      
      const axis = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
      mesh.setRotationFromQuaternion(quaternion);
      
      this.deformedGroup.add(mesh);
    });
  }

  public updateModel(model: Model, callbacks?: InteractionCallbacks): void {
    console.log('モデル更新開始');
    this.model = model;
    
    if (callbacks) {
      this.callbacks = callbacks;
    }
    
    // 既存の解析結果をクリア
    this.result = undefined;
    
    // シーンを再描画
    this.renderModel();
    console.log('モデル更新完了');
  }

  public render(): void {
    if (this.controls) {
      // グリッドビューモード時はOrbitControlsの制限を維持
      if (this.isGridViewMode) {
        this.controls.enableRotate = false;
        this.controls.enablePan = false;
      }
      this.controls.update();
    }
    
    this.renderer.render(this.scene, this.camera);
  }

  public startAnimation(): void {
    const animate = () => {
      requestAnimationFrame(animate);
      this.render();
    };
    animate();
  }

  private onWindowResize(): void {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  /**
   * レスポンシブデザイン用のリサイズハンドラー（外部から呼び出し可能）
   */
  public handleResize(): void {
    this.onWindowResize();
  }

  // インタラクション機能
  private setupEventListeners(): void {
    this.renderer.domElement.addEventListener('click', this.onMouseClick.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseClick(event: MouseEvent): void {
    // ドラッグ操作や長時間のマウス操作の場合はクリックイベントを無視
    if (this.isMouseMoved || (Date.now() - this.mouseDownTime > this.clickTimeThreshold)) {
      return;
    }

    // グリッドビューモード時は OrbitControls の操作を強制的に無効化
    if (this.isGridViewMode && this.controls) {
      this.controls.enableRotate = false;
      this.controls.enablePan = false;
      console.log('グリッドビューモード: OrbitControls操作無効化');
    }

    // OrbitControlsが操作中の場合はクリックイベントを無視
    if (this.isOrbitControlsActive) {
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects([...this.nodeGroup.children, ...this.elementGroup.children]);

    const mouseEventData: MouseEventData = {
      position: { x: event.clientX, y: event.clientY },
      button: event.button,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey
    };

    if (intersects.length > 0) {
      const intersected = intersects[0];
      const userData = intersected.object.userData;

      if (userData.type === 'node' && this.callbacks.onNodeClick) {
        this.callbacks.onNodeClick(userData.nodeId, mouseEventData);
      } else if (userData.type === 'element' && this.callbacks.onElementClick) {
        this.callbacks.onElementClick(userData.elementId, mouseEventData);
      }
    } else {
      // 背景クリック - インタラクションモードに応じて処理
      if (this.interactionMode.type === 'add-node' && this.callbacks.onBackgroundClick) {
        const worldPosition = this.screenToWorld(this.mouse);
        mouseEventData.worldPosition = worldPosition;
        this.callbacks.onBackgroundClick(worldPosition, mouseEventData);
      }
    }
  }

  private onMouseMove(event: MouseEvent): void {
    // グリッドビューモード時は OrbitControls の回転操作を強制的に無効化
    if (this.isGridViewMode && this.controls) {
      this.controls.enableRotate = false;
      // カメラ制約は必要最小限のみ適用（ユーザーの操作を阻害しない）
      // this.enforceGridViewConstraints();
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    const currentMouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const currentMouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    this.mouse.x = currentMouseX;
    this.mouse.y = currentMouseY;

    // マウスの移動距離をチェック
    if (this.mouseDownTime > 0) {
      const pixelX = event.clientX;
      const pixelY = event.clientY;
      const deltaX = pixelX - this.mouseDownPosition.x;
      const deltaY = pixelY - this.mouseDownPosition.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance > this.mouseMoveThreshold) {
        this.isMouseMoved = true;
      }
    }

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects([...this.nodeGroup.children, ...this.elementGroup.children]);

    // ホバー効果
    let hoveredNodeId: number | null = null;
    let hoveredElementId: number | null = null;

    if (intersects.length > 0) {
      const userData = intersects[0].object.userData;
      if (userData.type === 'node') {
        hoveredNodeId = userData.nodeId;
      } else if (userData.type === 'element') {
        hoveredElementId = userData.elementId;
      }
    }

    if (this.selectionData.hoveredNode !== hoveredNodeId) {
      this.selectionData.hoveredNode = hoveredNodeId;
      if (this.callbacks.onNodeHover) {
        this.callbacks.onNodeHover(hoveredNodeId);
      }
    }

    if (this.selectionData.hoveredElement !== hoveredElementId) {
      this.selectionData.hoveredElement = hoveredElementId;
      if (this.callbacks.onElementHover) {
        this.callbacks.onElementHover(hoveredElementId);
      }
    }

    // ドラッグ処理
    if (this.isDragging && this.dragTarget !== null && this.callbacks.onNodeDrag) {
      const worldPosition = this.screenToWorld(this.mouse);
      this.callbacks.onNodeDrag(this.dragTarget, worldPosition);
    }
  }

  private onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return; // 左クリックのみ

    // グリッドビューモード時は OrbitControls の回転操作を強制的に無効化
    if (this.isGridViewMode && this.controls) {
      this.controls.enableRotate = false;
      this.controls.minPolarAngle = 0;
      this.controls.maxPolarAngle = 0;
      this.controls.minAzimuthAngle = 0;
      this.controls.maxAzimuthAngle = 0;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // マウスダウンの状態を記録
    this.mouseDownPosition.set(event.clientX, event.clientY);
    this.mouseDownTime = Date.now();
    this.isMouseMoved = false;

    // ノードに対するドラッグ操作のみチェック（OrbitControlsとの競合を避ける）
    if (this.interactionMode.type === 'select') {
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects([...this.nodeGroup.children]);

      if (intersects.length > 0 && intersects[0].object.userData.type === 'node') {
        const nodeId = intersects[0].object.userData.nodeId;
        this.isDragging = true;
        this.dragTarget = nodeId;
        
        if (this.callbacks.onNodeDragStart) {
          const worldPosition = this.screenToWorld(this.mouse);
          this.callbacks.onNodeDragStart(nodeId, worldPosition);
        }

        // OrbitControlsを無効化
        if (this.controls) {
          this.controls.enabled = false;
        }
      }
    }
  }

  private onMouseUp(): void {
    if (this.isDragging && this.dragTarget !== null && this.callbacks.onNodeDragEnd) {
      const worldPosition = this.screenToWorld(this.mouse);
      this.callbacks.onNodeDragEnd(this.dragTarget, worldPosition);
    }

    this.isDragging = false;
    this.dragTarget = null;

    // OrbitControlsを再有効化
    if (this.controls) {
      this.controls.enabled = true;
    }

    // マウス状態をリセット（少し遅延してリセット）
    setTimeout(() => {
      this.mouseDownTime = 0;
      this.isMouseMoved = false;
    }, 10);
  }

  private screenToWorld(screenPosition: THREE.Vector2): Vector3D {
    // レイキャストを使用して3D座標を取得
    this.raycaster.setFromCamera(screenPosition, this.camera);
    
    // グリッドが表示されている場合は、そのグリッド平面との交点を計算
    let plane: THREE.Plane;
    
    if (this.gridSettings.visible) {
      switch (this.gridSettings.plane) {
        case 'xy':
          plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Z=0平面
          break;
        case 'xz':
          plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Y=0平面
          break;
        case 'yz':
          plane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0); // X=0平面
          break;
      }
    } else {
      // グリッドが非表示の場合は、XY平面を使用
      plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    }
    
    const worldPosition = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(plane, worldPosition);

    // グリッドスナップを適用
    return this.snapToGrid(worldPosition);
  }

  // パブリックインタラクションAPI
  public setInteractionMode(mode: InteractionMode): void {
    this.interactionMode = mode;
    this.updateCursorStyle();
  }

  private updateCursorStyle(): void {
    const canvas = this.renderer.domElement;
    switch (this.interactionMode.type) {
      case 'add-node':
        canvas.style.cursor = 'crosshair';
        break;
      case 'add-element':
        canvas.style.cursor = 'crosshair';
        break;
      case 'set-boundary':
        canvas.style.cursor = 'pointer';
        break;
      case 'set-load':
        canvas.style.cursor = 'pointer';
        break;
      case 'select':
      default:
        canvas.style.cursor = 'default';
        break;
    }
  }

  public getInteractionMode(): InteractionMode {
    return this.interactionMode;
  }

  public setCallbacks(callbacks: InteractionCallbacks): void {
    this.callbacks = { ...this.callbacks, ...callbacks };
  }

  public selectNode(nodeId: number, multiSelect = false): void {
    if (!multiSelect) {
      this.selectionData.selectedNodes = [nodeId];
    } else {
      const index = this.selectionData.selectedNodes.indexOf(nodeId);
      if (index === -1) {
        this.selectionData.selectedNodes.push(nodeId);
      } else {
        this.selectionData.selectedNodes.splice(index, 1);
      }
    }
    this.updateSelectionVisualization();
  }

  public selectElement(elementId: number, multiSelect = false): void {
    if (!multiSelect) {
      this.selectionData.selectedElements = [elementId];
    } else {
      const index = this.selectionData.selectedElements.indexOf(elementId);
      if (index === -1) {
        this.selectionData.selectedElements.push(elementId);
      } else {
        this.selectionData.selectedElements.splice(index, 1);
      }
    }
    this.updateSelectionVisualization();
  }

  public clearSelection(): void {
    this.selectionData.selectedNodes = [];
    this.selectionData.selectedElements = [];
    this.updateSelectionVisualization();
  }

  public getSelection(): SelectionData {
    return { ...this.selectionData };
  }

  private updateSelectionVisualization(): void {
    // 全てのノードを通常色に戻す
    this.nodeObjects.forEach((nodeObject) => {
      const material = (nodeObject as THREE.Mesh).material as THREE.MeshPhongMaterial;
      material.color.setHex(0x2196f3);
    });

    // 選択されたノードをハイライト
    this.selectionData.selectedNodes.forEach(nodeId => {
      const nodeObject = this.nodeObjects.get(nodeId);
      if (nodeObject) {
        const material = (nodeObject as THREE.Mesh).material as THREE.MeshPhongMaterial;
        material.color.setHex(0xff5722);
      }
    });

    // 全ての要素を通常色に戻す
    this.elementObjects.forEach((elementObject) => {
      const material = (elementObject as THREE.Mesh).material as THREE.MeshPhongMaterial;
      material.color.setHex(0x666666);
    });

    // 選択された要素をハイライト
    this.selectionData.selectedElements.forEach(elementId => {
      const elementObject = this.elementObjects.get(elementId);
      if (elementObject) {
        const material = (elementObject as THREE.Mesh).material as THREE.MeshPhongMaterial;
        material.color.setHex(0xff5722);
      }
    });
  }

  public dispose(): void {
    // イベントリスナーを削除
    this.renderer.domElement.removeEventListener('click', this.onMouseClick.bind(this));
    this.renderer.domElement.removeEventListener('mousemove', this.onMouseMove.bind(this));
    this.renderer.domElement.removeEventListener('mousedown', this.onMouseDown.bind(this));
    this.renderer.domElement.removeEventListener('mouseup', this.onMouseUp.bind(this));
    
    this.renderer.dispose();
    window.removeEventListener('resize', () => this.onWindowResize());
  }

  // グリッド機能
  public showGrid(plane: 'xy' | 'xz' | 'yz' = 'xy'): void {
    console.log('showGrid呼び出し:', { plane, 現在の平面: this.gridSettings.plane });
    
    this.gridSettings.visible = true;
    this.gridSettings.plane = plane;
    
    // グリッドを再レンダリング（平面が変更された場合も対応）
    this.renderGrid();
    console.log('showGrid完了');
    // setGridViewModeは呼び出さない（無限ループを防ぐ）
  }

  public hideGrid(): void {
    this.gridSettings.visible = false;
    this.gridGroup.clear();
    // setGridViewModeは呼び出さない（無限ループを防ぐ）
  }

  public setGridSnap(enabled: boolean, snapDistance: number = 0.5): void {
    console.log('setGridSnap呼び出し:', { enabled, snapDistance, 現在の距離: this.gridSettings.snapDistance });
    
    this.gridSettings.snapEnabled = enabled;
    const oldSnapDistance = this.gridSettings.snapDistance;
    this.gridSettings.snapDistance = snapDistance;
    
    // スナップ距離が変更された場合、グリッドを再描画
    if (oldSnapDistance !== snapDistance && this.gridSettings.visible) {
      console.log('スナップ距離変更によりグリッドを再描画:', { old: oldSnapDistance, new: snapDistance });
      this.renderGrid();
    }
  }

  private renderGrid(): void {
    console.log('renderGrid呼び出し:', { 
      visible: this.gridSettings.visible, 
      plane: this.gridSettings.plane 
    });
    
    // 既存のグリッドを完全にクリア
    this.gridGroup.clear();

    if (!this.gridSettings.visible) {
      console.log('グリッド非表示のため、レンダリングをスキップ');
      return;
    }

    // Three.jsの標準GridHelperを使用（最もシンプルで軽量）
    this.createStandardGrid();
    
    console.log('グリッドレンダリング完了');
  }

  private createStandardGrid(): void {
    const spacing = this.gridSettings.snapDistance;
    
    // 原点を中心として適切なグリッドサイズを計算
    // 原点に必ず交点が来るように、偶数の分割数を使用
    const halfExtent = 10; // グリッドの半分の範囲（-10から+10）
    const divisions = Math.max(2, Math.floor(halfExtent / spacing) * 2); // 偶数の分割数
    const actualSize = divisions * spacing; // 実際のグリッドサイズ
    
    console.log(`グリッド作成: 平面=${this.gridSettings.plane}, スナップ距離=${spacing}, 分割数=${divisions}, グリッドサイズ=${actualSize}`);
    console.log(`グリッド範囲: -${actualSize/2} から +${actualSize/2}`);
    
    // Three.jsの標準GridHelperを使用
    const gridHelper = new THREE.GridHelper(actualSize, divisions, 0x444444, 0x888888);
    
    // 平面に応じて回転（GridHelperのデフォルトはXZ平面、Y軸が上向き）
    switch (this.gridSettings.plane) {
      case 'xy':
        // XY平面：X軸周りに-90度回転してZ=0の水平面にする
        gridHelper.rotateX(-Math.PI / 2);
        console.log('XY平面用にX軸周りに-90度回転');
        break;
      case 'xz':
        // XZ平面：デフォルトのまま（Y=0の水平面、回転不要）
        console.log('XZ平面：デフォルト（回転なし）');
        break;
      case 'yz':
        // YZ平面：Y軸とZ軸の平面なので、X軸周りに90度回転してからZ軸周りに90度回転
        gridHelper.rotateX(Math.PI / 2);
        gridHelper.rotateZ(Math.PI / 2);
        console.log('YZ平面用にX軸周りに90度、Z軸周りに90度回転');
        break;
    }
    
    gridHelper.name = `StandardGrid_${this.gridSettings.plane}`;
    this.gridGroup.add(gridHelper);
    
    console.log('グリッド追加完了:', {
      plane: this.gridSettings.plane,
      spacing: spacing,
      divisions: divisions,
      actualSize: actualSize,
      range: `±${actualSize/2}`,
      原点交点: 'あり',
      position: gridHelper.position.clone(),
      rotation: {
        x: gridHelper.rotation.x,
        y: gridHelper.rotation.y,
        z: gridHelper.rotation.z
      }
    });
  }

  // カメラをグリッドビューモードに設定
  setGridViewMode(enabled: boolean, plane?: 'xy' | 'xz' | 'yz'): void {
    console.log('setGridViewMode:', { enabled, plane, currentMode: this.isGridViewMode });
    
    if (enabled && plane) {
      // 現在のカメラ状態を保存（一度だけ）
      if (!this.isGridViewMode) {
        this.savedCameraPosition = this.camera.position.clone();
        this.savedCameraTarget = this.controls.target.clone();
        console.log('カメラ状態を保存:', { 
          position: this.savedCameraPosition, 
          target: this.savedCameraTarget 
        });
      }
      
      this.isGridViewMode = true;
      
      // グリッドビューモード有効化
      this.gridSettings.plane = plane;
      this.gridSettings.visible = true;
      
      // カメラを該当平面の真上に設定
      this.setCameraForGridPlane(plane);
      
      // カメラ制御を厳格に制限
      if (this.controls) {
        this.controls.enableRotate = false;
        this.controls.enablePan = false; // パンも無効化してカメラ固定を徹底
        this.controls.enableZoom = true;
        this.controls.enabled = true; // コントロール自体は有効
        this.controls.update();
        console.log('OrbitControls制限設定:', {
          enableRotate: this.controls.enableRotate,
          enablePan: this.controls.enablePan,
          enableZoom: this.controls.enableZoom
        });
      }
      
      // グリッドを直接レンダリング
      this.renderGrid();
      
    } else {
      // グリッドビューモード無効化
      this.gridSettings.visible = false;
      this.isGridViewMode = false;
      console.log('グリッドビューモード無効化');
      
      // 保存したカメラ位置を復元
      if (this.savedCameraPosition && this.savedCameraTarget) {
        console.log('カメラ状態を復元:', { 
          position: this.savedCameraPosition, 
          target: this.savedCameraTarget 
        });
        this.camera.position.copy(this.savedCameraPosition);
        this.controls.target.copy(this.savedCameraTarget);
        this.camera.lookAt(this.savedCameraTarget);
        
        // 保存した位置をクリア
        this.savedCameraPosition = null;
        this.savedCameraTarget = null;
      }
      
      // カメラ制御を復元
      if (this.controls) {
        this.controls.enableRotate = true;
        this.controls.enablePan = true;
        this.controls.enableZoom = true;
        this.controls.enabled = true;
        this.controls.update();
        console.log('OrbitControls復元完了');
      }
      
      // グリッドを直接クリア
      this.gridGroup.clear();
    }
  }

  private setCameraForGridPlane(plane: 'xy' | 'xz' | 'yz'): void {
    let cameraPosition: THREE.Vector3;
    const targetPosition = new THREE.Vector3(0, 0, 0);
    
    switch (plane) {
      case 'xy':
        // XY平面：Z軸正方向から見下ろす
        cameraPosition = new THREE.Vector3(0, 0, 25);
        break;
      case 'xz':
        // XZ平面：Y軸正方向から見下ろす
        cameraPosition = new THREE.Vector3(0, 25, 0);
        break;
      case 'yz':
        // YZ平面：X軸正方向から見る
        cameraPosition = new THREE.Vector3(25, 0, 0);
        break;
    }
    
    console.log(`カメラを${plane}平面用に設定:`, { 
      position: cameraPosition, 
      target: targetPosition 
    });
    
    // カメラ位置を設定
    this.camera.position.copy(cameraPosition);
    this.controls.target.copy(targetPosition);
    this.camera.lookAt(targetPosition);
    
    // 強制的にコントロールを更新
    this.controls.update();
    
    console.log('カメラ設定完了:', {
      actualPosition: this.camera.position.clone(),
      actualTarget: this.controls.target.clone()
    });
  }

  // グリッドスナップ機能
  snapToGrid(position: THREE.Vector3): THREE.Vector3 {
    // ノード追加モード時は強制的にスナップ（グリッド表示設定に関係なく）
    const mode = this.interactionMode.type;
    const shouldForceSnap = (mode === 'add-node' || mode === 'add-element');
    
    if (!this.gridSettings.snapEnabled && !shouldForceSnap) {
      return position;
    }
    
    const snappedPosition = position.clone();
    const gridSpacing = this.getGridSpacing(); // グリッドの実際の間隔を取得
    
    // グリッドの有効範囲を計算
    const halfExtent = 10;
    const maxGridRange = Math.floor(halfExtent / gridSpacing) * gridSpacing;
    
    console.log('スナップ処理:', {
      元の位置: position,
      グリッド間隔: gridSpacing,
      平面: this.gridSettings.plane,
      強制スナップ: shouldForceSnap,
      グリッド範囲: `±${maxGridRange}`
    });
    
    // 現在のグリッド平面に基づいてスナップ
    switch (this.gridSettings.plane) {
      case 'xy':
        snappedPosition.x = Math.round(snappedPosition.x / gridSpacing) * gridSpacing;
        snappedPosition.y = Math.round(snappedPosition.y / gridSpacing) * gridSpacing;
        snappedPosition.z = 0; // XY平面はZ=0に固定
        
        // グリッド範囲内にクランプ
        snappedPosition.x = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.x));
        snappedPosition.y = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.y));
        break;
      case 'xz':
        snappedPosition.x = Math.round(snappedPosition.x / gridSpacing) * gridSpacing;
        snappedPosition.z = Math.round(snappedPosition.z / gridSpacing) * gridSpacing;
        snappedPosition.y = 0; // XZ平面はY=0に固定
        
        // グリッド範囲内にクランプ
        snappedPosition.x = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.x));
        snappedPosition.z = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.z));
        break;
      case 'yz':
        snappedPosition.y = Math.round(snappedPosition.y / gridSpacing) * gridSpacing;
        snappedPosition.z = Math.round(snappedPosition.z / gridSpacing) * gridSpacing;
        snappedPosition.x = 0; // YZ平面はX=0に固定
        
        // グリッド範囲内にクランプ
        snappedPosition.y = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.y));
        snappedPosition.z = Math.max(-maxGridRange, Math.min(maxGridRange, snappedPosition.z));
        break;
    }
    
    console.log('スナップ後の位置:', snappedPosition);
    return snappedPosition;
  }

  // グリッドの実際の間隔を取得（スナップ距離と同じ）
  private getGridSpacing(): number {
    return this.gridSettings.snapDistance;
  }

  // レインボーカラーマップ
  private rainbowColorMap(value: number): THREE.Color {
    const hue = (1 - value) * 240 / 360; // 青(240°)から赤(0°)
    return new THREE.Color().setHSL(hue, 1, 0.5);
  }

  // ヒートマップ
  private heatColorMap(value: number): THREE.Color {
    if (value < 0.25) {
      // 黒 → 赤
      return new THREE.Color(value * 4, 0, 0);
    } else if (value < 0.5) {
      // 赤 → 黄
      return new THREE.Color(1, (value - 0.25) * 4, 0);
    } else if (value < 0.75) {
      // 黄 → 白
      const t = (value - 0.5) * 4;
      return new THREE.Color(1, 1, t);
    } else {
      // 白
      return new THREE.Color(1, 1, 1);
    }
  }

  // Viridisカラーマップ
  private viridisColorMap(value: number): THREE.Color {
    // 簡易的なViridis近似
    const r = Math.max(0, Math.min(1, -0.5 + 1.4 * value - 0.9 * value * value));
    const g = Math.max(0, Math.min(1, value * value * value));
    const b = Math.max(0, Math.min(1, 1.0 - 1.5 * value + 0.5 * value * value));
    return new THREE.Color(r, g, b);
  }

  // グレースケール
  private grayscaleColorMap(value: number): THREE.Color {
    return new THREE.Color(value, value, value);
  }

  // 応力表示設定を更新
  public updateStressDisplaySettings(settings: Partial<StressDisplaySettings>): void {
    this.settings.stressDisplay = { ...this.settings.stressDisplay, ...settings };
    
    // 要素を再レンダリング
    this.renderElements();
  }

  // 要素ごとの応力データを取得
  public getElementStressData(): ElementStressData[] {
    console.log('=== getElementStressData 開始 ===');
    console.log('result:', !!this.result);
    console.log('stresses length:', this.result?.stresses?.length || 0);
    console.log('elements length:', this.model.elements.length);
    
    if (!this.result || this.result.stresses.length === 0) {
      console.log('応力データが存在しません');
      return [];
    }

    const stresses = this.result.stresses;
    const minStress = Math.min(...stresses);
    const maxStress = Math.max(...stresses);
    const stressRange = maxStress - minStress;

    console.log('応力範囲:', { min: minStress, max: maxStress, range: stressRange });

    const elementStressData = this.model.elements.map((element, index) => {
      const stress = stresses[index] || 0;
      const normalizedStress = stressRange > 0 ? (stress - minStress) / stressRange : 0;
      const color = this.stressToColor(stress);
      
      const data = {
        elementId: element.id,
        stress,
        normalizedStress,
        color: `#${color.getHexString()}`
      };
      
      console.log(`要素${element.id}のデータ:`, data);
      return data;
    });

    console.log('=== getElementStressData 完了 ===');
    console.log('返却データ:', elementStressData);
    
    return elementStressData;
  }

  // 応力の範囲を取得
  public getStressRange(): { min: number; max: number } {
    if (!this.result || this.result.stresses.length === 0) {
      return { min: 0, max: 0 };
    }

    const stresses = this.result.stresses;
    return {
      min: Math.min(...stresses),
      max: Math.max(...stresses)
    };
  }

  // ビューコントロール用メソッド
  public resetCamera(): void {
    const bbox = this.calculateModelBounds();
    const center = bbox.center;
    const size = bbox.size;
    const distance = Math.max(size.x, size.y, size.z) * 1.5;
    const minDistance = 3;
    const actualDistance = Math.max(distance, minDistance);
    
    this.camera.position.set(
      center.x + actualDistance * 0.6,
      center.y + actualDistance * 0.6,
      center.z + actualDistance * 0.6
    );
    
    if (this.controls) {
      this.controls.target.set(center.x, center.y, center.z);
      this.controls.update();
    }
    
    this.render();
  }

  public setCameraView(viewType: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom' | 'isometric'): void {
    const bbox = this.calculateModelBounds();
    const center = bbox.center;
    const size = bbox.size;
    const distance = Math.max(size.x, size.y, size.z) * 2;
    const minDistance = 5;
    const actualDistance = Math.max(distance, minDistance);
    
    switch (viewType) {
      case 'front':
        this.camera.position.set(center.x, center.y, center.z + actualDistance);
        break;
      case 'back':
        this.camera.position.set(center.x, center.y, center.z - actualDistance);
        break;
      case 'left':
        this.camera.position.set(center.x - actualDistance, center.y, center.z);
        break;
      case 'right':
        this.camera.position.set(center.x + actualDistance, center.y, center.z);
        break;
      case 'top':
        this.camera.position.set(center.x, center.y + actualDistance, center.z);
        break;
      case 'bottom':
        this.camera.position.set(center.x, center.y - actualDistance, center.z);
        break;
      case 'isometric':
        this.camera.position.set(
          center.x + actualDistance * 0.6,
          center.y + actualDistance * 0.6,
          center.z + actualDistance * 0.6
        );
        break;
    }
    
    if (this.controls) {
      this.controls.target.set(center.x, center.y, center.z);
      this.controls.update();
    }
    
    this.render();
  }

  public zoomCamera(factor: number): void {
    if (this.controls) {
      const currentDistance = this.camera.position.distanceTo(this.controls.target);
      const newDistance = currentDistance / factor;
      
      // ズーム制限
      const minDistance = 0.1;
      const maxDistance = 100;
      const clampedDistance = Math.max(minDistance, Math.min(maxDistance, newDistance));
      
      const direction = new THREE.Vector3();
      direction.subVectors(this.camera.position, this.controls.target).normalize();
      
      this.camera.position.copy(this.controls.target).add(direction.multiplyScalar(clampedDistance));
      this.controls.update();
    }
    
    this.render();
  }

  public fitToView(): void {
    const bbox = this.calculateModelBounds();
    const center = bbox.center;
    const size = bbox.size;
    
    // モデルのサイズに基づいてカメラ距離を調整
    const maxDimension = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    const distance = (maxDimension / 2) / Math.tan(fov / 2) * 1.2; // 20%のマージンを追加
    
    // 現在のカメラ方向を維持
    const currentDirection = new THREE.Vector3();
    if (this.controls) {
      currentDirection.subVectors(this.camera.position, this.controls.target).normalize();
    } else {
      currentDirection.set(1, 1, 1).normalize();
    }
    
    this.camera.position.set(
      center.x + currentDirection.x * distance,
      center.y + currentDirection.y * distance,
      center.z + currentDirection.z * distance
    );
    
    if (this.controls) {
      this.controls.target.set(center.x, center.y, center.z);
      this.controls.update();
    }
    
    this.render();
  }
}