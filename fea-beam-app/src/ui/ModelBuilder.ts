import type { Model, Node, BeamElement, Material, BeamSection, Load } from '../types';

export class ModelBuilder {
  private model: Model;
  private nodeIdCounter: number = 1;
  private elementIdCounter: number = 1;
  private materialIdCounter: number = 1;
  private sectionIdCounter: number = 1;
  private loadIdCounter: number = 1;

  constructor() {
    this.model = {
      nodes: [],
      elements: [],
      materials: [],
      sections: [],
      loads: []
    };
  }

  // ノードの追加
  public addNode(x: number, y: number, z: number, isFixed = false): Node {
    const node: Node = {
      id: this.nodeIdCounter++,
      position: { x, y, z },
      isFixed,
      fixedDOF: {
        dx: isFixed,
        dy: isFixed,
        dz: isFixed,
        rx: isFixed,
        ry: isFixed,
        rz: isFixed
      }
    };
    this.model.nodes.push(node);
    return node;
  }

  // 材料の追加
  public addMaterial(
    name: string,
    elasticModulus: number,
    poissonRatio: number,
    density: number,
    yieldStrength: number
  ): Material {
    const material: Material = {
      id: this.materialIdCounter++,
      name,
      elasticModulus,
      poissonRatio,
      density,
      yieldStrength
    };
    this.model.materials.push(material);
    return material;
  }

  // 断面の追加
  public addSection(
    name: string,
    area: number,
    momentOfInertiaY: number,
    momentOfInertiaZ: number,
    torsionalConstant: number
  ): BeamSection {
    const section: BeamSection = {
      id: this.sectionIdCounter++,
      name,
      area,
      momentOfInertiaY,
      momentOfInertiaZ,
      torsionalConstant
    };
    this.model.sections.push(section);
    return section;
  }

  // 要素の追加
  public addElement(nodeId1: number, nodeId2: number, materialId: number, sectionId: number): BeamElement {
    const element: BeamElement = {
      id: this.elementIdCounter++,
      nodeIds: [nodeId1, nodeId2],
      materialId,
      sectionId
    };
    this.model.elements.push(element);
    return element;
  }

  // 荷重の追加
  public addLoad(
    nodeId: number,
    forceX = 0,
    forceY = 0,
    forceZ = 0,
    momentX = 0,
    momentY = 0,
    momentZ = 0
  ): Load {
    const load: Load = {
      id: this.loadIdCounter++,
      nodeId,
      force: { x: forceX, y: forceY, z: forceZ },
      moment: { x: momentX, y: momentY, z: momentZ }
    };
    this.model.loads.push(load);
    return load;
  }

  // 境界条件の設定
  public setNodeFixity(nodeId: number, dx = true, dy = true, dz = true, rx = true, ry = true, rz = true): void {
    const node = this.model.nodes.find(n => n.id === nodeId);
    if (node) {
      node.isFixed = dx || dy || dz || rx || ry || rz;
      node.fixedDOF = { dx, dy, dz, rx, ry, rz };
    }
  }

  // プリセットモデルの生成
  public createSimpleBeamModel(): Model {
    // シンプルな片持ち梁のモデル
    this.clear();

    // 材料（鋼材）
    const steel = this.addMaterial('Steel', 210e9, 0.3, 7850, 250e6);

    // 断面（矩形断面 100mm x 200mm）
    const section = this.addSection('Rect100x200', 0.02, 6.67e-6, 1.67e-6, 1.0e-6);

    // ノード（5m の梁を10分割）
    const nodes = [];
    for (let i = 0; i <= 10; i++) {
      const x = i * 0.5; // 0.5m間隔
      const isFixed = (i === 0); // 左端固定
      nodes.push(this.addNode(x, 0, 0, isFixed));
    }

    // 要素
    for (let i = 0; i < 10; i++) {
      this.addElement(nodes[i].id, nodes[i + 1].id, steel.id, section.id);
    }

    // 荷重（右端に下向き1000N）
    this.addLoad(nodes[10].id, 0, -1000, 0);

    return this.model;
  }

  public createTrussModel(): Model {
    // シンプルなトラス構造
    this.clear();

    // 材料
    const steel = this.addMaterial('Steel', 210e9, 0.3, 7850, 250e6);

    // 断面
    const section = this.addSection('Pipe50x5', 7.54e-4, 2.9e-7, 2.9e-7, 5.8e-7);

    // ノード
    const node1 = this.addNode(0, 0, 0, true);    // 左下固定
    const node2 = this.addNode(2, 0, 0, true);    // 右下固定
    const node3 = this.addNode(1, 2, 0, false);   // 上部中央

    // 要素
    this.addElement(node1.id, node3.id, steel.id, section.id); // 左の斜材
    this.addElement(node2.id, node3.id, steel.id, section.id); // 右の斜材
    this.addElement(node1.id, node2.id, steel.id, section.id); // 下弦材

    // 荷重（上部中央に下向き5000N）
    this.addLoad(node3.id, 0, -5000, 0);

    return this.model;
  }

  public createFrameModel(): Model {
    // 門型ラーメン構造
    this.clear();

    // 材料
    const steel = this.addMaterial('Steel', 210e9, 0.3, 7850, 250e6);

    // 断面（H型鋼 H200x100x5.5x8）
    const section = this.addSection('H200x100', 2.55e-3, 1.69e-5, 2.09e-6, 7.4e-8);

    // ノード
    const node1 = this.addNode(0, 0, 0, true);    // 左下固定
    const node2 = this.addNode(4, 0, 0, true);    // 右下固定
    const node3 = this.addNode(0, 3, 0, false);   // 左上
    const node4 = this.addNode(4, 3, 0, false);   // 右上

    // 要素
    this.addElement(node1.id, node3.id, steel.id, section.id); // 左柱
    this.addElement(node2.id, node4.id, steel.id, section.id); // 右柱
    this.addElement(node3.id, node4.id, steel.id, section.id); // 梁

    // 荷重（梁の中央と右端に荷重）
    this.addLoad(node3.id, 0, -2000, 0);
    this.addLoad(node4.id, 0, -2000, 0);

    return this.model;
  }

  // モデルのクリア
  public clear(): void {
    this.model = {
      nodes: [],
      elements: [],
      materials: [],
      sections: [],
      loads: []
    };
    this.nodeIdCounter = 1;
    this.elementIdCounter = 1;
    this.materialIdCounter = 1;
    this.sectionIdCounter = 1;
    this.loadIdCounter = 1;
  }

  // モデルの検証
  public validateModel(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 最低限のチェック
    if (this.model.nodes.length < 2) {
      errors.push('最低2つのノードが必要です');
    }

    if (this.model.elements.length < 1) {
      errors.push('最低1つの要素が必要です');
    }

    if (this.model.materials.length < 1) {
      errors.push('最低1つの材料が必要です');
    }

    if (this.model.sections.length < 1) {
      errors.push('最低1つの断面が必要です');
    }

    // 境界条件のチェック
    const hasFixedNode = this.model.nodes.some(node => node.isFixed);
    if (!hasFixedNode) {
      errors.push('最低1つの固定点が必要です');
    }

    // 要素の接続チェック
    this.model.elements.forEach(element => {
      const node1Exists = this.model.nodes.some(n => n.id === element.nodeIds[0]);
      const node2Exists = this.model.nodes.some(n => n.id === element.nodeIds[1]);
      
      if (!node1Exists || !node2Exists) {
        errors.push(`要素${element.id}が存在しないノードを参照しています`);
      }

      const materialExists = this.model.materials.some(m => m.id === element.materialId);
      const sectionExists = this.model.sections.some(s => s.id === element.sectionId);
      
      if (!materialExists) {
        errors.push(`要素${element.id}が存在しない材料を参照しています`);
      }
      
      if (!sectionExists) {
        errors.push(`要素${element.id}が存在しない断面を参照しています`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  public getModel(): Model {
    return this.model;
  }

  // モデルの統計情報
  public getModelStats() {
    return {
      nodeCount: this.model.nodes.length,
      elementCount: this.model.elements.length,
      materialCount: this.model.materials.length,
      sectionCount: this.model.sections.length,
      loadCount: this.model.loads.length,
      fixedNodeCount: this.model.nodes.filter(n => n.isFixed).length,
      totalDOF: this.model.nodes.length * 6,
      freeDOF: this.model.nodes.filter(n => !n.isFixed).length * 6
    };
  }
}
