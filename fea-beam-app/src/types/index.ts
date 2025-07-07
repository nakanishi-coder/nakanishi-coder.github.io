// 3D座標と数値計算の基本型定義

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface Node {
  id: number;
  position: Vector3D;
  displacements?: Vector3D;
  forces?: Vector3D;
  moments?: Vector3D;
  isFixed: boolean;
  fixedDOF: {
    dx: boolean;
    dy: boolean;
    dz: boolean;
    rx: boolean;
    ry: boolean;
    rz: boolean;
  };
}

export interface Material {
  id: number;
  name: string;
  elasticModulus: number; // ヤング率 [Pa]
  poissonRatio: number;    // ポアソン比
  density: number;         // 密度 [kg/m³]
  yieldStrength: number;   // 降伏応力 [Pa]
}

export interface BeamSection {
  id: number;
  name: string;
  area: number;           // 断面積 [m²]
  momentOfInertiaY: number; // y軸周りの断面二次モーメント [m⁴]
  momentOfInertiaZ: number; // z軸周りの断面二次モーメント [m⁴]
  torsionalConstant: number; // ねじり定数 [m⁴]
}

export interface BeamElement {
  id: number;
  nodeIds: [number, number]; // 開始ノード、終了ノード
  materialId: number;
  sectionId: number;
  length?: number; // 自動計算される
  localAxis?: {
    x: Vector3D;
    y: Vector3D;
    z: Vector3D;
  };
}

export interface Load {
  id: number;
  nodeId: number;
  force: Vector3D;
  moment: Vector3D;
}

export interface AnalysisResult {
  displacements: Vector3D[];
  forces: Vector3D[];
  moments: Vector3D[];
  stresses: number[];
  strains: number[];
  reactions: Vector3D[];
}

// 応力表示用の型定義
export interface StressDisplaySettings {
  showStressValues: boolean;
  showStressDistribution: boolean;
  colorMapType: 'rainbow' | 'heat' | 'grayscale' | 'viridis';
  minStress?: number;
  maxStress?: number;
  scaleMode: 'auto' | 'manual';
}

export interface ElementStressData {
  elementId: number;
  stress: number;
  normalizedStress: number; // 0-1の範囲
  color: string; // hex color
}

export interface Model {
  nodes: Node[];
  elements: BeamElement[];
  materials: Material[];
  sections: BeamSection[];
  loads: Load[];
}

// 解析設定
export interface AnalysisSettings {
  type: 'static' | 'dynamic' | 'modal';
  tolerance: number;
  maxIterations: number;
  includeGeometricNonlinearity: boolean;
  includeMaterialNonlinearity: boolean;
}

// ポストプロセッサの表示設定
export interface VisualizationSettings {
  showDisplacements: boolean;
  displacementScale: number;
  showStresses: boolean;
  showStrains: boolean;
  colorMap: 'rainbow' | 'heat' | 'grayscale';
  showMesh: boolean;
  showNodes: boolean;
  showNodeNumbers?: boolean;
  showLoads: boolean;
  showBoundaryConditions: boolean;
  stressDisplay: StressDisplaySettings;
}

// カスタムモデル作成用の型定義
export interface CustomModelState {
  mode: 'select' | 'add-node' | 'add-element' | 'set-boundary' | 'set-load';
  selectedNodes: number[];
  selectedElements: number[];
  isCustomMode: boolean;
}

export interface NodeInput {
  x: number;
  y: number;
  z: number;
  isFixed?: boolean;
}

export interface ElementInput {
  nodeId1: number;
  nodeId2: number;
  materialId: number;
  sectionId: number;
}

export interface LoadInput {
  nodeId: number;
  fx: number;
  fy: number;
  fz: number;
  mx: number;
  my: number;
  mz: number;
}

// インタラクション用の型定義
export interface InteractionMode {
  type: 'select' | 'add-node' | 'add-element' | 'set-boundary' | 'set-load' | 'pan' | 'zoom';
  isActive: boolean;
}

export interface MouseEventData {
  position: { x: number; y: number };
  worldPosition?: Vector3D;
  button: number;
  ctrlKey: boolean;
  shiftKey: boolean;
}

export interface SelectionData {
  selectedNodes: number[];
  selectedElements: number[];
  hoveredNode?: number | null;
  hoveredElement?: number | null;
}

export interface InteractionCallbacks {
  onNodeClick?: (nodeId: number, event: MouseEventData) => void;
  onElementClick?: (elementId: number, event: MouseEventData) => void;
  onNodeHover?: (nodeId: number | null) => void;
  onElementHover?: (elementId: number | null) => void;
  onBackgroundClick?: (worldPosition: Vector3D, event: MouseEventData) => void;
  onNodeDragStart?: (nodeId: number, position: Vector3D) => void;
  onNodeDrag?: (nodeId: number, position: Vector3D) => void;
  onNodeDragEnd?: (nodeId: number, position: Vector3D) => void;
}

// ファイル操作の型定義
export interface ModelFileData {
  version: string;
  created: string;
  description?: string;
  model: Model;
  state?: CustomModelState;
  nextNodeId?: number;
  nextElementId?: number;
  nextLoadId?: number;
}

export interface FileOperationResult {
  success: boolean;
  message: string;
  error?: string;
  filename?: string;
}

export interface FileImportResult {
  success: boolean;
  message: string;
  error?: string;
  data?: ModelFileData;
  filename?: string;
}
