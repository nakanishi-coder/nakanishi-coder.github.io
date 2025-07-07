import { Matrix, inverse } from 'ml-matrix';
import type { Model, AnalysisResult, AnalysisSettings, Vector3D } from '../types';
import { BeamElementAnalysis } from './BeamElement';

export class FEAEngine {
  private model: Model;
  private globalStiffnessMatrix?: Matrix;
  private globalForceVector?: Matrix;
  private nodeMapping: Map<number, number>; // ノードIDから行列インデックスへのマッピング
  private result?: AnalysisResult; // 解析結果を保存

  constructor(model: Model, _settings: AnalysisSettings) {
    this.model = model;
    this.nodeMapping = new Map();
    this.createNodeMapping();
  }

  private createNodeMapping(): void {
    this.model.nodes.forEach((node, index) => {
      this.nodeMapping.set(node.id, index);
    });
  }

  // 全体剛性マトリクスの組み立て
  private assembleGlobalStiffnessMatrix(): void {
    const numNodes = this.model.nodes.length;
    const matrixSize = numNodes * 6; // 各ノード6自由度
    this.globalStiffnessMatrix = Matrix.zeros(matrixSize, matrixSize);

    this.model.elements.forEach(element => {
      const material = this.model.materials.find(m => m.id === element.materialId)!;
      const section = this.model.sections.find(s => s.id === element.sectionId)!;
      const elementNodes = [
        this.model.nodes.find(n => n.id === element.nodeIds[0])!,
        this.model.nodes.find(n => n.id === element.nodeIds[1])!
      ];

      const beamElement = new BeamElementAnalysis(element, elementNodes, material, section);
      const elementK = beamElement.getGlobalStiffnessMatrix();

      // 要素剛性マトリクスを全体剛性マトリクスに組み込み
      const node1Index = this.nodeMapping.get(element.nodeIds[0])! * 6;
      const node2Index = this.nodeMapping.get(element.nodeIds[1])! * 6;

      const K = this.globalStiffnessMatrix!; // null安全のため

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          // ノード1-ノード1
          K.set(
            node1Index + i,
            node1Index + j,
            K.get(node1Index + i, node1Index + j) + elementK.get(i, j)
          );
          // ノード1-ノード2
          K.set(
            node1Index + i,
            node2Index + j,
            K.get(node1Index + i, node2Index + j) + elementK.get(i, j + 6)
          );
          // ノード2-ノード1
          K.set(
            node2Index + i,
            node1Index + j,
            K.get(node2Index + i, node1Index + j) + elementK.get(i + 6, j)
          );
          // ノード2-ノード2
          K.set(
            node2Index + i,
            node2Index + j,
            K.get(node2Index + i, node2Index + j) + elementK.get(i + 6, j + 6)
          );
        }
      }
    });
  }

  // 全体荷重ベクトルの組み立て
  private assembleGlobalForceVector(): void {
    const numNodes = this.model.nodes.length;
    const vectorSize = numNodes * 6;
    this.globalForceVector = Matrix.zeros(vectorSize, 1);

    const F = this.globalForceVector!; // null安全のため

    this.model.loads.forEach(load => {
      const nodeIndex = this.nodeMapping.get(load.nodeId)! * 6;
      
      // 力の成分
      F.set(nodeIndex + 0, 0, F.get(nodeIndex + 0, 0) + load.force.x);
      F.set(nodeIndex + 1, 0, F.get(nodeIndex + 1, 0) + load.force.y);
      F.set(nodeIndex + 2, 0, F.get(nodeIndex + 2, 0) + load.force.z);
      
      // モーメントの成分
      F.set(nodeIndex + 3, 0, F.get(nodeIndex + 3, 0) + load.moment.x);
      F.set(nodeIndex + 4, 0, F.get(nodeIndex + 4, 0) + load.moment.y);
      F.set(nodeIndex + 5, 0, F.get(nodeIndex + 5, 0) + load.moment.z);
    });
  }

  // 境界条件の適用
  private applyBoundaryConditions(): { modifiedK: Matrix; modifiedF: Matrix; constraintDOFs: number[] } {
    if (!this.globalStiffnessMatrix || !this.globalForceVector) {
      throw new Error('グローバル行列が初期化されていません');
    }

    const constraintDOFs: number[] = [];
    
    // 固定自由度を特定
    this.model.nodes.forEach(node => {
      if (node.isFixed) {
        const nodeIndex = this.nodeMapping.get(node.id)! * 6;
        if (node.fixedDOF.dx) constraintDOFs.push(nodeIndex + 0);
        if (node.fixedDOF.dy) constraintDOFs.push(nodeIndex + 1);
        if (node.fixedDOF.dz) constraintDOFs.push(nodeIndex + 2);
        if (node.fixedDOF.rx) constraintDOFs.push(nodeIndex + 3);
        if (node.fixedDOF.ry) constraintDOFs.push(nodeIndex + 4);
        if (node.fixedDOF.rz) constraintDOFs.push(nodeIndex + 5);
      }
    });

    // 自由自由度のインデックス
    const freeDOFs: number[] = [];
    const totalDOFs = this.model.nodes.length * 6;
    for (let i = 0; i < totalDOFs; i++) {
      if (!constraintDOFs.includes(i)) {
        freeDOFs.push(i);
      }
    }

    // 縮小された剛性マトリクスと荷重ベクトル
    const reducedSize = freeDOFs.length;
    const modifiedK = Matrix.zeros(reducedSize, reducedSize);
    const modifiedF = Matrix.zeros(reducedSize, 1);

    for (let i = 0; i < reducedSize; i++) {
      for (let j = 0; j < reducedSize; j++) {
        modifiedK.set(i, j, this.globalStiffnessMatrix.get(freeDOFs[i], freeDOFs[j]));
      }
      modifiedF.set(i, 0, this.globalForceVector.get(freeDOFs[i], 0));
    }

    return { modifiedK, modifiedF, constraintDOFs };
  }

  // 静解析の実行
  public solveStatic(): AnalysisResult {
    console.log('静解析を開始しています...');
    
    // 全体剛性マトリクスと荷重ベクトルの組み立て
    this.assembleGlobalStiffnessMatrix();
    this.assembleGlobalForceVector();

    console.log(`全体剛性マトリクス: ${this.globalStiffnessMatrix!.rows}x${this.globalStiffnessMatrix!.columns}`);
    console.log(`全体荷重ベクトル: ${this.globalForceVector!.rows}x${this.globalForceVector!.columns}`);

    // 境界条件の適用
    const { modifiedK, modifiedF, constraintDOFs } = this.applyBoundaryConditions();
    console.log(`縮小後のマトリクスサイズ: ${modifiedK.rows}x${modifiedK.columns}`);
    console.log('拘束された自由度:', constraintDOFs);
    console.log('自由な自由度数:', modifiedK.rows);
    
    // 剛性マトリクスの条件数をチェック
    console.log('剛性マトリクスの対角成分（最初の10個）:', 
      Array.from({length: Math.min(10, modifiedK.rows)}, (_, i) => 
        modifiedK.get(i, i).toExponential(3)
      )
    );

    // 連立方程式の求解 K * u = F
    let displacementSolution: Matrix;
    try {
      // 逆行列を用いた求解
      const invK = inverse(modifiedK);
      displacementSolution = invK.mmul(modifiedF);
    } catch (error) {
      console.error('連立方程式の求解に失敗しました:', error);
      throw new Error('剛性マトリクスが特異です。境界条件を確認してください。');
    }

    // 全自由度の変位ベクトルを復元
    const totalDOFs = this.model.nodes.length * 6;
    const fullDisplacements = Matrix.zeros(totalDOFs, 1);
    let solutionIndex = 0;

    for (let i = 0; i < totalDOFs; i++) {
      if (!constraintDOFs.includes(i)) {
        fullDisplacements.set(i, 0, displacementSolution.get(solutionIndex++, 0));
      }
    }

    // 結果をノード形式に変換
    const displacements = this.extractNodeDisplacements(fullDisplacements);
    const { forces, moments, stresses, strains } = this.calculateElementResults(fullDisplacements);

    // 反力の計算
    const reactions = this.calculateReactions(fullDisplacements);

    console.log('静解析が完了しました。');

    const analysisResult: AnalysisResult = {
      displacements,
      forces,
      moments,
      stresses,
      strains,
      reactions
    };

    // 結果を保存
    this.result = analysisResult;

    return analysisResult;
  }

  private extractNodeDisplacements(fullDisplacements: Matrix) {
    const displacements = [];
    console.log('=== 変位抽出開始 ===');
    console.log('全変位ベクトルサイズ:', fullDisplacements.rows, 'x', fullDisplacements.columns);
    
    for (let i = 0; i < this.model.nodes.length; i++) {
      const nodeIndex = i * 6;
      const displacement = {
        x: fullDisplacements.get(nodeIndex + 0, 0),
        y: fullDisplacements.get(nodeIndex + 1, 0),
        z: fullDisplacements.get(nodeIndex + 2, 0)
      };
      displacements.push(displacement);
      
      if (i < 5 || i >= this.model.nodes.length - 2) { // 最初の5つと最後の2つを表示
        console.log(`ノード${i+1}変位:`, {
          x: displacement.x.toExponential(6),
          y: displacement.y.toExponential(6), 
          z: displacement.z.toExponential(6)
        });
      }
    }
    
    console.log('=== 変位抽出完了 ===');
    return displacements;
  }

  private calculateElementResults(fullDisplacements: Matrix) {
    const forces: Vector3D[] = [];
    const moments: Vector3D[] = [];
    const stresses: number[] = [];
    const strains: number[] = [];

    console.log('=== 要素応力計算開始 ===');
    console.log('要素数:', this.model.elements.length);

    this.model.elements.forEach((element) => {
      const material = this.model.materials.find(m => m.id === element.materialId)!;
      const section = this.model.sections.find(s => s.id === element.sectionId)!;
      const elementNodes = [
        this.model.nodes.find(n => n.id === element.nodeIds[0])!,
        this.model.nodes.find(n => n.id === element.nodeIds[1])!
      ];

      console.log(`要素${element.id}の応力計算:`, {
        elementMaterialId: element.materialId,
        elementSectionId: element.sectionId,
        materialName: material.name,
        sectionName: section.name,
        sectionArea: section.area,
        momentOfInertiaY: section.momentOfInertiaY,
        momentOfInertiaZ: section.momentOfInertiaZ,
        elasticModulus: material.elasticModulus
      });
      
      console.log('利用可能な材料一覧:', this.model.materials.map(m => `ID:${m.id} ${m.name}`));
      console.log('利用可能な断面一覧:', this.model.sections.map(s => `ID:${s.id} ${s.name} Area:${s.area}`));

      // 要素の変位を抽出
      const node1Index = this.nodeMapping.get(element.nodeIds[0])! * 6;
      const node2Index = this.nodeMapping.get(element.nodeIds[1])! * 6;
      const elementDisplacements = [];
      
      for (let i = 0; i < 6; i++) {
        elementDisplacements.push(fullDisplacements.get(node1Index + i, 0));
      }
      for (let i = 0; i < 6; i++) {
        elementDisplacements.push(fullDisplacements.get(node2Index + i, 0));
      }

      console.log(`要素${element.id}の変位:`, elementDisplacements);

      const beamElement = new BeamElementAnalysis(element, elementNodes, material, section);
      const results = beamElement.calculateStressStrain(elementDisplacements);

      console.log(`要素${element.id}の計算結果:`, {
        stress: results.stress,
        strain: results.strain,
        axialForce: results.axialForce
      });

      // 固定端要素（第1要素）の詳細ログ
      if (element.id === 1) {
        console.log(`🔥 固定端要素（ID: ${element.id}）の詳細結果:`, {
          stress: results.stress,
          moments: results.moments,
          '理論値との比較': {
            '計算応力': results.stress,
            '理論応力': 11.25e6,
            '誤差率': ((results.stress - 11.25e6) / 11.25e6 * 100).toFixed(1) + '%'
          }
        });
      }

      forces.push({ x: results.axialForce, y: 0, z: 0 });
      moments.push({ x: 0, y: results.moments.my, z: results.moments.mz });
      stresses.push(results.stress);
      strains.push(results.strain);
    });

    console.log('=== 計算完了した応力値 ===');
    console.log('応力配列:', stresses);
    console.log('応力範囲:', { 
      min: Math.min(...stresses), 
      max: Math.max(...stresses) 
    });

    return { forces, moments, stresses, strains };
  }

  private calculateReactions(fullDisplacements: Matrix) {
    const reactions: Vector3D[] = [];
    
    this.model.nodes.forEach((node, index) => {
      if (node.isFixed) {
        // 反力 = K * u (固定点における)
        const nodeIndex = index * 6;
        const nodeReactions = { x: 0, y: 0, z: 0 };
        
        // 簡易的な反力計算（実際にはKu-Fで計算）
        for (let i = 0; i < this.model.nodes.length * 6; i++) {
          if (this.globalStiffnessMatrix) {
            nodeReactions.x += this.globalStiffnessMatrix.get(nodeIndex + 0, i) * fullDisplacements.get(i, 0);
            nodeReactions.y += this.globalStiffnessMatrix.get(nodeIndex + 1, i) * fullDisplacements.get(i, 0);
            nodeReactions.z += this.globalStiffnessMatrix.get(nodeIndex + 2, i) * fullDisplacements.get(i, 0);
          }
        }
        
        reactions.push(nodeReactions);
      } else {
        reactions.push({ x: 0, y: 0, z: 0 });
      }
    });

    return reactions;
  }

  // 要素ごとの応力データを取得
  public getElementStressData(): { elementId: number; stress: number }[] {
    if (!this.result) {
      return [];
    }

    return this.model.elements.map((element, index) => ({
      elementId: element.id,
      stress: this.result!.stresses[index]
    }));
  }

  // 応力の最小値・最大値を取得
  public getStressRange(): { min: number; max: number } {
    if (!this.result || this.result.stresses.length === 0) {
      return { min: 0, max: 0 };
    }

    const stresses = this.result.stresses;
    const min = Math.min(...stresses);
    const max = Math.max(...stresses);
    
    return { min, max };
  }
}
