import type { 
  Model, 
  Node, 
  BeamElement, 
  Material, 
  BeamSection, 
  Load,
  CustomModelState,
  NodeInput,
  ElementInput,
  LoadInput
} from '../types';
import { FileManager } from '../utils/FileManager';

export class CustomModelEditor {
  private model: Model;
  private state: CustomModelState;
  private nextNodeId: number = 1;
  private nextElementId: number = 1;
  private nextLoadId: number = 1;

  constructor() {
    this.model = {
      nodes: [],
      elements: [],
      materials: [],
      sections: [],
      loads: []
    };
    
    this.state = {
      mode: 'select',
      selectedNodes: [],
      selectedElements: [],
      isCustomMode: true
    };

    // プリセット材料・断面を初期化
    this.initializePresets();
  }

  private initializePresets(): void {
    // プリセット材料を追加（より豊富なラインナップ）
    const presetMaterials = [
      // 鋼材
      {
        name: '構造用鋼 SS400',
        elasticModulus: 205e9,
        poissonRatio: 0.3,
        density: 7850,
        yieldStrength: 235e6
      },
      {
        name: '構造用鋼 SM490',
        elasticModulus: 206e9,
        poissonRatio: 0.3,
        density: 7850,
        yieldStrength: 325e6
      },
      {
        name: '高張力鋼 SM570',
        elasticModulus: 206e9,
        poissonRatio: 0.3,
        density: 7850,
        yieldStrength: 460e6
      },
      // アルミニウム合金
      {
        name: 'アルミニウム A6061-T6',
        elasticModulus: 69e9,
        poissonRatio: 0.33,
        density: 2700,
        yieldStrength: 276e6
      },
      {
        name: 'アルミニウム A7075-T6',
        elasticModulus: 71.7e9,
        poissonRatio: 0.33,
        density: 2810,
        yieldStrength: 503e6
      },
      // コンクリート
      {
        name: '普通コンクリート Fc21',
        elasticModulus: 24e9,
        poissonRatio: 0.2,
        density: 2400,
        yieldStrength: 21e6
      },
      {
        name: '高強度コンクリート Fc36',
        elasticModulus: 30e9,
        poissonRatio: 0.2,
        density: 2400,
        yieldStrength: 36e6
      },
      // その他の材料
      {
        name: '木材（杉）',
        elasticModulus: 7e9,
        poissonRatio: 0.35,
        density: 400,
        yieldStrength: 30e6
      },
      {
        name: 'ステンレス SUS304',
        elasticModulus: 193e9,
        poissonRatio: 0.3,
        density: 7930,
        yieldStrength: 205e6
      }
    ];

    presetMaterials.forEach(material => {
      this.addMaterial(material);
    });

    // プリセット断面を追加（より豊富なラインナップ）
    const presetSections = [
      // H形鋼（JIS規格）
      {
        name: 'H-150×75×5×7',
        area: 1.69e-3,
        momentOfInertiaY: 6.66e-6,
        momentOfInertiaZ: 1.05e-6,
        torsionalConstant: 3.2e-8
      },
      {
        name: 'H-200×100×5.5×8',
        area: 2.55e-3,
        momentOfInertiaY: 1.69e-5,
        momentOfInertiaZ: 2.09e-6,
        torsionalConstant: 7.4e-8
      },
      {
        name: 'H-250×125×6×9',
        area: 3.45e-3,
        momentOfInertiaY: 3.06e-5,
        momentOfInertiaZ: 3.45e-6,
        torsionalConstant: 1.31e-7
      },
      {
        name: 'H-300×150×6.5×9',
        area: 4.52e-3,
        momentOfInertiaY: 4.31e-5,
        momentOfInertiaZ: 5.24e-6,
        torsionalConstant: 2.1e-7
      },
      {
        name: 'H-400×200×8×13',
        area: 8.40e-3,
        momentOfInertiaY: 1.34e-4,
        momentOfInertiaZ: 1.16e-5,
        torsionalConstant: 6.8e-7
      },
      // 角形鋼管
      {
        name: '角パイプ □-75×75×3.2',
        area: 9.01e-4,
        momentOfInertiaY: 2.86e-6,
        momentOfInertiaZ: 2.86e-6,
        torsionalConstant: 5.72e-6
      },
      {
        name: '角パイプ □-100×100×4.5',
        area: 1.71e-3,
        momentOfInertiaY: 6.87e-6,
        momentOfInertiaZ: 6.87e-6,
        torsionalConstant: 1.37e-5
      },
      {
        name: '角パイプ □-150×150×6',
        area: 3.42e-3,
        momentOfInertiaY: 2.06e-5,
        momentOfInertiaZ: 2.06e-5,
        torsionalConstant: 4.12e-5
      },
      // 円形鋼管
      {
        name: '丸パイプ φ-60.5×2.8',
        area: 4.93e-4,
        momentOfInertiaY: 9.42e-7,
        momentOfInertiaZ: 9.42e-7,
        torsionalConstant: 1.88e-6
      },
      {
        name: '丸パイプ φ-89.1×3.2',
        area: 8.62e-4,
        momentOfInertiaY: 2.44e-6,
        momentOfInertiaZ: 2.44e-6,
        torsionalConstant: 4.88e-6
      },
      {
        name: '丸パイプ φ-114.3×4.5',
        area: 1.53e-3,
        momentOfInertiaY: 5.47e-6,
        momentOfInertiaZ: 5.47e-6,
        torsionalConstant: 1.09e-5
      },
      // 矩形断面
      {
        name: '矩形断面 100×50',
        area: 5.0e-3,
        momentOfInertiaY: 2.08e-6,
        momentOfInertiaZ: 5.21e-7,
        torsionalConstant: 5.0e-7
      },
      {
        name: '矩形断面 200×100',
        area: 0.02,
        momentOfInertiaY: 6.67e-6,
        momentOfInertiaZ: 1.67e-6,
        torsionalConstant: 1.0e-6
      },
      {
        name: '矩形断面 300×150',
        area: 0.045,
        momentOfInertiaY: 1.69e-5,
        momentOfInertiaZ: 4.22e-6,
        torsionalConstant: 2.25e-6
      },
      // 円形断面
      {
        name: '円形断面 φ-100',
        area: 7.85e-3,
        momentOfInertiaY: 4.91e-6,
        momentOfInertiaZ: 4.91e-6,
        torsionalConstant: 9.82e-6
      },
      {
        name: '円形断面 φ-150',
        area: 1.77e-2,
        momentOfInertiaY: 2.49e-5,
        momentOfInertiaZ: 2.49e-5,
        torsionalConstant: 4.97e-5
      }
    ];

    presetSections.forEach(section => {
      this.addSection(section);
    });
  }

  // ノードの追加
  public addNode(input: NodeInput): Node {
    console.log('CustomModelEditor: ノード追加開始', input);
    
    const node: Node = {
      id: this.nextNodeId++,
      position: { x: input.x, y: input.y, z: input.z },
      isFixed: input.isFixed || false,
      fixedDOF: {
        dx: input.isFixed || false,
        dy: input.isFixed || false,
        dz: input.isFixed || false,
        rx: input.isFixed || false,
        ry: input.isFixed || false,
        rz: input.isFixed || false
      }
    };
    
    console.log('CustomModelEditor: 作成されたノード', node);
    this.model.nodes.push(node);
    console.log('CustomModelEditor: モデルのノード数', this.model.nodes.length);
    console.log('CustomModelEditor: モデルの全ノード', this.model.nodes);
    
    return node;
  }

  // 要素の追加
  public addElement(input: ElementInput): BeamElement | null {
    // ノードの存在確認
    const node1 = this.model.nodes.find(n => n.id === input.nodeId1);
    const node2 = this.model.nodes.find(n => n.id === input.nodeId2);
    
    if (!node1 || !node2) {
      throw new Error('指定されたノードが存在しません');
    }

    if (input.nodeId1 === input.nodeId2) {
      throw new Error('同じノードを指定することはできません');
    }

    // 材料と断面の存在確認
    const material = this.model.materials.find(m => m.id === input.materialId);
    const section = this.model.sections.find(s => s.id === input.sectionId);
    
    if (!material || !section) {
      throw new Error('指定された材料または断面が存在しません');
    }

    const element: BeamElement = {
      id: this.nextElementId++,
      nodeIds: [input.nodeId1, input.nodeId2],
      materialId: input.materialId,
      sectionId: input.sectionId
    };
    
    this.model.elements.push(element);
    return element;
  }

  // 材料追加メソッド
  public addMaterial(material: Omit<Material, 'id'>): Material {
    const newId = Math.max(0, ...this.model.materials.map(m => m.id)) + 1;
    const newMaterial: Material = {
      id: newId,
      ...material
    };
    this.model.materials.push(newMaterial);
    return newMaterial;
  }

  // 断面追加メソッド
  public addSection(section: Omit<BeamSection, 'id'>): BeamSection {
    const newId = Math.max(0, ...this.model.sections.map(s => s.id)) + 1;
    const newSection: BeamSection = {
      id: newId,
      ...section
    };
    this.model.sections.push(newSection);
    return newSection;
  }

  // 荷重の追加
  public addLoad(input: LoadInput): Load {
    // ノードの存在確認
    const node = this.model.nodes.find(n => n.id === input.nodeId);
    if (!node) {
      throw new Error('指定されたノードが存在しません');
    }

    const load: Load = {
      id: this.nextLoadId++,
      nodeId: input.nodeId,
      force: { x: input.fx, y: input.fy, z: input.fz },
      moment: { x: input.mx, y: input.my, z: input.mz }
    };
    
    this.model.loads.push(load);
    return load;
  }

  // 境界条件の設定
  public setBoundaryCondition(nodeId: number, fixedDOF: Partial<Node['fixedDOF']>): void {
    const node = this.model.nodes.find(n => n.id === nodeId);
    if (!node) {
      throw new Error('指定されたノードが存在しません');
    }

    Object.assign(node.fixedDOF, fixedDOF);
    node.isFixed = Object.values(node.fixedDOF).some(fixed => fixed);
  }

  // モード設定
  public setMode(mode: 'select' | 'add-node' | 'add-element' | 'set-boundary' | 'set-load'): void {
    this.state.mode = mode;
  }

  public getMode(): CustomModelState['mode'] {
    return this.state.mode;
  }

  // 状態取得
  public getState(): CustomModelState {
    return { ...this.state };
  }

  // 選択管理
  public selectNode(nodeId: number, multiSelect = false): void {
    if (!multiSelect) {
      this.state.selectedNodes = [nodeId];
    } else {
      if (this.state.selectedNodes.includes(nodeId)) {
        this.state.selectedNodes = this.state.selectedNodes.filter(id => id !== nodeId);
      } else {
        this.state.selectedNodes.push(nodeId);
      }
    }
  }

  public selectElement(elementId: number, multiSelect = false): void {
    if (!multiSelect) {
      this.state.selectedElements = [elementId];
    } else {
      if (this.state.selectedElements.includes(elementId)) {
        this.state.selectedElements = this.state.selectedElements.filter(id => id !== elementId);
      } else {
        this.state.selectedElements.push(elementId);
      }
    }
  }

  public clearSelection(): void {
    this.state.selectedNodes = [];
    this.state.selectedElements = [];
  }

  public getSelectedNodes(): number[] {
    return [...this.state.selectedNodes];
  }

  public getSelectedElements(): number[] {
    return [...this.state.selectedElements];
  }

  // モデル取得
  public getModel(): Model {
    return this.model;
  }

  // 選択されたノード・要素を削除
  public deleteSelected(): { deletedNodes: number; deletedElements: number; errors: string[] } {
    console.log('CustomModelEditor: 選択項目削除開始');
    
    const errors: string[] = [];
    let deletedNodes = 0;
    let deletedElements = 0;

    // 選択されたノードを削除
    const selectedNodes = [...this.state.selectedNodes];
    for (const nodeId of selectedNodes) {
      try {
        // ノードを参照している要素がないかチェック
        const referencingElements = this.model.elements.filter(
          element => element.nodeIds.includes(nodeId)
        );

        if (referencingElements.length > 0) {
          errors.push(`ノード${nodeId}は要素${referencingElements.map(e => e.id).join(', ')}に使用されているため削除できません`);
          continue;
        }

        // ノードを削除
        this.model.nodes = this.model.nodes.filter(node => node.id !== nodeId);
        
        // ノードに関連する荷重を削除
        const beforeLoadCount = this.model.loads.length;
        this.model.loads = this.model.loads.filter(load => load.nodeId !== nodeId);
        const deletedLoads = beforeLoadCount - this.model.loads.length;
        
        if (deletedLoads > 0) {
          console.log(`ノード${nodeId}の削除に伴い、${deletedLoads}個の荷重を削除`);
        }

        deletedNodes++;
        console.log(`ノード${nodeId}を削除`);
      } catch (error) {
        console.error(`ノード${nodeId}の削除でエラー:`, error);
        errors.push(`ノード${nodeId}の削除でエラーが発生しました`);
      }
    }

    // 選択された要素を削除
    const selectedElements = [...this.state.selectedElements];
    for (const elementId of selectedElements) {
      try {
        this.model.elements = this.model.elements.filter(element => element.id !== elementId);
        deletedElements++;
        console.log(`要素${elementId}を削除`);
      } catch (error) {
        console.error(`要素${elementId}の削除でエラー:`, error);
        errors.push(`要素${elementId}の削除でエラーが発生しました`);
      }
    }

    // 選択状態をクリア
    this.clearSelection();

    console.log('CustomModelEditor: 削除完了', { deletedNodes, deletedElements, errors });
    return { deletedNodes, deletedElements, errors };
  }

  // 特定のノードを削除
  public deleteNode(nodeId: number): { success: boolean; error?: string } {
    console.log('CustomModelEditor: ノード削除', nodeId);

    // ノードを参照している要素がないかチェック
    const referencingElements = this.model.elements.filter(
      element => element.nodeIds.includes(nodeId)
    );

    if (referencingElements.length > 0) {
      return {
        success: false,
        error: `ノード${nodeId}は要素${referencingElements.map(e => e.id).join(', ')}に使用されているため削除できません`
      };
    }

    // ノードを削除
    this.model.nodes = this.model.nodes.filter(node => node.id !== nodeId);
    
    // ノードに関連する荷重を削除
    const beforeLoadCount = this.model.loads.length;
    this.model.loads = this.model.loads.filter(load => load.nodeId !== nodeId);
    const deletedLoads = beforeLoadCount - this.model.loads.length;
    
    if (deletedLoads > 0) {
      console.log(`ノード${nodeId}の削除に伴い、${deletedLoads}個の荷重を削除`);
    }

    // 選択状態から削除
    this.state.selectedNodes = this.state.selectedNodes.filter(id => id !== nodeId);

    console.log(`ノード${nodeId}を削除完了`);
    return { success: true };
  }

  // 特定の要素を削除
  public deleteElement(elementId: number): { success: boolean; error?: string } {
    console.log('CustomModelEditor: 要素削除', elementId);

    this.model.elements = this.model.elements.filter(element => element.id !== elementId);
    
    // 選択状態から削除
    this.state.selectedElements = this.state.selectedElements.filter(id => id !== elementId);

    console.log(`要素${elementId}を削除完了`);
    return { success: true };
  }

  // モデル保存
  public async saveModel(filename?: string): Promise<{ success: boolean; message: string }> {
    try {
      console.log('CustomModelEditor: モデル保存開始');
      
      // モデル検証
      const validation = this.validateModel();
      if (!validation.isValid) {
        console.warn('CustomModelEditor: モデル検証エラー', validation.errors);
        return {
          success: false,
          message: `モデル検証エラー: ${validation.errors.join(', ')}`
        };
      }

      // 追加データの準備
      const additionalData = {
        state: this.state,
        nextNodeId: this.nextNodeId,
        nextElementId: this.nextElementId,
        nextLoadId: this.nextLoadId
      };

      // ファイルエクスポート
      const result = FileManager.exportModel(this.model, filename, additionalData);
      
      if (result.success) {
        console.log('CustomModelEditor: モデル保存完了', result.filename);
        return {
          success: true,
          message: result.message
        };
      } else {
        console.error('CustomModelEditor: モデル保存失敗', result.error);
        return {
          success: false,
          message: result.error || 'モデル保存に失敗しました'
        };
      }
    } catch (error) {
      console.error('CustomModelEditor: モデル保存エラー', error);
      return {
        success: false,
        message: `保存エラー: ${error instanceof Error ? error.message : '不明なエラー'}`
      };
    }
  }

  // モデル読み込み
  public async loadModel(): Promise<{ success: boolean; message: string }> {
    try {
      console.log('CustomModelEditor: モデル読み込み開始');
      
      // ファイルインポート
      const result = await FileManager.importModel();
      
      if (result.success && result.data) {
        console.log('CustomModelEditor: モデルデータ読み込み完了', result.data);
        
        // データの復元
        this.model = result.data.model;
        this.state = result.data.state || {
          mode: 'select',
          selectedNodes: [],
          selectedElements: [],
          isCustomMode: true
        };
        this.nextNodeId = result.data.nextNodeId || this.getMaxNodeId() + 1;
        this.nextElementId = result.data.nextElementId || this.getMaxElementId() + 1;
        this.nextLoadId = result.data.nextLoadId || this.getMaxLoadId() + 1;

        // 読み込み後の検証
        const validation = this.validateModel();
        if (!validation.isValid) {
          console.warn('CustomModelEditor: 読み込みモデル検証警告', validation.errors);
        }

        console.log('CustomModelEditor: モデル復元完了');
        return {
          success: true,
          message: result.message
        };
      } else {
        console.error('CustomModelEditor: モデル読み込み失敗', result.error);
        return {
          success: false,
          message: result.error || 'モデル読み込みに失敗しました'
        };
      }
    } catch (error) {
      console.error('CustomModelEditor: モデル読み込みエラー', error);
      return {
        success: false,
        message: `読み込みエラー: ${error instanceof Error ? error.message : '不明なエラー'}`
      };
    }
  }

  // IDの最大値を取得するヘルパーメソッド
  private getMaxNodeId(): number {
    return this.model.nodes.length > 0 ? Math.max(...this.model.nodes.map(n => n.id)) : 0;
  }

  private getMaxElementId(): number {
    return this.model.elements.length > 0 ? Math.max(...this.model.elements.map(e => e.id)) : 0;
  }

  private getMaxLoadId(): number {
    return this.model.loads.length > 0 ? Math.max(...this.model.loads.map(l => l.id)) : 0;
  }

  // モデル検証
  public validateModel(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (this.model.nodes.length < 2) {
      errors.push('最低2つのノードが必要です');
    }

    if (this.model.elements.length < 1) {
      errors.push('最低1つの要素が必要です');
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
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // 統計情報
  public getModelStats() {
    return {
      nodeCount: this.model.nodes.length,
      elementCount: this.model.elements.length,
      loadCount: this.model.loads.length,
      fixedNodeCount: this.model.nodes.filter(n => n.isFixed).length,
      totalDOF: this.model.nodes.length * 6,
      freeDOF: this.model.nodes.filter(n => !n.isFixed).length * 6
    };
  }

  // モデルクリア（新規作成用）
  public clearModel(): void {
    console.log('CustomModelEditor: モデルクリア');
    
    this.model = {
      nodes: [],
      elements: [],
      materials: [],
      sections: [],
      loads: []
    };
    
    this.state = {
      mode: 'select',
      selectedNodes: [],
      selectedElements: [],
      isCustomMode: true
    };

    this.nextNodeId = 1;
    this.nextElementId = 1;
    this.nextLoadId = 1;

    // プリセット材料・断面を再初期化
    this.initializePresets();
  }

  // 直接モデルデータを読み込み（検証事例用）
  public loadModelData(modelData: Model): void {
    console.log('CustomModelEditor: 直接モデルデータ読み込み');
    console.log('読み込みデータ:', modelData);
    
    // 検証用モデルかどうかを判定
    const isVerificationModel = modelData.materials.some(m => m.name.includes('検証用'));
    
    if (isVerificationModel) {
      console.log('検証用モデルを検出: プリセットを無視して検証用データのみを使用');
      // 検証用モデルの場合は、プリセットを使わずに検証用データのみを使用
      this.model = {
        nodes: [...modelData.nodes],
        elements: [...modelData.elements],
        materials: [...modelData.materials], // 検証用材料のみ
        sections: [...modelData.sections],   // 検証用断面のみ
        loads: [...modelData.loads]
      };
    } else {
      // 通常のモデルの場合は、現在のモデルをクリアしてプリセットを再初期化
      this.clearModel();
      
      // 新しいデータを設定（プリセットと結合）
      this.model = {
        nodes: [...modelData.nodes],
        elements: [...modelData.elements],
        materials: [...this.model.materials, ...modelData.materials], // プリセットと結合
        sections: [...this.model.sections, ...modelData.sections], // プリセットと結合
        loads: [...modelData.loads]
      };
    }

    // IDカウンターを更新
    if (modelData.nodes.length > 0) {
      this.nextNodeId = Math.max(...modelData.nodes.map(n => n.id)) + 1;
    }
    if (modelData.elements.length > 0) {
      this.nextElementId = Math.max(...modelData.elements.map(e => e.id)) + 1;
    }
    if (modelData.loads.length > 0) {
      this.nextLoadId = Math.max(...modelData.loads.map(l => l.id)) + 1;
    }

    console.log('モデルデータ読み込み完了');
    console.log('最終モデル:', this.model);
    console.log('材料一覧:', this.model.materials.map(m => `ID:${m.id} ${m.name}`));
    console.log('断面一覧:', this.model.sections.map(s => `ID:${s.id} ${s.name}`));
  }
}
