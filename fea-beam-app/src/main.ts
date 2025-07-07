import './style.css'
import './style_responsive.css'
import { CustomModelEditor } from './ui/CustomModelEditor'
import { UIManager } from './ui/UIManager'
import { ResponsiveManager } from './ui/ResponsiveManager'
import { FEAEngine } from './core/FEAEngine'
import { Renderer3D } from './visualization/Renderer3D'
import { StressVerificationCases } from './utils/StressVerification'
import type { 
  AnalysisSettings, 
  VisualizationSettings 
} from './types'

class FEAApp {
  private customModelEditor: CustomModelEditor;
  private uiManager: UIManager;
  private responsiveManager!: ResponsiveManager;
  private renderer3D?: Renderer3D;
  private feaEngine?: FEAEngine;
  private analysisResult?: any;
  
  // 要素追加モード用の状態
  private elementCreationState: {
    firstNodeId: number | null;
    isCreatingElement: boolean;
  } = {
    firstNodeId: null,
    isCreatingElement: false
  };

  constructor() {
    this.customModelEditor = new CustomModelEditor();
    this.uiManager = new UIManager();
    this.initializeUI();
    this.setupEventListeners();
    
    // DOM構築後にResponsiveManagerを初期化
    this.initializeResponsiveManager();
    
    // 初期状態でカスタムモードに設定
    this.setInteractionMode('select');
    this.updateCustomModelInfo();
    this.updateMaterialOptions();
    this.updateSectionOptions();
    this.initializeCustomRenderer();
    
    // グリッドスナップの初期設定
    this.initializeGridSettings();
  }

  private initializeUI(): void {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML = `
      <div class="app-container">
        <div class="main-content">
          <div class="sidebar">
            <!-- タブナビゲーション -->
            <div class="tab-navigation">
              <button class="tab-button active" data-tab="model">モデル</button>
              <button class="tab-button" data-tab="analysis">解析</button>
              <button class="tab-button" data-tab="visualization">表示</button>
              <button class="tab-button" data-tab="results">結果</button>
            </div>

            <!-- モデル作成タブ -->
            <div class="tab-content active" id="tab-model">
              <!-- 操作モード -->
              <div class="accordion-section">
                <div class="accordion-header active" data-accordion="interaction">
                  <span>操作モード</span>
                  <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content show" id="accordion-interaction">
                  <div class="button-grid">
                    <button id="mode-select" class="btn btn-sm btn-outline active">選択</button>
                    <button id="mode-add-node" class="btn btn-sm btn-outline">ノード追加</button>
                    <button id="mode-add-element" class="btn btn-sm btn-outline">要素追加</button>
                  </div>
                  <div class="selection-info-section">
                    <div id="selection-info" class="selection-info-content">
                      <p class="no-selection">要素を選択してください</p>
                    </div>
                    <div class="selection-actions">
                      <button id="delete-selected" class="btn btn-danger btn-sm" disabled>削除</button>
                      <button id="clear-selection" class="btn btn-secondary btn-sm">解除</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- グリッド設定 -->
              <div class="accordion-section">
                <div class="accordion-header" data-accordion="grid">
                  <span>グリッド設定</span>
                  <span class="accordion-icon">▶</span>
                </div>
                <div class="accordion-content" id="accordion-grid">
                  <div class="grid-controls">
                    <div class="input-group">
                      <label>
                        <input type="checkbox" id="grid-visible"> グリッド表示
                      </label>
                    </div>
                    <div class="input-group">
                      <label>平面:</label>
                      <select id="grid-plane">
                        <option value="xy">XY平面 (Z=0)</option>
                        <option value="xz">XZ平面 (Y=0)</option>
                        <option value="yz">YZ平面 (X=0)</option>
                      </select>
                    </div>
                    <div class="input-group">
                      <label>
                        <input type="checkbox" id="grid-snap" checked> スナップ有効
                      </label>
                    </div>
                    <div class="input-group">
                      <label>スナップ距離:</label>
                      <input type="number" id="grid-snap-distance" value="2.0" step="0.5" min="0.5">
                    </div>
                  </div>
                </div>
              </div>

              <!-- ノード・要素作成 -->
              <div class="accordion-section">
                <div class="accordion-header" data-accordion="geometry">
                  <span>ノード・要素</span>
                  <span class="accordion-icon">▶</span>
                </div>
                <div class="accordion-content" id="accordion-geometry">
                  <div class="input-section">
                    <h5>ノード追加</h5>
                    <div class="input-group">
                      <input type="number" id="node-x" placeholder="X座標" step="0.1">
                      <input type="number" id="node-y" placeholder="Y座標" step="0.1">
                      <input type="number" id="node-z" placeholder="Z座標" step="0.1">
                      <button id="add-node" class="btn btn-sm">ノード追加</button>
                    </div>
                  </div>
                  
                  <div class="input-section">
                    <h5>要素追加</h5>
                    <div class="input-group">
                      <input type="number" id="element-node1" placeholder="開始ノードID" min="0">
                      <input type="number" id="element-node2" placeholder="終了ノードID" min="0">
                      <select id="element-material">
                        <option value="">材料を選択</option>
                      </select>
                      <select id="element-section">
                        <option value="">断面を選択</option>
                      </select>
                      <button id="add-element" class="btn btn-sm">要素追加</button>
                    </div>
                    <div class="mode-hints">
                      <p class="hint-text"><strong>マウス操作:</strong></p>
                      <ol class="hint-steps">
                        <li>材料と断面を選択</li>
                        <li>「要素追加」モードをクリック</li>
                        <li>最初のノードをクリック</li>
                        <li>2番目のノードをクリック</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 材料・断面 -->
              <div class="accordion-section">
                <div class="accordion-header" data-accordion="materials">
                  <span>材料・断面</span>
                  <span class="accordion-icon">▶</span>
                </div>
                <div class="accordion-content" id="accordion-materials">
                  <div class="input-section">
                    <h5>材料追加</h5>
                    <div class="input-group">
                      <input type="text" id="material-name" placeholder="材料名">
                      <input type="number" id="material-elastic" placeholder="ヤング率 [Pa]" step="1e9">
                      <input type="number" id="material-poisson" placeholder="ポアソン比" step="0.01">
                      <input type="number" id="material-density" placeholder="密度 [kg/m³]" step="100">
                      <button id="add-material" class="btn btn-sm">材料追加</button>
                    </div>
                  </div>
                  
                  <div class="input-section">
                    <h5>断面追加</h5>
                    <div class="input-group">
                      <input type="text" id="section-name" placeholder="断面名">
                      <input type="number" id="section-area" placeholder="断面積 [m²]" step="1e-4">
                      <input type="number" id="section-iy" placeholder="Iy [m⁴]" step="1e-6">
                      <input type="number" id="section-iz" placeholder="Iz [m⁴]" step="1e-6">
                      <input type="number" id="section-j" placeholder="J [m⁴]" step="1e-8">
                      <button id="add-section" class="btn btn-sm">断面追加</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 荷重・境界条件 -->
              <div class="accordion-section">
                <div class="accordion-header" data-accordion="loads">
                  <span>荷重・境界条件</span>
                  <span class="accordion-icon">▶</span>
                </div>
                <div class="accordion-content" id="accordion-loads">
                  <div class="input-section">
                    <h5>荷重追加</h5>
                    <div class="input-group">
                      <input type="number" id="load-node" placeholder="ノードID" min="0">
                      <select id="load-type">
                        <option value="force">集中荷重</option>
                        <option value="moment">モーメント</option>
                      </select>
                      <input type="number" id="load-fx" placeholder="Fx [N]" step="0.1">
                      <input type="number" id="load-fy" placeholder="Fy [N]" step="0.1">
                      <input type="number" id="load-fz" placeholder="Fz [N]" step="0.1">
                      <button id="add-load" class="btn btn-sm">荷重追加</button>
                    </div>
                  </div>
                  
                  <div class="input-section">
                    <h5>境界条件</h5>
                    <div class="input-group">
                      <input type="number" id="bc-node" placeholder="ノードID" min="0">
                      <div class="boundary-condition-controls">
                        <div class="bc-group">
                          <label>並進拘束:</label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-x"> X
                          </label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-y"> Y
                          </label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-z"> Z
                          </label>
                        </div>
                        <div class="bc-group">
                          <label>回転拘束:</label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-rx"> RX
                          </label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-ry"> RY
                          </label>
                          <label class="checkbox-label">
                            <input type="checkbox" id="bc-rz"> RZ
                          </label>
                        </div>
                      </div>
                      <button id="add-boundary" class="btn btn-sm">境界条件追加</button>
                      <button id="add-fixed-support" class="btn btn-sm btn-secondary">完全固定</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- モデル管理 -->
              <div class="accordion-section">
                <div class="accordion-header" data-accordion="model-management">
                  <span>モデル管理</span>
                  <span class="accordion-icon">▶</span>
                </div>
                <div class="accordion-content" id="accordion-model-management">
                  <div class="model-info">
                    <div id="model-info">
                      <p>ノード数: <span id="node-count">0</span></p>
                      <p>要素数: <span id="element-count">0</span></p>
                      <p>荷重数: <span id="load-count">0</span></p>
                      <p>材料数: <span id="material-count">0</span></p>
                      <p>断面数: <span id="section-count">0</span></p>
                      <p>固定点数: <span id="fixed-count">0</span></p>
                    </div>
                    <div class="button-group">
                      <button id="save-model" class="btn btn-primary">保存</button>
                      <button id="load-model" class="btn btn-secondary">読み込み</button>
                      <button id="clear-model" class="btn btn-warning">クリア</button>
                    </div>
                    <div class="button-group verification-group">
                      <h5>検証モデル</h5>
                      <div class="verification-controls">
                        <label for="division-count">分割数:</label>
                        <select id="division-count" class="select-input">
                          <option value="1">1分割</option>
                          <option value="2">2分割</option>
                          <option value="4">4分割</option>
                          <option value="8">8分割</option>
                          <option value="16">16分割</option>
                          <option value="32">32分割</option>
                        </select>
                      </div>
                      <div class="verification-buttons">
                        <button id="verify-tension" class="btn btn-info btn-sm">単純引張</button>
                        <button id="verify-cantilever" class="btn btn-info btn-sm">片持ち梁</button>
                        <button id="verify-bending" class="btn btn-info btn-sm">3点曲げ</button>
                      </div>
                    </div>
                    <div id="file-operation-status" class="status-message"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 解析タブ -->
            <div class="tab-content" id="tab-analysis">
              <div class="analysis-content">
                <h4>静解析実行</h4>
                <button id="run-analysis" class="btn btn-success" disabled>解析実行</button>
                <div id="analysis-status" class="status"></div>
              </div>
            </div>

            <!-- 表示設定タブ -->
            <div class="tab-content" id="tab-visualization">
              <div class="visualization-content">
                <h4>表示オプション</h4>
                
                <!-- ビューコントロール -->
                <div class="view-control-section">
                  <h5>ビューコントロール</h5>
                  <div class="view-buttons">
                    <button id="view-reset" class="btn btn-sm btn-outline">リセット</button>
                    <button id="view-front" class="btn btn-sm btn-outline">正面</button>
                    <button id="view-back" class="btn btn-sm btn-outline">背面</button>
                    <button id="view-left" class="btn btn-sm btn-outline">左側面</button>
                    <button id="view-right" class="btn btn-sm btn-outline">右側面</button>
                    <button id="view-top" class="btn btn-sm btn-outline">上面</button>
                    <button id="view-bottom" class="btn btn-sm btn-outline">下面</button>
                    <button id="view-isometric" class="btn btn-sm btn-outline">等角投影</button>
                  </div>
                  <div class="view-controls">
                    <div class="input-group">
                      <label>ズーム:</label>
                      <div class="zoom-controls">
                        <button id="zoom-in" class="btn btn-sm btn-outline">+</button>
                        <button id="zoom-out" class="btn btn-sm btn-outline">-</button>
                        <button id="zoom-fit" class="btn btn-sm btn-outline">全体表示</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 表示要素の制御 -->
                <div class="display-elements-section">
                  <h5>表示要素</h5>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-mesh" checked> メッシュ表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-nodes" checked> ノード表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-node-numbers"> ノード番号表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-loads" checked> 荷重表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-displacements"> 変位表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-stresses"> 応力表示
                  </label>
                </div>
                
                <!-- 変位スケール -->
                <div class="displacement-scale-section">
                  <h5>変位スケール</h5>
                  <div class="slider-group">
                    <label>変位倍率: <span id="displacement-scale-value">1</span></label>
                    <input type="range" id="displacement-scale" min="0.1" max="10" step="0.1" value="1">
                  </div>
                </div>
                
                <div class="stress-display-section">
                  <h5>応力表示設定</h5>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-stress-values"> 応力値表示
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" id="show-stress-distribution"> 応力分布表示
                  </label>
                  <div class="input-group">
                    <label>カラーマップ:</label>
                    <select id="stress-colormap">
                      <option value="rainbow">レインボー</option>
                      <option value="heat">ヒートマップ</option>
                      <option value="viridis">Viridis</option>
                      <option value="grayscale">グレースケール</option>
                    </select>
                  </div>
                  <div class="stress-scale-info" id="stress-scale-info">
                    <small>解析後に応力範囲が表示されます</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- 結果タブ -->
            <div class="tab-content" id="tab-results">
              <div class="results-content">
                <h4>解析結果</h4>
                <div id="results-summary"></div>
                <div id="stress-results" class="stress-results-section" style="display: none;">
                  <h5>応力結果</h5>
                  <div id="stress-table-container">
                    <table id="stress-table" class="stress-table">
                      <thead>
                        <tr>
                          <th>要素ID</th>
                          <th>応力 [Pa]</th>
                          <th>色</th>
                        </tr>
                      </thead>
                      <tbody id="stress-table-body">
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="viewer-container">
            <div id="renderer-container" class="renderer-container"></div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * ResponsiveManagerの初期化（DOM構築後）
   */
  private initializeResponsiveManager(): void {
    setTimeout(() => {
      this.responsiveManager = new ResponsiveManager();
      this.setupResponsiveEvents();
      
      // 初期レイアウトの強制更新
      console.log('ResponsiveManager初期化完了');
      console.log('現在のブレークポイント:', this.responsiveManager.getCurrentBreakpoint());
      console.log('モバイルかどうか:', this.responsiveManager.isMobile());
      
      // 初期化後にレイアウトを強制的に更新
      setTimeout(() => {
        if (this.renderer3D) {
          this.renderer3D.handleResize();
        }
        // カスタムリサイズイベントを発行
        window.dispatchEvent(new CustomEvent('viewer-resize'));
      }, 200);
    }, 100);
  }

  private setupEventListeners(): void {
    // タブ切り替え
    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const tabId = target.getAttribute('data-tab');
        if (tabId) {
          this.switchTab(tabId);
        }
      });
    });

    // アコーディオン切り替え
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const accordionId = target.getAttribute('data-accordion') || 
                           target.closest('.accordion-header')?.getAttribute('data-accordion');
        if (accordionId) {
          this.toggleAccordion(accordionId);
        }
      });
    });

    // 操作モード切り替え
    document.getElementById('mode-select')?.addEventListener('click', () => {
      this.setInteractionMode('select');
    });

    document.getElementById('mode-add-node')?.addEventListener('click', () => {
      this.setInteractionMode('add-node');
    });

    document.getElementById('mode-add-element')?.addEventListener('click', () => {
      this.setInteractionMode('add-element');
    });

    // モデル作成
    document.getElementById('add-node')?.addEventListener('click', () => {
      this.addNode();
    });

    document.getElementById('add-element')?.addEventListener('click', () => {
      this.addElement();
    });

    document.getElementById('add-material')?.addEventListener('click', () => {
      this.addMaterial();
    });

    document.getElementById('add-section')?.addEventListener('click', () => {
      this.addSection();
    });

    document.getElementById('add-load')?.addEventListener('click', () => {
      this.addLoad();
    });

    document.getElementById('add-boundary')?.addEventListener('click', () => {
      this.addBoundaryCondition();
    });

    document.getElementById('add-fixed-support')?.addEventListener('click', () => {
      this.addFixedSupport();
    });

    document.getElementById('clear-model')?.addEventListener('click', () => {
      this.clearModel();
    });

    // ファイル操作
    document.getElementById('save-model')?.addEventListener('click', () => {
      this.saveModel();
    });

    document.getElementById('load-model')?.addEventListener('click', () => {
      this.loadModel();
    });

    // 選択操作
    document.getElementById('delete-selected')?.addEventListener('click', () => {
      this.deleteSelected();
    });

    document.getElementById('clear-selection')?.addEventListener('click', () => {
      this.clearSelection();
    });

    // 検証事例
    document.getElementById('verify-tension')?.addEventListener('click', () => {
      this.loadVerificationCase('tension');
    });

    document.getElementById('verify-cantilever')?.addEventListener('click', () => {
      this.loadVerificationCase('cantilever');
    });

    document.getElementById('verify-bending')?.addEventListener('click', () => {
      this.loadVerificationCase('bending');
    });

    // 解析実行
    document.getElementById('run-analysis')?.addEventListener('click', () => {
      this.runAnalysis();
    });

    // 表示設定
    document.getElementById('show-mesh')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('show-nodes')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('show-node-numbers')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('show-loads')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('show-displacements')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('show-stresses')?.addEventListener('change', () => {
      this.updateVisualizationSettings();
    });

    document.getElementById('displacement-scale')?.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value;
      document.getElementById('displacement-scale-value')!.textContent = value.toString();
      this.updateVisualizationSettings();
    });

    // 応力表示設定
    document.getElementById('show-stress-values')?.addEventListener('change', () => {
      this.updateStressDisplaySettings();
    });

    document.getElementById('show-stress-distribution')?.addEventListener('change', () => {
      this.updateStressDisplaySettings();
    });

    document.getElementById('stress-colormap')?.addEventListener('change', () => {
      this.updateStressDisplaySettings();
    });

    // グリッド制御
    document.getElementById('grid-visible')?.addEventListener('change', (e) => {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        const plane = (document.getElementById('grid-plane') as HTMLSelectElement).value as 'xy' | 'xz' | 'yz';
        this.renderer3D?.showGrid(plane);
        // ノード追加または要素追加モード時はグリッドビューモードも有効化
        const currentMode = this.customModelEditor.getState().mode;
        if (currentMode === 'add-node' || currentMode === 'add-element') {
          this.renderer3D?.setGridViewMode(true, plane);
        }
      } else {
        this.renderer3D?.hideGrid();
        this.renderer3D?.setGridViewMode(false);
      }
    });

    document.getElementById('grid-plane')?.addEventListener('change', (e) => {
      const select = e.target as HTMLSelectElement;
      const visible = (document.getElementById('grid-visible') as HTMLInputElement).checked;
      if (visible) {
        this.renderer3D?.showGrid(select.value as 'xy' | 'xz' | 'yz');
        // ノード追加または要素追加モード時はグリッドビューモードも更新
        const currentMode = this.customModelEditor.getState().mode;
        if (currentMode === 'add-node' || currentMode === 'add-element') {
          this.renderer3D?.setGridViewMode(true, select.value as 'xy' | 'xz' | 'yz');
        }
      }
    });

    document.getElementById('grid-snap')?.addEventListener('change', (e) => {
      const checkbox = e.target as HTMLInputElement;
      const snapDistance = parseFloat((document.getElementById('grid-snap-distance') as HTMLInputElement).value);
      this.renderer3D?.setGridSnap(checkbox.checked, snapDistance);
    });

    document.getElementById('grid-snap-distance')?.addEventListener('input', (e) => {
      const input = e.target as HTMLInputElement;
      const snapEnabled = (document.getElementById('grid-snap') as HTMLInputElement).checked;
      this.renderer3D?.setGridSnap(snapEnabled, parseFloat(input.value));
    });

    // ビューコントロール
    document.getElementById('view-reset')?.addEventListener('click', () => {
      this.resetView();
    });

    document.getElementById('view-front')?.addEventListener('click', () => {
      this.setStandardView('front');
    });

    document.getElementById('view-back')?.addEventListener('click', () => {
      this.setStandardView('back');
    });

    document.getElementById('view-left')?.addEventListener('click', () => {
      this.setStandardView('left');
    });

    document.getElementById('view-right')?.addEventListener('click', () => {
      this.setStandardView('right');
    });

    document.getElementById('view-top')?.addEventListener('click', () => {
      this.setStandardView('top');
    });

    document.getElementById('view-bottom')?.addEventListener('click', () => {
      this.setStandardView('bottom');
    });

    document.getElementById('view-isometric')?.addEventListener('click', () => {
      this.setStandardView('isometric');
    });

    // ズームコントロール
    document.getElementById('zoom-in')?.addEventListener('click', () => {
      this.zoomIn();
    });

    document.getElementById('zoom-out')?.addEventListener('click', () => {
      this.zoomOut();
    });

    document.getElementById('zoom-fit')?.addEventListener('click', () => {
      this.zoomToFit();
    });
  }

  /**
   * レスポンシブイベントの設定
   */
  /**
   * レスポンシブイベントの設定
   */
  private setupResponsiveEvents(): void {
    // ブレークポイント変更時の処理
    this.responsiveManager.onBreakpointChanged((breakpoint) => {
      console.log(`ブレークポイント変更: ${breakpoint}`);
      
      // 3Dビューのリサイズ通知
      if (this.renderer3D) {
        setTimeout(() => {
          this.renderer3D?.handleResize();
        }, 100);
      }
    });

    // サイドバートグル時の処理
    this.responsiveManager.onSidebarToggled((isVisible) => {
      console.log(`サイドバー表示状態: ${isVisible ? '表示' : '非表示'}`);
      
      // 3Dビューのリサイズ通知
      if (this.renderer3D) {
        setTimeout(() => {
          this.renderer3D?.handleResize();
        }, 300); // アニメーション完了後
      }
    });

    // 一般的なリサイズ時の処理
    this.responsiveManager.onResized(() => {
      console.log('レスポンシブマネージャー: リサイズイベント');
      if (this.renderer3D) {
        this.renderer3D.handleResize();
      }
    });

    // カスタムビューアリサイズイベント
    window.addEventListener('viewer-resize', () => {
      if (this.renderer3D) {
        this.renderer3D.handleResize();
      }
    });
  }

  private runAnalysis(): void {
    if (!this.renderer3D) {
      this.uiManager.showNotification({
        title: '解析エラー',
        message: '3Dレンダラーが初期化されていません',
        type: 'error'
      });
      return;
    }

    const statusElement = document.getElementById('analysis-status')!;
    
    // 解析開始の通知と進行状況表示
    this.uiManager.showNotification({
      title: '解析開始',
      message: '有限要素解析を実行中...',
      type: 'info'
    });

    this.uiManager.updateStatus('working', '解析実行中...');
    const progressId = this.uiManager.showProgress('解析中...', 0);

    statusElement.textContent = '解析実行中...';
    statusElement.className = 'status running';

    try {
      // カスタムモデルからモデルを取得
      const model = this.customModelEditor.getModel();
      
      console.log('=== 解析実行デバッグ情報 ===');
      console.log('解析実行 - モデル:', model);
      console.log('解析実行 - ノード数:', model.nodes.length);
      console.log('解析実行 - 要素数:', model.elements.length);
      console.log('解析実行 - 荷重数:', model.loads.length);
      console.log('解析実行 - 固定ノード数:', model.nodes.filter(node => node.isFixed).length);
      
      // 進行状況更新
      this.uiManager.updateProgress(progressId, 20);

      // モデル検証
      const validation = this.customModelEditor.validateModel();
      if (!validation.isValid) {
        statusElement.textContent = '解析エラー: モデル検証失敗';
        statusElement.className = 'status error';
        
        this.uiManager.hideProgress(progressId);
        this.uiManager.updateStatus('error', 'エラー');
        
        this.uiManager.showNotification({
          title: '解析エラー',
          message: `モデル検証に失敗しました:\\n${validation.errors.join('\\n')}`,
          type: 'error'
        });
        return;
      }

      this.uiManager.updateProgress(progressId, 40);

      // FEAエンジンで解析実行
      const settings: AnalysisSettings = {
        type: 'static',
        tolerance: 1e-6,
        maxIterations: 1000,
        includeGeometricNonlinearity: false,
        includeMaterialNonlinearity: false
      };

      this.feaEngine = new FEAEngine(model, settings);
      this.uiManager.updateProgress(progressId, 60);

      const analysisResults = this.feaEngine.solveStatic();
      this.analysisResult = {
        success: true,
        results: analysisResults,
        model: model
      };
      this.uiManager.updateProgress(progressId, 80);

      statusElement.textContent = '解析完了';
      statusElement.className = 'status success';
      
      // 結果をレンダラーに反映
      this.renderer3D.updateResults(this.analysisResult.results);
      this.updateResultsSummary(this.analysisResult.results);
      
      // 応力表示設定を更新
      this.updateStressDisplaySettings();
      this.updateStressScaleInfo();
      
      // 検証事例の場合は結果を比較
      this.performVerificationIfApplicable();
      
      this.uiManager.updateProgress(progressId, 100);
      setTimeout(() => this.uiManager.hideProgress(progressId), 500);
      this.uiManager.updateStatus('ready', '解析完了');
      
      this.uiManager.showNotification({
        title: '解析完了',
        message: '有限要素解析が正常に完了しました',
        type: 'success'
      });

      console.log('解析結果:', this.analysisResult);

    } catch (error) {
      console.error('解析エラー:', error);
      statusElement.textContent = '解析エラー: ' + (error as Error).message;
      statusElement.className = 'status error';
      
      this.uiManager.hideProgress(progressId);
      this.uiManager.updateStatus('error', 'エラー');
      
      this.uiManager.showNotification({
        title: '解析エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private updateResultsSummary(result: any): void {
    const maxDisplacement = Math.max(...result.displacements.map((d: any) => 
      Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z)
    ));

    const summary = `
      <div class="results-grid">
        <div class="result-item">
          <label>最大変位:</label>
          <span>${maxDisplacement.toExponential(3)} m</span>
        </div>
        <div class="result-item">
          <label>解析時間:</label>
          <span>${result.analysisTime || 'N/A'} ms</span>
        </div>
        <div class="result-item">
          <label>収束:</label>
          <span>${result.converged ? 'Yes' : 'No'}</span>
        </div>
      </div>
    `;

    const summaryElement = document.getElementById('results-summary')!;
    summaryElement.innerHTML = summary;
  }

  private setInteractionMode(mode: string): void {
    // ボタンの状態を更新
    document.querySelectorAll('.interaction-mode-section .btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    document.getElementById(`mode-${mode}`)?.classList.add('active');
    
    // CustomModelEditorのモードを設定
    this.customModelEditor.setMode(mode as any);
    
    // 3Dレンダラーのインタラクションモードを設定
    if (this.renderer3D) {
      this.renderer3D.setInteractionMode({
        type: mode as any,
        isActive: true
      });
    }
    
    // 要素作成状態をリセット
    this.elementCreationState.firstNodeId = null;
    this.elementCreationState.isCreatingElement = false;
    
    // モード切り替えの通知メッセージを改善
    let modeMessage = '';
    if (mode === 'select') {
      modeMessage = '選択モードに切り替えました。要素をクリックして選択できます。';
    } else if (mode === 'add-node') {
      modeMessage = 'ノード追加モードに切り替えました。3Dビューをクリックしてノードを追加できます。';
    } else if (mode === 'add-element') {
      modeMessage = '要素追加モードに切り替えました。2つのノードを順番にクリックして要素を作成してください。事前に材料と断面を選択してください。';
    }
    
    this.uiManager.showNotification({
      title: 'モード変更',
      message: modeMessage,
      type: 'info'
    });
    
    // レンダラーがある場合は選択状態をクリア
    if (this.renderer3D) {
      this.customModelEditor.clearSelection();
      this.updateSelectionInfo();
      
      // モードに応じてグリッドを制御
      if (mode === 'add-node' || mode === 'add-element') {
        // ノード追加または要素追加モードではグリッドを表示
        const gridVisible = (document.getElementById('grid-visible') as HTMLInputElement);
        if (!gridVisible.checked) {
          gridVisible.checked = true;
          const plane = (document.getElementById('grid-plane') as HTMLSelectElement).value as 'xy' | 'xz' | 'yz';
          this.renderer3D.showGrid(plane);
          this.renderer3D.setGridViewMode(true, plane); // グリッドビューモードを有効化
        } else {
          // 既にグリッドが表示されている場合でも、グリッドビューモードを確実に設定
          const plane = (document.getElementById('grid-plane') as HTMLSelectElement).value as 'xy' | 'xz' | 'yz';
          this.renderer3D.setGridViewMode(true, plane);
        }
      } else {
        // 選択モードではグリッドを非表示
        const gridVisible = (document.getElementById('grid-visible') as HTMLInputElement);
        if (gridVisible.checked) {
          gridVisible.checked = false;
          this.renderer3D.hideGrid();
        }
        this.renderer3D.setGridViewMode(false); // グリッドビューモードを無効化
      }
    }
  }

  private addNode(): void {
    const xInput = document.getElementById('node-x') as HTMLInputElement;
    const yInput = document.getElementById('node-y') as HTMLInputElement;
    const zInput = document.getElementById('node-z') as HTMLInputElement;

    const x = parseFloat(xInput.value || '0');
    const y = parseFloat(yInput.value || '0');
    const z = parseFloat(zInput.value || '0');

    try {
      const node = this.customModelEditor.addNode({ x, y, z, isFixed: false });
      
      // 入力フィールドをクリア
      xInput.value = '';
      yInput.value = '';
      zInput.value = '';
      
      this.updateCustomModelInfo();
      this.updateCustomVisualization();
      
      this.uiManager.showNotification({
        title: 'ノード追加',
        message: `ノード${node.id}を追加しました (${x}, ${y}, ${z})`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addElement(): void {
    const node1Input = document.getElementById('element-node1') as HTMLInputElement;
    const node2Input = document.getElementById('element-node2') as HTMLInputElement;
    const materialSelect = document.getElementById('element-material') as HTMLSelectElement;
    const sectionSelect = document.getElementById('element-section') as HTMLSelectElement;

    const nodeId1 = parseInt(node1Input.value);
    const nodeId2 = parseInt(node2Input.value);
    const materialId = parseInt(materialSelect.value);
    const sectionId = parseInt(sectionSelect.value);

    if (!nodeId1 || !nodeId2 || !materialId || !sectionId) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'すべてのフィールドを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      const element = this.customModelEditor.addElement({
        nodeId1, nodeId2, materialId, sectionId
      });
      
      if (element) {
        // 入力フィールドをクリア
        node1Input.value = '';
        node2Input.value = '';
        
        this.updateCustomModelInfo();
        this.updateCustomVisualization();
        
        this.uiManager.showNotification({
          title: '要素追加',
          message: `要素${element.id}を追加しました (ノード${nodeId1}-${nodeId2})`,
          type: 'success'
        });
      }
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addMaterial(): void {
    const nameInput = document.getElementById('material-name') as HTMLInputElement;
    const elasticInput = document.getElementById('material-elastic') as HTMLInputElement;
    const poissonInput = document.getElementById('material-poisson') as HTMLInputElement;
    const densityInput = document.getElementById('material-density') as HTMLInputElement;

    const name = nameInput.value;
    const elasticModulus = parseFloat(elasticInput.value);
    const poissonRatio = parseFloat(poissonInput.value);
    const density = parseFloat(densityInput.value);

    if (!name || !elasticModulus || !poissonRatio || !density) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'すべてのフィールドを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      this.customModelEditor.addMaterial({
        name,
        elasticModulus,
        poissonRatio,
        density,
        yieldStrength: elasticModulus * 0.001 // 仮の値
      });

      // フィールドクリア
      nameInput.value = '';
      elasticInput.value = '';
      poissonInput.value = '';
      densityInput.value = '';
      
      this.updateMaterialOptions();
      this.updateCustomModelInfo();
      
      this.uiManager.showNotification({
        title: '材料追加',
        message: `材料「${name}」を追加しました`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addSection(): void {
    const nameInput = document.getElementById('section-name') as HTMLInputElement;
    const areaInput = document.getElementById('section-area') as HTMLInputElement;
    const iyInput = document.getElementById('section-iy') as HTMLInputElement;
    const izInput = document.getElementById('section-iz') as HTMLInputElement;
    const jInput = document.getElementById('section-j') as HTMLInputElement;

    const name = nameInput.value;
    const area = parseFloat(areaInput.value);
    const momentOfInertiaY = parseFloat(iyInput.value);
    const momentOfInertiaZ = parseFloat(izInput.value);
    const torsionalConstant = parseFloat(jInput.value);

    if (!name || !area || !momentOfInertiaY || !momentOfInertiaZ || !torsionalConstant) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'すべてのフィールドを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      // 簡易的な断面追加
      this.customModelEditor.addSection({
        name,
        area,
        momentOfInertiaY,
        momentOfInertiaZ,
        torsionalConstant
      });

      // フィールドクリア
      nameInput.value = '';
      areaInput.value = '';
      iyInput.value = '';
      izInput.value = '';
      jInput.value = '';
      
      this.updateSectionOptions();
      this.updateCustomModelInfo();
      
      this.uiManager.showNotification({
        title: '断面追加',
        message: `断面「${name}」を追加しました`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addLoad(): void {
    const nodeInput = document.getElementById('load-node') as HTMLInputElement;
    const typeSelect = document.getElementById('load-type') as HTMLSelectElement;
    const fxInput = document.getElementById('load-fx') as HTMLInputElement;
    const fyInput = document.getElementById('load-fy') as HTMLInputElement;
    const fzInput = document.getElementById('load-fz') as HTMLInputElement;

    const nodeId = parseInt(nodeInput.value);
    const type = typeSelect.value;
    const fx = parseFloat(fxInput.value || '0');
    const fy = parseFloat(fyInput.value || '0');
    const fz = parseFloat(fzInput.value || '0');

    if (!nodeId) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'ノードIDを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      this.customModelEditor.addLoad({
        nodeId,
        fx: type === 'force' ? fx : 0,
        fy: type === 'force' ? fy : 0,
        fz: type === 'force' ? fz : 0,
        mx: type === 'moment' ? fx : 0,
        my: type === 'moment' ? fy : 0,
        mz: type === 'moment' ? fz : 0
      });

      // フィールドクリア
      nodeInput.value = '';
      fxInput.value = '';
      fyInput.value = '';
      fzInput.value = '';
      
      this.updateCustomModelInfo();
      this.updateCustomVisualization();
      
      this.uiManager.showNotification({
        title: '荷重追加',
        message: `ノード${nodeId}に${type === 'force' ? '荷重' : 'モーメント'}を追加しました`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addBoundaryCondition(): void {
    const nodeInput = document.getElementById('bc-node') as HTMLInputElement;
    const bcX = document.getElementById('bc-x') as HTMLInputElement;
    const bcY = document.getElementById('bc-y') as HTMLInputElement;
    const bcZ = document.getElementById('bc-z') as HTMLInputElement;
    const bcRX = document.getElementById('bc-rx') as HTMLInputElement;
    const bcRY = document.getElementById('bc-ry') as HTMLInputElement;
    const bcRZ = document.getElementById('bc-rz') as HTMLInputElement;

    const nodeId = parseInt(nodeInput.value);

    if (!nodeId) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'ノードIDを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      this.customModelEditor.setBoundaryCondition(nodeId, {
        dx: bcX.checked,
        dy: bcY.checked,
        dz: bcZ.checked,
        rx: bcRX.checked,
        ry: bcRY.checked,
        rz: bcRZ.checked
      });

      // フィールドクリア
      nodeInput.value = '';
      bcX.checked = false;
      bcY.checked = false;
      bcZ.checked = false;
      bcRX.checked = false;
      bcRY.checked = false;
      bcRZ.checked = false;
      
      this.updateCustomModelInfo();
      this.updateCustomVisualization();
      
      this.uiManager.showNotification({
        title: '境界条件設定',
        message: `ノード${nodeId}に境界条件を設定しました`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private addFixedSupport(): void {
    const nodeInput = document.getElementById('bc-node') as HTMLInputElement;
    const nodeId = parseInt(nodeInput.value);

    if (!nodeId) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: 'ノードIDを入力してください',
        type: 'error'
      });
      return;
    }

    try {
      this.customModelEditor.setBoundaryCondition(nodeId, {
        dx: true,
        dy: true,
        dz: true,
        rx: true,
        ry: true,
        rz: true
      });

      // チェックボックスを更新
      const bcX = document.getElementById('bc-x') as HTMLInputElement;
      const bcY = document.getElementById('bc-y') as HTMLInputElement;
      const bcZ = document.getElementById('bc-z') as HTMLInputElement;
      const bcRX = document.getElementById('bc-rx') as HTMLInputElement;
      const bcRY = document.getElementById('bc-ry') as HTMLInputElement;
      const bcRZ = document.getElementById('bc-rz') as HTMLInputElement;

      bcX.checked = true;
      bcY.checked = true;
      bcZ.checked = true;
      bcRX.checked = true;
      bcRY.checked = true;
      bcRZ.checked = true;
      
      this.updateCustomModelInfo();
      this.updateCustomVisualization();
      
      this.uiManager.showNotification({
        title: '完全固定',
        message: `ノード${nodeId}を完全固定にしました`,
        type: 'success'
      });
    } catch (error) {
      this.uiManager.showNotification({
        title: 'エラー',
        message: (error as Error).message,
        type: 'error'
      });
    }
  }

  private clearModel(): void {
    if (confirm('現在のモデルをすべて削除します。よろしいですか？')) {
      this.customModelEditor.clearModel();
      this.updateCustomModelInfo();
      this.updateCustomVisualization();
      this.updateMaterialOptions();
      this.updateSectionOptions();
      
      // 解析結果をクリア
      if (this.renderer3D) {
        // this.renderer3D.clearResults();
      }
      this.analysisResult = undefined;
      
      const statusElement = document.getElementById('analysis-status')!;
      statusElement.textContent = '';
      statusElement.className = 'status';
      
      const summaryElement = document.getElementById('results-summary')!;
      summaryElement.innerHTML = '';
      
      this.uiManager.showNotification({
        title: 'モデルクリア',
        message: 'モデルをクリアしました',
        type: 'info'
      });
    }
  }

  private updateCustomModelInfo(): void {
    const stats = this.customModelEditor.getModelStats();
    
    document.getElementById('node-count')!.textContent = stats.nodeCount.toString();
    document.getElementById('element-count')!.textContent = stats.elementCount.toString();
    document.getElementById('load-count')!.textContent = stats.loadCount.toString();
    
    const model = this.customModelEditor.getModel();
    document.getElementById('material-count')!.textContent = model.materials.length.toString();
    document.getElementById('section-count')!.textContent = model.sections.length.toString();
    document.getElementById('fixed-count')!.textContent = stats.fixedNodeCount.toString();
    
    // 解析実行ボタンの有効/無効を制御
    this.updateAnalysisButtonState();
  }

  private updateAnalysisButtonState(): void {
    const runButton = document.getElementById('run-analysis') as HTMLButtonElement;
    const model = this.customModelEditor.getModel();
    
    const hasNodes = model.nodes.length >= 2;
    const hasElements = model.elements.length >= 1;
    const hasLoads = model.loads.length >= 1;
    const hasFixedNodes = model.nodes.some(node => node.isFixed);
    
    const canAnalyze = hasNodes && hasElements && hasLoads && hasFixedNodes;
    runButton.disabled = !canAnalyze;
    
    // ツールチップで不足している条件を表示
    const missingConditions = [];
    if (!hasNodes) missingConditions.push('最低2つのノード');
    if (!hasElements) missingConditions.push('最低1つの要素');
    if (!hasLoads) missingConditions.push('最低1つの荷重');
    if (!hasFixedNodes) missingConditions.push('最低1つの固定点');
    
    if (missingConditions.length > 0) {
      runButton.title = `解析実行に必要: ${missingConditions.join(', ')}`;
    } else {
      runButton.title = '静解析を実行';
    }
  }

  private updateMaterialOptions(): void {
    const select = document.getElementById('element-material') as HTMLSelectElement;
    const model = this.customModelEditor.getModel();
    
    select.innerHTML = '<option value="">材料を選択</option>';
    model.materials.forEach(material => {
      const option = document.createElement('option');
      option.value = material.id.toString();
      option.textContent = material.name;
      select.appendChild(option);
    });
  }

  private updateSectionOptions(): void {
    const select = document.getElementById('element-section') as HTMLSelectElement;
    const model = this.customModelEditor.getModel();
    
    select.innerHTML = '<option value="">断面を選択</option>';
    model.sections.forEach(section => {
      const option = document.createElement('option');
      option.value = section.id.toString();
      option.textContent = section.name;
      select.appendChild(option);
    });
  }

  private updateCustomVisualization(): void {
    console.log('可視化更新開始');
    
    const model = this.customModelEditor.getModel();
    console.log('取得したモデル:', model);
    
    // 3D描画を初期化または更新
    const container = document.getElementById('renderer-container')!;
    
    // コンテナのサイズを確認してログ出力
    const containerRect = container.getBoundingClientRect();
    console.log('コンテナサイズ:', {
      width: containerRect.width,
      height: containerRect.height,
      clientWidth: container.clientWidth,
      clientHeight: container.clientHeight,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    
    // コンテナのサイズが0または極端に小さい場合は少し待ってから再試行
    if (container.clientWidth === 0 || container.clientHeight === 0 || 
        container.clientWidth < 300 || container.clientHeight < 200) {
      console.log('コンテナサイズが不適切なため、レイアウト確定を待機中...', {
        clientWidth: container.clientWidth,
        clientHeight: container.clientHeight,
        parentWidth: container.parentElement?.clientWidth,
        parentHeight: container.parentElement?.clientHeight
      });
      
      // より長い遅延で再試行（Flexboxレイアウトの完全確定を待つ）
      setTimeout(() => {
        this.updateCustomVisualization();
      }, 300); // さらに長い遅延
      return;
    }
    
    if (this.renderer3D) {
      // 既存のレンダラーがある場合、サイズを更新してからモデルを更新
      this.renderer3D.handleResize();
      this.renderer3D.updateModel(model);
      this.setupInteractionCallbacks(); // 既存レンダラーの場合もコールバックを再設定
    } else {
      this.renderer3D = new Renderer3D(container, model);
      this.renderer3D.startAnimation();
      this.setupInteractionCallbacks();
      
      // 初期インタラクションモードを設定
      this.renderer3D.setInteractionMode({
        type: 'select',
        isActive: true
      });
      
      console.log('新しい3Dレンダラーを作成しました');
    }
    
    console.log('可視化更新完了');
  }

  private initializeCustomRenderer(): void {
    // DOMが完全に構築され、レイアウトが確定するまで待機
    setTimeout(() => {
      // さらにFlexboxレイアウトの確定を待つ
      requestAnimationFrame(() => {
        // レイアウトが確定するまでさらに待機
        requestAnimationFrame(() => {
          // 初期化のためにレンダラーを更新
          this.updateCustomVisualization();
          
          // レンダラー初期化後にグリッド設定を適用
          if (this.renderer3D) {
            this.initializeGridSettings();
          }
        });
      });
    }, 150); // より長い遅延でレイアウト確定を確実に待つ
  }

  private setupInteractionCallbacks(): void {
    if (!this.renderer3D) return;

    // インタラクションコールバックの設定
    const callbacks = {
      onNodeClick: (nodeId: number, eventData: any) => {
        console.log('ノードクリック:', nodeId);
        
        const currentMode = this.customModelEditor.getState().mode;
        
        if (currentMode === 'add-element') {
          // 要素追加モードでのノードクリック処理
          this.handleElementCreationByNode(nodeId);
        } else {
          // 通常の選択処理
          this.customModelEditor.selectNode(nodeId, eventData.ctrlKey);
          this.updateSelectionInfo();
        }
      },
      
      onElementClick: (elementId: number, eventData: any) => {
        console.log('要素クリック:', elementId);
        this.customModelEditor.selectElement(elementId, eventData.ctrlKey);
        this.updateSelectionInfo();
      },
      
      onBackgroundClick: (worldPosition: any) => {
        console.log('背景クリック:', worldPosition);
        
        // 現在のモードに応じて処理
        const currentMode = this.customModelEditor.getState().mode;
        
        if (currentMode === 'add-node') {
          // ノード追加モード
          this.customModelEditor.addNode({
            x: worldPosition.x,
            y: worldPosition.y,
            z: worldPosition.z,
            isFixed: false
          });
          
          this.updateCustomModelInfo();
          this.updateCustomVisualization();
          
          this.uiManager.showNotification({
            title: 'ノード追加',
            message: `ノードを位置 (${worldPosition.x.toFixed(2)}, ${worldPosition.y.toFixed(2)}, ${worldPosition.z.toFixed(2)}) に追加しました`,
            type: 'success'
          });
          
        } else if (currentMode === 'add-element') {
          // 要素追加モード（2つのノードが必要）
          this.handleElementCreation(worldPosition);
          
        } else {
          // 選択モード - 選択をクリア
          this.customModelEditor.clearSelection();
          this.updateSelectionInfo();
        }
      },
      
      onNodeHover: () => {
        // ホバー効果は後で実装
      },
      
      onElementHover: () => {
        // ホバー効果は後で実装
      }
    };
    
    this.renderer3D.setCallbacks(callbacks);
    
    // 現在のインタラクションモードを再設定
    const currentMode = this.customModelEditor.getState().mode;
    this.renderer3D.setInteractionMode({
      type: currentMode as any,
      isActive: true
    });
  }

  /**
   * ノードクリックによる要素作成処理
   */
  private handleElementCreationByNode(nodeId: number): void {
    if (this.elementCreationState.firstNodeId === null) {
      // 最初のノードを選択
      this.elementCreationState.firstNodeId = nodeId;
      this.elementCreationState.isCreatingElement = true;
      
      this.uiManager.showNotification({
        title: '要素作成',
        message: `最初のノード ${nodeId} を選択しました。2番目のノードをクリックしてください。`,
        type: 'info'
      });
    } else {
      // 2番目のノードを選択
      if (nodeId === this.elementCreationState.firstNodeId) {
        this.uiManager.showNotification({
          title: '要素作成エラー',
          message: '異なるノードを選択してください。',
          type: 'error'
        });
        return;
      }
      
      // 材料と断面が選択されているかチェック
      const materialSelect = document.getElementById('element-material') as HTMLSelectElement;
      const sectionSelect = document.getElementById('element-section') as HTMLSelectElement;
      
      if (!materialSelect.value || !sectionSelect.value) {
        this.uiManager.showNotification({
          title: '要素作成エラー',
          message: '先に材料と断面を選択してください。',
          type: 'error'
        });
        return;
      }
      
      try {
        // 要素を作成
        const element = this.customModelEditor.addElement({
          nodeId1: this.elementCreationState.firstNodeId,
          nodeId2: nodeId,
          materialId: parseInt(materialSelect.value),
          sectionId: parseInt(sectionSelect.value)
        });
        
        // 状態をリセット
        this.elementCreationState.firstNodeId = null;
        this.elementCreationState.isCreatingElement = false;
        
        this.updateCustomModelInfo();
        this.updateCustomVisualization();
        
        this.uiManager.showNotification({
          title: '要素作成完了',
          message: `要素 ${element?.id} を作成しました（ノード ${this.elementCreationState.firstNodeId} → ${nodeId}）`,
          type: 'success'
        });
      } catch (error) {
        // エラーが発生した場合は状態をリセット
        this.elementCreationState.firstNodeId = null;
        this.elementCreationState.isCreatingElement = false;
        
        this.uiManager.showNotification({
          title: '要素作成エラー',
          message: (error as Error).message,
          type: 'error'
        });
      }
    }
  }

  private handleElementCreation(worldPosition: any): void {
    if (this.elementCreationState.firstNodeId === null) {
      // 最初のノードを選択する必要がある
      // 最も近いノードを見つける
      const model = this.customModelEditor.getModel();
      let closestNode: any = null;
      let minDistance = Infinity;
      
      model.nodes.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(node.position.x - worldPosition.x, 2) +
          Math.pow(node.position.y - worldPosition.y, 2) +
          Math.pow(node.position.z - worldPosition.z, 2)
        );
        
        if (distance < minDistance && distance < 0.5) { // 0.5単位以内
          minDistance = distance;
          closestNode = node;
        }
      });
      
      if (closestNode) {
        this.elementCreationState.firstNodeId = closestNode.id;
        this.elementCreationState.isCreatingElement = true;
        
        this.uiManager.showNotification({
          title: '要素作成',
          message: `最初のノード ${closestNode.id} を選択しました。2番目のノードをクリックしてください。`,
          type: 'info'
        });
      } else {
        this.uiManager.showNotification({
          title: '要素作成エラー',
          message: 'ノードの近くをクリックしてください。',
          type: 'error'
        });
      }
    } else {
      // 2番目のノードを選択
      const model = this.customModelEditor.getModel();
      let closestNode: any = null;
      let minDistance = Infinity;
      
      model.nodes.forEach(node => {
        if (node.id === this.elementCreationState.firstNodeId) return; // 同じノードは除外
        
        const distance = Math.sqrt(
          Math.pow(node.position.x - worldPosition.x, 2) +
          Math.pow(node.position.y - worldPosition.y, 2) +
          Math.pow(node.position.z - worldPosition.z, 2)
        );
        
        if (distance < minDistance && distance < 0.5) { // 0.5単位以内
          minDistance = distance;
          closestNode = node;
        }
      });
      
      if (closestNode) {
        // 要素を作成
        const materialSelect = document.getElementById('element-material') as HTMLSelectElement;
        const sectionSelect = document.getElementById('element-section') as HTMLSelectElement;
        
        if (!materialSelect.value || !sectionSelect.value) {
          this.uiManager.showNotification({
            title: '要素作成エラー',
            message: '材料と断面を選択してください。',
            type: 'error'
          });
          return;
        }
        
        this.customModelEditor.addElement({
          nodeId1: this.elementCreationState.firstNodeId,
          nodeId2: closestNode.id,
          materialId: parseInt(materialSelect.value),
          sectionId: parseInt(sectionSelect.value)
        });
        
        // 状態をリセット
        this.elementCreationState.firstNodeId = null;
        this.elementCreationState.isCreatingElement = false;
        
        this.updateCustomModelInfo();
        this.updateCustomVisualization();
        
        this.uiManager.showNotification({
          title: '要素作成',
          message: `ノード ${this.elementCreationState.firstNodeId} と ${closestNode.id} の間に要素を作成しました。`,
          type: 'success'
        });
      } else {
        this.uiManager.showNotification({
          title: '要素作成エラー',
          message: '異なるノードの近くをクリックしてください。',
          type: 'error'
        });
      }
    }
  }

  private updateSelectionInfo(): void {
    const selectedNodes = this.customModelEditor.getSelectedNodes();
    const selectedElements = this.customModelEditor.getSelectedElements();
    const selectionInfoElement = document.getElementById('selection-info')!;

    if (selectedNodes.length === 0 && selectedElements.length === 0) {
      selectionInfoElement.innerHTML = '<p class="no-selection">要素を選択してください</p>';
      return;
    }

    let infoHTML = '<div class="selection-details">';

    if (selectedNodes.length > 0) {
      infoHTML += '<div class="selected-nodes"><h5>選択ノード:</h5>';
      const model = this.customModelEditor.getModel();
      
      selectedNodes.forEach(nodeId => {
        const node = model.nodes.find(n => n.id === nodeId);
        if (node) {
          infoHTML += `
            <div class="node-info">
              <strong>ノード${nodeId}</strong><br>
              座標: (${node.position.x.toFixed(2)}, ${node.position.y.toFixed(2)}, ${node.position.z.toFixed(2)})<br>
              固定: ${node.isFixed ? 'あり' : 'なし'}
            </div>
          `;
        }
      });
      
      infoHTML += '</div>';
    }

    if (selectedElements.length > 0) {
      infoHTML += '<div class="selected-elements"><h5>選択要素:</h5>';
      const model = this.customModelEditor.getModel();
      
      selectedElements.forEach(elementId => {
        const element = model.elements.find(e => e.id === elementId);
        if (element) {
          const material = model.materials.find(m => m.id === element.materialId);
          const section = model.sections.find(s => s.id === element.sectionId);
          
          infoHTML += `
            <div class="element-info">
              <strong>要素${elementId}</strong><br>
              構成ノード: ${element.nodeIds[0]} - ${element.nodeIds[1]}<br>
              材料: ${material?.name || 'N/A'}<br>
              断面: ${section?.name || 'N/A'}
            </div>
          `;
        }
      });
      
      infoHTML += '</div>';
    }

    infoHTML += '</div>';
    selectionInfoElement.innerHTML = infoHTML;

    // 削除ボタンの有効/無効制御
    const deleteButton = document.getElementById('delete-selected') as HTMLButtonElement;
    if (deleteButton) {
      deleteButton.disabled = (selectedNodes.length === 0 && selectedElements.length === 0);
    }
  }

  private updateVisualizationSettings(): void {
    if (!this.renderer3D) return;

    const showMesh = (document.getElementById('show-mesh') as HTMLInputElement).checked;
    const showNodes = (document.getElementById('show-nodes') as HTMLInputElement).checked;
    const showNodeNumbers = (document.getElementById('show-node-numbers') as HTMLInputElement).checked;
    const showLoads = (document.getElementById('show-loads') as HTMLInputElement).checked;
    const showDisplacements = (document.getElementById('show-displacements') as HTMLInputElement).checked;
    const showStresses = (document.getElementById('show-stresses') as HTMLInputElement).checked;
    const displacementScale = parseFloat((document.getElementById('displacement-scale') as HTMLInputElement).value);

    // 応力表示設定を取得
    const showStressValues = (document.getElementById('show-stress-values') as HTMLInputElement)?.checked || false;
    const showStressDistribution = (document.getElementById('show-stress-distribution') as HTMLInputElement)?.checked || false;
    const colorMapType = ((document.getElementById('stress-colormap') as HTMLSelectElement)?.value || 'rainbow') as 'rainbow' | 'heat' | 'grayscale' | 'viridis';

    const settings: VisualizationSettings = {
      showMesh,
      showNodes,
      showNodeNumbers,
      showLoads,
      showDisplacements,
      showStresses,
      showStrains: false,
      showBoundaryConditions: true,
      displacementScale,
      colorMap: 'rainbow',
      stressDisplay: {
        showStressValues,
        showStressDistribution,
        colorMapType,
        scaleMode: 'auto'
      }
    };

    this.renderer3D.updateVisualizationSettings(settings);
    
    // 応力表示が有効な場合、応力データを更新
    if (showStresses && this.analysisResult) {
      this.updateStressResults();
    }
  }

  private updateStressDisplaySettings(): void {
    if (!this.renderer3D) return;

    const showStressValues = (document.getElementById('show-stress-values') as HTMLInputElement).checked;
    const showStressDistribution = (document.getElementById('show-stress-distribution') as HTMLInputElement).checked;
    const colorMapType = (document.getElementById('stress-colormap') as HTMLSelectElement).value as 'rainbow' | 'heat' | 'grayscale' | 'viridis';

    this.renderer3D.updateStressDisplaySettings({
      showStressValues,
      showStressDistribution,
      colorMapType,
      scaleMode: 'auto'
    });

    // 応力結果テーブルの表示/非表示
    const stressResultsSection = document.getElementById('stress-results')!;
    if (showStressValues && this.analysisResult) {
      stressResultsSection.style.display = 'block';
      this.updateStressResults();
    } else {
      stressResultsSection.style.display = 'none';
    }

    // 応力スケール情報を更新
    if (this.analysisResult && this.renderer3D) {
      this.updateStressScaleInfo();
    }
  }

  private initializeGridSettings(): void {
    // グリッドスナップの初期設定
    const snapDistanceInput = document.getElementById('grid-snap-distance') as HTMLInputElement;
    const initialSnapDistance = snapDistanceInput ? parseFloat(snapDistanceInput.value) : 2.0;
    
    console.log('グリッド設定初期化:', { 初期スナップ距離: initialSnapDistance });
    
    // レンダラーが存在する場合、スナップ設定を適用
    if (this.renderer3D) {
      const snapEnabled = (document.getElementById('grid-snap') as HTMLInputElement)?.checked ?? true;
      this.renderer3D.setGridSnap(snapEnabled, initialSnapDistance);
      console.log('グリッドスナップ初期化完了:', { enabled: snapEnabled, distance: initialSnapDistance });
    }
  }

  // モデル保存
  private async saveModel(): Promise<void> {
    try {
      console.log('FEAApp: モデル保存開始');
      this.showFileOperationStatus('モデルを保存中...', 'info');

      const result = await this.customModelEditor.saveModel();
      
      if (result.success) {
        console.log('FEAApp: モデル保存成功');
        this.showFileOperationStatus(result.message, 'success');
        this.uiManager.showNotification({
          title: '保存完了',
          message: result.message,
          type: 'success'
        });
      } else {
        console.error('FEAApp: モデル保存失敗', result.message);
        this.showFileOperationStatus(result.message, 'error');
        this.uiManager.showNotification({
          title: '保存エラー',
          message: result.message,
          type: 'error'
        });
      }
    } catch (error) {
      console.error('FEAApp: モデル保存例外', error);
      const message = `保存エラー: ${error instanceof Error ? error.message : '不明なエラー'}`;
      this.showFileOperationStatus(message, 'error');
      this.uiManager.showNotification({
        title: '保存エラー',
        message: message,
        type: 'error'
      });
    }
  }

  // モデル読み込み
  private async loadModel(): Promise<void> {
    try {
      console.log('FEAApp: モデル読み込み開始');
      this.showFileOperationStatus('モデルを読み込み中...', 'info');

      const result = await this.customModelEditor.loadModel();
      
      if (result.success) {
        console.log('FEAApp: モデル読み込み成功');
        this.showFileOperationStatus(result.message, 'success');
        
        // UIとレンダラーを更新
        this.updateCustomModelInfo();
        this.updateSelectionInfo();
        
        // 3Dビューを更新
        if (this.renderer3D) {
          this.renderer3D.updateModel(this.customModelEditor.getModel());
        }

        this.uiManager.showNotification({
          title: '読み込み完了',
          message: result.message,
          type: 'success'
        });
      } else {
        console.error('FEAApp: モデル読み込み失敗', result.message);
        this.showFileOperationStatus(result.message, 'error');
        this.uiManager.showNotification({
          title: '読み込みエラー',
          message: result.message,
          type: 'error'
        });
      }
    } catch (error) {
      console.error('FEAApp: モデル読み込み例外', error);
      const message = `読み込みエラー: ${error instanceof Error ? error.message : '不明なエラー'}`;
      this.showFileOperationStatus(message, 'error');
      this.uiManager.showNotification({
        title: '読み込みエラー',
        message: message,
        type: 'error'
      });
    }
  }

  // ファイル操作ステータス表示
  private showFileOperationStatus(message: string, type: 'info' | 'success' | 'error'): void {
    const statusElement = document.getElementById('file-operation-status');
    if (!statusElement) return;

    statusElement.textContent = message;
    statusElement.className = `status-message ${type}`;

    // 成功・エラーメッセージは5秒後に消去
    if (type === 'success' || type === 'error') {
      setTimeout(() => {
        statusElement.textContent = '';
        statusElement.className = 'status-message';
      }, 5000);
    }
  }

  // 選択項目を削除
  private deleteSelected(): void {
    try {
      console.log('FEAApp: 選択項目削除開始');
      
      const selectedNodes = this.customModelEditor.getSelectedNodes();
      const selectedElements = this.customModelEditor.getSelectedElements();
      
      if (selectedNodes.length === 0 && selectedElements.length === 0) {
        this.uiManager.showNotification({
          title: '削除エラー',
         
          message: '削除する項目が選択されていません',
          type: 'warning'
        });
        return;
      }

      // 削除確認ダイアログ
      const confirmMessage = `選択されたノード${selectedNodes.length}個、要素${selectedElements.length}個を削除しますか？\n\n` +
                            '※ノードの削除に伴い、関連する荷重も削除されます。\n' +
                            '※要素に使用されているノードは削除できません。';
      
      if (!confirm(confirmMessage)) {
        return;
      }

      // 削除実行
      const result = this.customModelEditor.deleteSelected();
      
      // 結果の通知
      let message = '';
      if (result.deletedNodes > 0 || result.deletedElements > 0) {
        const parts = [];
        if (result.deletedNodes > 0) parts.push(`ノード${result.deletedNodes}個`);
        if (result.deletedElements > 0) parts.push(`要素${result.deletedElements}個`);
        message = `${parts.join('、')}を削除しました`;
        
        if (result.errors.length > 0) {
          message += `\n\n警告:\n${result.errors.join('\n')}`;
        }

        this.uiManager.showNotification({
          title: '削除完了',
          message: message,
          type: 'success'
        });
      } else {
        message = '削除できる項目がありませんでした';
        if (result.errors.length > 0) {
          message += `\n\nエラー:\n${result.errors.join('\n')}`;
        }

        this.uiManager.showNotification({
          title: '削除失敗',
          message: message,
          type: 'error'
        });
      }

      // UIを更新
      this.updateCustomModelInfo();
      this.updateSelectionInfo();
      this.updateAnalysisButtonState();
      
      // 3Dビューを更新
      if (this.renderer3D) {
        this.renderer3D.updateModel(this.customModelEditor.getModel());
      }

      console.log('FEAApp: 削除処理完了', result);
    } catch (error) {
      console.error('FEAApp: 削除処理エラー', error);
      this.uiManager.showNotification({
        title: '削除エラー',
        message: `削除中にエラーが発生しました: ${error instanceof Error ? error.message : '不明なエラー'}`,
        type: 'error'
      });
    }
  }

  // 選択解除
  private clearSelection(): void {
    try {
      console.log('FEAApp: 選択解除');
      
      this.customModelEditor.clearSelection();
      this.updateSelectionInfo();
      
      // 3Dビューの選択状態も更新
      if (this.renderer3D) {
        this.renderer3D.clearSelection();
      }

      console.log('FEAApp: 選択解除完了');
    } catch (error) {
      console.error('FEAApp: 選択解除エラー', error);
    }
  }

  // 応力結果テーブルを更新
  private updateStressResults(): void {
    console.log('=== updateStressResults 開始 ===');
    console.log('renderer3D:', !!this.renderer3D);
    console.log('analysisResult:', !!this.analysisResult);
    
    if (!this.renderer3D || !this.analysisResult) {
      console.log('Renderer3DまたはanalysisResultが存在しません');
      return;
    }

    const stressData = this.renderer3D.getElementStressData();
    console.log('取得した応力データ:', stressData);
    
    const tbody = document.getElementById('stress-table-body')!;
    
    tbody.innerHTML = '';
    
    if (stressData.length === 0) {
      console.log('応力データが空です');
      const row = document.createElement('tr');
      row.innerHTML = '<td colspan="3">応力データがありません</td>';
      tbody.appendChild(row);
      return;
    }
    
    stressData.forEach(data => {
      console.log('テーブル行作成:', data);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${data.elementId}</td>
        <td>${data.stress.toExponential(3)}</td>
        <td>
          <div class="stress-color-indicator" style="background-color: ${data.color}; width: 20px; height: 20px; border: 1px solid #ccc; display: inline-block;"></div>
        </td>
      `;
      tbody.appendChild(row);
    });
    
    console.log('=== updateStressResults 完了 ===');
  }

  // 応力スケール情報を更新
  private updateStressScaleInfo(): void {
    if (!this.renderer3D || !this.analysisResult) return;

    const stressRange = this.renderer3D.getStressRange();
    const scaleInfoElement = document.getElementById('stress-scale-info')!;
    
    if (stressRange.min === stressRange.max && stressRange.min === 0) {
      scaleInfoElement.innerHTML = '<small>応力データがありません</small>';
    } else {
      scaleInfoElement.innerHTML = `
        <small>
          応力範囲: ${stressRange.min.toExponential(2)} 〜 ${stressRange.max.toExponential(2)} Pa
        </small>
      `;
    }
  }

  // 検証事例の読み込み（分割数対応）
  private loadVerificationCase(caseType: 'tension' | 'cantilever' | 'bending'): void {
    try {
      // 分割数を取得
      const divisionElement = document.getElementById('division-count') as HTMLSelectElement;
      const divisions = parseInt(divisionElement.value);
      
      let model: any;
      let caseName: string;
      
      switch (caseType) {
        case 'tension':
          model = StressVerificationCases.createSimpleTensionCase(divisions);
          caseName = `単純引張検証事例 (${divisions}分割)`;
          break;
        case 'cantilever':
          model = StressVerificationCases.createCantileverBeamCase(divisions);
          caseName = `片持ち梁検証事例 (${divisions}分割)`;
          break;
        case 'bending':
          model = StressVerificationCases.createThreePointBendingCase(divisions);
          caseName = `3点曲げ検証事例 (${divisions}分割)`;
          break;
        default:
          throw new Error('未対応の検証事例タイプです');
      }

      console.log(`\n=== ${caseName}読み込み開始 ===`);
      console.log('モデルデータ:', model);

      // CustomModelEditorにモデルを設定
      this.customModelEditor.clearModel();
      this.customModelEditor.loadModelData(model);

      // UIを更新
      this.updateCustomModelInfo();
      this.updateSelectionInfo();
      this.updateMaterialOptions();
      this.updateSectionOptions();

      // 3Dビューを更新
      if (this.renderer3D) {
        this.renderer3D.updateModel(this.customModelEditor.getModel());
      }

      // 理論値を表示
      const theoretical = StressVerificationCases.calculateTheoreticalValues();
      let theoreticalData: any;
      
      switch (caseType) {
        case 'tension':
          theoreticalData = theoretical.simpleTension;
          break;
        case 'cantilever':
          theoreticalData = theoretical.cantileverBending;
          break;
        case 'bending':
          theoreticalData = theoretical.threePointBending;
          break;
      }

      console.log(`${caseName}の理論値:`, theoreticalData);

      this.uiManager.showNotification({
        title: '検証事例読み込み',
        message: `${caseName}を読み込みました。解析を実行して結果を確認してください。`,
        type: 'success'
      });

      console.log(`=== ${caseName}読み込み完了 ===`);

    } catch (error) {
      console.error('検証事例読み込みエラー:', error);
      this.uiManager.showNotification({
        title: '読み込みエラー',
        message: `検証事例の読み込みに失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`,
        type: 'error'
      });
    }
  }

  // 検証事例の結果比較（分割数対応）
  private performVerificationIfApplicable(): void {
    if (!this.analysisResult || !this.feaEngine) return;

    const model = this.customModelEditor.getModel();
    
    // 検証事例かどうかを材料名で判定
    const isVerificationCase = model.materials.some(m => m.name.includes('検証用'));
    
    if (!isVerificationCase) return;

    // 分割数を取得（要素数から推定）
    const divisions = model.elements.length;
    
    console.log('\n=== 検証事例の結果比較開始 ===');
    
    const theoretical = StressVerificationCases.calculateTheoreticalValues(divisions);
    const stresses = this.analysisResult.results.stresses;
    const displacements = this.analysisResult.results.displacements;

    // 単純引張の場合
    if (model.sections.some(s => s.name.includes('正方形断面'))) {
      const maxStress = Math.max(...stresses);
      // 先端ノード（最後のノード）のX方向変位のみを取得
      const tipDisplacement = Math.abs(displacements[displacements.length - 1]?.x || 0);
      
      console.log('単純引張変位詳細:');
      console.log('  先端ノード変位:', displacements[displacements.length - 1]);
      console.log('  X方向変位:', tipDisplacement, 'm');
      
      const computed = {
        stress: maxStress,
        displacement: tipDisplacement
      };
      
      StressVerificationCases.compareResults(computed, theoretical.simpleTension, '単純引張', divisions);
    }
    
    // 片持ち梁の場合
    else if (model.sections.some(s => s.name.includes('矩形断面'))) {
      // FEA計算による固定端要素の応力
      const fixedEndStress = stresses[0]; // 第1要素の応力
      
      // 理論値に基づく固定端応力を直接計算
      // 固定端でのモーメント = P×L = 5000×3 = 15,000 N⋅m
      const force_P = 5000; // N
      const length_L = 3.0; // m
      const neutral_c = 0.4 / 2; // h/2 = 0.2 m
      const inertia_I = 2.667e-4; // m⁴
      const theoreticalMaxMoment = force_P * length_L; // 15,000 N⋅m
      const calculatedStressFromTheory = (theoreticalMaxMoment * neutral_c) / inertia_I;
      
      console.log('片持ち梁応力詳細:');
      console.log('  全要素応力:', stresses);
      console.log('  固定端応力（第1要素）:', fixedEndStress, 'Pa');
      console.log('  最大応力:', Math.max(...stresses), 'Pa');
      console.log('  理論計算による固定端応力:', calculatedStressFromTheory, 'Pa');
      console.log('  FEA vs 理論値の比較:');
      console.log('    FEA結果:', fixedEndStress.toExponential(3), 'Pa');
      console.log('    理論値:', calculatedStressFromTheory.toExponential(3), 'Pa');
      console.log('    比率:', (fixedEndStress / calculatedStressFromTheory).toFixed(3));
      
      console.log('片持ち梁変位詳細:');
      console.log('  変位配列長:', displacements.length);
      console.log('  要素数:', divisions);
      console.log('  全変位配列:', displacements);
      
      // 先端ノード（最後のノード）のY方向変位のみを取得
      const tipNodeIndex = displacements.length - 1;
      const tipNode = displacements[tipNodeIndex];
      const tipDisplacement = Math.abs(tipNode?.y || 0);
      
      console.log('  先端ノードindex:', tipNodeIndex);
      console.log('  先端ノード変位:', tipNode);
      console.log('  Y方向変位(絶対値):', tipDisplacement, 'm');
      console.log('  Y方向変位(符号付き):', tipNode?.y, 'm');
      
      // 理論値の詳細計算
      const force_val = 5000; // N
      const length_val = 3.0; // m
      const elastic_E = 200e9; // Pa
      const inertia_val = 2.667e-4; // m⁴ (Y方向荷重による曲げでは momentOfInertiaZ を使用)
      const theoreticalDeflection = (force_val * Math.pow(length_val, 3)) / (3 * elastic_E * inertia_val);
      console.log('  理論値詳細計算:');
      console.log('    P =', force_val, 'N');
      console.log('    L =', length_val, 'm');
      console.log('    E =', elastic_E, 'Pa');
      console.log('    I =', inertia_val, 'm⁴ (momentOfInertiaZ: Y方向荷重による曲げ)');
      console.log('    δ = PL³/(3EI) =', theoreticalDeflection, 'm');
      console.log('    δ =', (theoreticalDeflection * 1000), 'mm');
      
      const computed = {
        stress: fixedEndStress, // 固定端での応力を使用
        displacement: tipDisplacement
      };
      
      StressVerificationCases.compareResults(computed, theoretical.cantileverBending, '片持ち梁', divisions);
    }
    
    // 3点曲げの場合
    else if (model.sections.some(s => s.name.includes('H-200×100'))) {
      console.log('\n=== 3点曲げ詳細デバッグ ===');
      
      // 応力の詳細
      console.log('全要素応力:', stresses);
      const maxStress = Math.max(...stresses);
      const maxStressIndex = stresses.indexOf(maxStress);
      console.log('最大応力:', maxStress, 'Pa, 要素index:', maxStressIndex);
      
      // 中央ノードのY方向変位のみを取得
      const centerNodeIndex = Math.floor(divisions / 2);
      const centerDisplacement = Math.abs(displacements[centerNodeIndex]?.y || 0);
      
      console.log('変位詳細:');
      console.log('  全ノード変位:', displacements.map((d: any, i: number) => ({ node: i, y: d?.y || 0 })));
      console.log('  中央ノードindex:', centerNodeIndex);
      console.log('  中央ノード変位:', displacements[centerNodeIndex]);
      console.log('  Y方向変位(絶対値):', centerDisplacement, 'm');
      console.log('  Y方向変位(符号付き):', displacements[centerNodeIndex]?.y, 'm');
      
      // 理論値の詳細計算
      const force_val = 10000; // N
      const length_val = 4.0; // m
      const elastic_E = 200e9; // Pa
      const height_val = 0.2; // m (H形鋼の高さ H-200×100)
      const inertia_val = 1.7e-6; // m⁴ (Y方向荷重による曲げでは momentOfInertiaZ を使用)
      const moment_val = force_val * length_val / 4; // PL/4
      const theoreticalStress = (moment_val * (height_val/2)) / inertia_val;
      const theoreticalDeflection = (force_val * Math.pow(length_val, 3)) / (48 * elastic_E * inertia_val);
      
      console.log('理論値詳細計算:');
      console.log('  P =', force_val, 'N');
      console.log('  L =', length_val, 'm');
      console.log('  E =', elastic_E, 'Pa');
      console.log('  h =', height_val, 'm');
      console.log('  c = h/2 =', height_val/2, 'm');
      console.log('  I =', inertia_val, 'm⁴ (momentOfInertiaZ: Y方向荷重による曲げ)');
      console.log('  M = PL/4 =', moment_val, 'N⋅m');
      console.log('  σ = Mc/I =', theoreticalStress, 'Pa');
      console.log('  δ = PL³/(48EI) =', theoreticalDeflection, 'm');
      console.log('  δ =', (theoreticalDeflection * 1000), 'mm');
      
      const computed = {
        stress: maxStress,
        displacement: centerDisplacement
      };
      
      StressVerificationCases.compareResults(computed, theoretical.threePointBending, '3点曲げ', divisions);
    }
    
    console.log('=== 検証事例の結果比較完了 ===');
  }

  /**
   * タブ切り替え
   */
  private switchTab(tabId: string): void {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
    const selectedContent = document.getElementById(`tab-${tabId}`);
    
    if (selectedButton) selectedButton.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
  }

  /**
   * アコーディオン切り替え
   */
  private toggleAccordion(accordionId: string): void {
    const header = document.querySelector(`[data-accordion="${accordionId}"]`);
    const content = document.getElementById(`accordion-${accordionId}`);
    const icon = header?.querySelector('.accordion-icon');

    if (!header || !content) return;

    const isActive = header.classList.contains('active');
    
    if (isActive) {
      header.classList.remove('active');
      content.classList.remove('show');
      if (icon) icon.textContent = '▶';
    } else {
      header.classList.add('active');
      content.classList.add('show');
      if (icon) icon.textContent = '▼';
    }
  }

  /**
   * ビューをリセット（初期状態に戻す）
   */
  private resetView(): void {
    if (!this.renderer3D) return;
    
    this.renderer3D.resetCamera();
    this.uiManager.showNotification({
      title: 'ビューリセット',
      message: 'ビューを初期状態に戻しました',
      type: 'info'
    });
  }

  /**
   * 標準視点に設定
   */
  private setStandardView(viewType: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom' | 'isometric'): void {
    if (!this.renderer3D) return;

    // Renderer3Dのメソッドを直接呼び出し
    this.renderer3D.setCameraView(viewType);
    
    const viewNames = {
      front: '正面',
      back: '背面',
      left: '左側面',
      right: '右側面',
      top: '上面',
      bottom: '下面',
      isometric: '等角投影'
    };

    this.uiManager.showNotification({
      title: 'ビュー変更',
      message: `${viewNames[viewType]}ビューに切り替えました`,
      type: 'info'
    });
  }

  /**
   * ズームイン
   */
  private zoomIn(): void {
    if (!this.renderer3D) return;
    
    this.renderer3D.zoomCamera(1.25); // 25%ズームイン（距離を1.25倍に縮める）
  }

  /**
   * ズームアウト
   */
  private zoomOut(): void {
    if (!this.renderer3D) return;
    
    this.renderer3D.zoomCamera(0.8); // 20%ズームアウト（距離を0.8倍に伸ばす）
  }

  /**
   * 全体が見えるようにズーム調整
   */
  private zoomToFit(): void {
    if (!this.renderer3D) return;
    
    this.renderer3D.fitToView();
    this.uiManager.showNotification({
      title: 'ビュー調整',
      message: 'モデル全体が見えるように調整しました',
      type: 'info'
    });
  }
}

new FEAApp();