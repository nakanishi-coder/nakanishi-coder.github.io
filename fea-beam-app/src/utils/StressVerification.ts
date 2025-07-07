import type { Model, Material, BeamSection } from '../types';

export class StressVerificationCases {
  
  // 検証事例1: 単純引張（分割数指定対応）
  static createSimpleTensionCase(divisions: number = 1): Model {
    const materials: Material[] = [{
      id: 1,
      name: '構造用鋼 SS400 (検証用)',
      elasticModulus: 200e9, // 200 GPa
      poissonRatio: 0.3,
      density: 7850,
      yieldStrength: 235e6 // 235 MPa
    }];

    const sections: BeamSection[] = [{
      id: 1,
      name: '正方形断面 100×100mm (検証用)',
      area: 0.01, // 100mm × 100mm = 0.01 m²
      momentOfInertiaY: 8.33e-6, // bh³/12 = 0.1×0.1³/12
      momentOfInertiaZ: 8.33e-6,
      torsionalConstant: 1.67e-5 // 概算値
    }];

    const length = 2.0; // 全長 2.0 m
    const segmentLength = length / divisions;
    
    // ノード生成
    const nodes = [];
    for (let i = 0; i <= divisions; i++) {
      nodes.push({
        id: i + 1,
        position: { x: i * segmentLength, y: 0, z: 0 },
        isFixed: i === 0, // 左端固定
        fixedDOF: i === 0 ? 
          { dx: true, dy: true, dz: true, rx: true, ry: true, rz: true } :
          { dx: false, dy: false, dz: false, rx: false, ry: false, rz: false }
      });
    }

    // 要素生成
    const elements = [];
    for (let i = 0; i < divisions; i++) {
      elements.push({
        id: i + 1,
        nodeIds: [i + 1, i + 2] as [number, number],
        materialId: 1,
        sectionId: 1
      });
    }

    return {
      nodes,
      elements,
      materials,
      sections,
      loads: [{
        id: 1,
        nodeId: divisions + 1, // 右端ノードに荷重
        force: { x: 10000, y: 0, z: 0 }, // P = 10,000 N (引張)
        moment: { x: 0, y: 0, z: 0 }
      }]
    };
  }

  // 検証事例2: 片持ち梁の曲げ（分割数指定対応）
  static createCantileverBeamCase(divisions: number = 1): Model {
    const materials: Material[] = [{
      id: 1,
      name: '構造用鋼 SS400 (検証用)',
      elasticModulus: 200e9, // 200 GPa
      poissonRatio: 0.3,
      density: 7850,
      yieldStrength: 235e6
    }];

    const sections: BeamSection[] = [{
      id: 1,
      name: '矩形断面 200×400mm (検証用)',
      area: 0.08, // 200mm × 400mm = 0.08 m²
      momentOfInertiaY: 1.067e-3, // Y軸周り（幅×高さ³）: 0.2×0.4³/12 = 1.067×10⁻³ m⁴
      momentOfInertiaZ: 2.667e-4, // Z軸周り（高さ×幅³）: 0.4×0.2³/12 = 2.667×10⁻⁴ m⁴
      torsionalConstant: 5.33e-4 // 概算値
    }];

    const length = 3.0; // 全長 3.0 m
    const segmentLength = length / divisions;
    
    // ノード生成
    const nodes = [];
    for (let i = 0; i <= divisions; i++) {
      nodes.push({
        id: i + 1,
        position: { x: i * segmentLength, y: 0, z: 0 },
        isFixed: i === 0, // 左端固定
        fixedDOF: i === 0 ? 
          { dx: true, dy: true, dz: true, rx: true, ry: true, rz: true } :
          { dx: false, dy: false, dz: false, rx: false, ry: false, rz: false }
      });
    }

    // 要素生成
    const elements = [];
    for (let i = 0; i < divisions; i++) {
      elements.push({
        id: i + 1,
        nodeIds: [i + 1, i + 2] as [number, number],
        materialId: 1,
        sectionId: 1
      });
    }

    return {
      nodes,
      elements,
      materials,
      sections,
      loads: [{
        id: 1,
        nodeId: divisions + 1, // 右端ノードに荷重
        force: { x: 0, y: -5000, z: 0 }, // P = 5,000 N (下向き)
        moment: { x: 0, y: 0, z: 0 }
      }]
    };
  }

  // 検証事例3: 3点曲げ（分割数指定対応）
  static createThreePointBendingCase(divisions: number = 4): Model {
    const materials: Material[] = [{
      id: 1,
      name: '構造用鋼 SS400 (検証用)',
      elasticModulus: 200e9,
      poissonRatio: 0.3,
      density: 7850,
      yieldStrength: 235e6
    }];

    const sections: BeamSection[] = [{
      id: 1,
      name: 'H-200×100×5.5×8 (検証用)',
      area: 2.28e-3, // H形鋼の断面積
      momentOfInertiaY: 1.8e-5, // H形鋼のIy
      momentOfInertiaZ: 1.7e-6, // H形鋼のIz
      torsionalConstant: 4.7e-7 // H形鋼のJ
    }];

    const length = 4.0; // 全長 4.0 m
    const segmentLength = length / divisions;
    
    // ノード生成
    const nodes = [];
    for (let i = 0; i <= divisions; i++) {
      const isLeftSupport = i === 0;
      const isRightSupport = i === divisions;
      
      nodes.push({
        id: i + 1,
        position: { x: i * segmentLength, y: 0, z: 0 },
        isFixed: isLeftSupport || isRightSupport,
        fixedDOF: isLeftSupport ? 
          // 左支点: ピン支点（移動拘束のみ、回転は自由、ただし安定性のためZ軸とねじりを拘束）
          { dx: true, dy: true, dz: true, rx: true, ry: false, rz: false } :
          isRightSupport ?
          // 右支点: ローラー支点（Y方向のみ拘束）
          { dx: false, dy: true, dz: false, rx: false, ry: false, rz: false } :
          // 中間ノード: すべて自由
          { dx: false, dy: false, dz: false, rx: false, ry: false, rz: false }
      });
    }

    // 要素生成
    const elements = [];
    for (let i = 0; i < divisions; i++) {
      elements.push({
        id: i + 1,
        nodeIds: [i + 1, i + 2] as [number, number],
        materialId: 1,
        sectionId: 1
      });
    }

    // 中央ノード（荷重点）のIDを計算
    // 例：4分割の場合、ノード1,2,3,4,5 → 中央は3（index=2）
    const centerNodeId = Math.floor(divisions / 2) + 1;
    
    console.log('3点曲げモデル生成:');
    console.log('  分割数:', divisions);
    console.log('  ノード数:', divisions + 1);
    console.log('  中央ノードID:', centerNodeId);
    console.log('  左支点ノード:', 1);
    console.log('  右支点ノード:', divisions + 1);

    return {
      nodes,
      elements,
      materials,
      sections,
      loads: [{
        id: 1,
        nodeId: centerNodeId, // 中央ノードに荷重
        force: { x: 0, y: -10000, z: 0 }, // P = 10,000 N (中央集中荷重)
        moment: { x: 0, y: 0, z: 0 }
      }]
    };
  }

  // 理論値計算（分割数に関係なく同じ）
  static calculateTheoreticalValues(divisions: number = 1) {
    return {
      simpleTension: {
        stress: 10000 / 0.01, // P/A = 1,000,000 Pa = 1.0 MPa
        strain: (10000 / 0.01) / (200e9), // σ/E = 5.0×10⁻⁶
        displacement: ((10000 / 0.01) / (200e9)) * 2.0, // εL = 1.0×10⁻⁵ m = 0.01 mm
        description: `分割数: ${divisions}要素`
      },
      cantileverBending: {
        maxMoment: 5000 * 3.0, // PL = 15,000 N⋅m (固定端での最大曲げモーメント)
        // σ = M×c/I where c = h/2 = 0.4/2 = 0.2 m, I = 2.667e-4 m⁴
        // Y方向荷重による曲げでは momentOfInertiaZ を使用
        // 分割数を考慮: 第1要素での平均モーメントを使用
        stress: divisions > 1 ? 
          // 複数分割の場合：第1要素の中点でのモーメント = P×(L - L/(2×divisions))
          ((5000 * (3.0 - 3.0/(2*divisions)) * (0.4/2)) / 2.667e-4) :
          // 単一要素の場合：固定端での最大モーメント
          ((5000 * 3.0 * (0.4/2)) / 2.667e-4),
        displacement: (5000 * Math.pow(3, 3)) / (3 * 200e9 * 2.667e-4), // PL³/(3EI) = 8.436×10⁻⁴ m (自由端変位)
        description: `片持ち梁 - 分割数: ${divisions}要素, ${divisions > 1 ? '第1要素中点' : '固定端'}で最大応力が発生`
      },
      threePointBending: {
        maxMoment: 10000 * 4.0 / 4, // PL/4 = 10,000 N⋅m (中央での曲げモーメント)
        // Y方向荷重による曲げでは momentOfInertiaZ を使用
        // σ = M×c/I where c = h/2 = 0.2/2 = 0.1 m (H形鋼の高さ200mm), I = 1.7e-6 m⁴
        stress: (10000 * 4.0 / 4 * (0.2/2)) / 1.7e-6, // Mc/I
        displacement: (10000 * Math.pow(4, 3)) / (48 * 200e9 * 1.7e-6), // PL³/(48EI) - Y方向荷重なのでIzを使用
        description: `分割数: ${divisions}要素`
      }
    };
  }

  // 検証結果の比較（分割数情報も表示）
  static compareResults(computed: any, theoretical: any, caseName: string, divisions: number = 1) {
    const tolerance = 0.05; // 5%の許容誤差
    
    console.log(`\n=== ${caseName} 検証結果 (${divisions}分割) ===`);
    
    if (computed.stress !== undefined && theoretical.stress !== undefined) {
      const errorPercent = Math.abs(computed.stress - theoretical.stress) / theoretical.stress * 100;
      console.log(`応力 - 計算値: ${computed.stress.toExponential(3)} Pa, 理論値: ${theoretical.stress.toExponential(3)} Pa, 誤差: ${errorPercent.toFixed(2)}%`);
      
      if (errorPercent <= tolerance * 100) {
        console.log('✅ 応力検証: 合格');
      } else {
        console.log('❌ 応力検証: 不合格 (誤差が大きい)');
      }
    }
    
    if (computed.displacement !== undefined && theoretical.displacement !== undefined) {
      const errorPercent = Math.abs(computed.displacement - theoretical.displacement) / theoretical.displacement * 100;
      console.log(`変位 - 計算値: ${computed.displacement.toExponential(3)} m, 理論値: ${theoretical.displacement.toExponential(3)} m, 誤差: ${errorPercent.toFixed(2)}%`);
      
      if (errorPercent <= tolerance * 100) {
        console.log('✅ 変位検証: 合格');
      } else {
        console.log('❌ 変位検証: 不合格 (誤差が大きい)');
      }
    }
    
    console.log(`要素数: ${divisions}個, 節点数: ${divisions + 1}個`);
  }
}
