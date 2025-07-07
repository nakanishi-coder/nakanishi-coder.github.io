/**
 * レスポンシブデザインを管理するクラス
 * ブレークポイントの判定、サイドバーの制御、画面サイズ変更への対応を行う
 */

export type BreakpointType = 'mobile' | 'tablet' | 'desktop' | 'large';

export interface ResponsiveConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

export class ResponsiveManager {
  private breakpoints: ResponsiveConfig = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
    large: 1400
  };

  private currentBreakpoint: BreakpointType = 'mobile';
  private isSidebarVisible: boolean = true;
  private resizeTimeout: number | null = null;
  
  // DOM要素への参照
  private sidebarElement: HTMLElement | null = null;
  private overlayElement: HTMLElement | null = null;
  private toggleButton: HTMLElement | null = null;
  private appContainer: HTMLElement | null = null;

  // コールバック関数
  private onBreakpointChange: ((breakpoint: BreakpointType) => void) | null = null;
  private onSidebarToggle: ((isVisible: boolean) => void) | null = null;
  private onResize: (() => void) | null = null; // リサイズコールバックを追加

  constructor() {
    this.init();
  }

  /**
   * 初期化
   */
  private init(): void {
    this.detectBreakpoint();
    this.setupEventListeners();
    this.initializeDOMElements();
    this.updateLayout();
  }

  /**
   * DOM要素の初期化
   */
  private initializeDOMElements(): void {
    // メインコンテナの設定
    this.appContainer = document.querySelector('.app-container');
    if (!this.appContainer) {
      this.appContainer = document.body;
      this.appContainer.classList.add('app-container');
    }

    // サイドバーの取得/作成
    this.sidebarElement = document.querySelector('.sidebar');
    if (!this.sidebarElement) {
      console.error('サイドバー要素が見つかりません');
      return;
    }
    console.log('サイドバー要素を取得:', this.sidebarElement);
    
    // オーバーレイの作成
    this.createOverlay();
    
    // モバイルメニューボタンの作成
    this.createMobileMenuToggle();
  }

  /**
   * オーバーレイ要素の作成
   */
  private createOverlay(): void {
    this.overlayElement = document.createElement('div');
    this.overlayElement.className = 'sidebar-overlay';
    this.overlayElement.addEventListener('click', () => {
      this.hideSidebar();
    });
    document.body.appendChild(this.overlayElement);
  }

  /**
   * モバイルメニューボタンの作成
   */
  private createMobileMenuToggle(): void {
    // 既存のボタンがある場合は削除
    const existingButton = document.querySelector('.mobile-menu-toggle');
    if (existingButton) {
      existingButton.remove();
    }

    this.toggleButton = document.createElement('button');
    this.toggleButton.className = 'mobile-menu-toggle';
    this.toggleButton.innerHTML = '☰';
    this.toggleButton.setAttribute('aria-label', 'メニューを開く');
    this.toggleButton.style.position = 'fixed';
    this.toggleButton.style.top = '10px';
    this.toggleButton.style.left = '10px';
    this.toggleButton.style.zIndex = '1001';
    this.toggleButton.addEventListener('click', () => {
      this.toggleSidebar();
    });

    // ボディに直接追加（ヘッダーがないため）
    document.body.appendChild(this.toggleButton);
  }

  /**
   * イベントリスナーの設定
   */
  private setupEventListeners(): void {
    // リサイズイベント
    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // 向き変更イベント（モバイル）
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.handleResize();
      }, 100);
    });

    // キーボードショートカット
    document.addEventListener('keydown', (event) => {
      this.handleKeyboard(event);
    });
  }

  /**
   * リサイズハンドラー（デバウンス付き）
   */
  private handleResize(): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = window.setTimeout(() => {
      const oldBreakpoint = this.currentBreakpoint;
      this.detectBreakpoint();
      
      if (oldBreakpoint !== this.currentBreakpoint) {
        this.updateLayout();
        if (this.onBreakpointChange) {
          this.onBreakpointChange(this.currentBreakpoint);
        }
      }
      
      // リサイズコールバックを実行（3Dレンダラーのリサイズなど）
      if (this.onResize) {
        this.onResize();
      }
      
      // カスタムビューアリサイズイベントを発行
      window.dispatchEvent(new CustomEvent('viewer-resize'));
      
      this.resizeTimeout = null;
    }, 150);
  }

  /**
   * キーボードイベントハンドラー
   */
  private handleKeyboard(event: KeyboardEvent): void {
    // Ctrl + M または Cmd + M でサイドバートグル
    if ((event.ctrlKey || event.metaKey) && event.key === 'm') {
      event.preventDefault();
      this.toggleSidebar();
    }

    // Escキーでサイドバーを閉じる（モバイル時）
    if (event.key === 'Escape' && this.currentBreakpoint === 'mobile' && this.isSidebarVisible) {
      this.hideSidebar();
    }
  }

  /**
   * 現在のブレークポイントを検出
   */
  private detectBreakpoint(): void {
    const width = window.innerWidth;
    
    if (width >= this.breakpoints.large) {
      this.currentBreakpoint = 'large';
    } else if (width >= this.breakpoints.desktop) {
      this.currentBreakpoint = 'desktop';
    } else if (width >= this.breakpoints.tablet) {
      this.currentBreakpoint = 'tablet';
    } else {
      this.currentBreakpoint = 'mobile';
    }
  }

  /**
   * レイアウトの更新
   */
  private updateLayout(): void {
    if (!this.sidebarElement) return;

    const isMobile = this.currentBreakpoint === 'mobile';
    console.log('レイアウト更新:', { breakpoint: this.currentBreakpoint, isMobile });
    
    // モバイルメニューボタンの表示/非表示
    if (this.toggleButton) {
      this.toggleButton.style.display = isMobile ? 'block' : 'none';
      console.log('ハンバーガーメニューボタン表示:', isMobile ? '表示' : '非表示');
    }

    // サイドバーの状態更新
    if (isMobile) {
      // モバイル: 強制的に非表示（ただしvisibleクラスは保持しない）
      this.isSidebarVisible = false;
      this.sidebarElement.classList.add('hidden');
      this.sidebarElement.classList.remove('visible');
      console.log('モバイル: サイドバーを非表示');
    } else {
      // タブレット以上: 常に表示
      this.isSidebarVisible = true;
      this.sidebarElement.classList.remove('hidden');
      this.sidebarElement.classList.remove('visible'); // タブレット以上ではvisibleクラス不要
      if (this.overlayElement) {
        this.overlayElement.classList.remove('active');
      }
      console.log('デスクトップ: サイドバーを表示');
    }

    // ボディクラスの更新
    document.body.className = document.body.className
      .replace(/breakpoint-\w+/g, '');
    document.body.classList.add(`breakpoint-${this.currentBreakpoint}`);
  }

  /**
   * サイドバーの表示/非表示を切り替え
   */
  public toggleSidebar(): void {
    if (this.isSidebarVisible) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  }

  /**
   * サイドバーを表示
   */
  public showSidebar(): void {
    if (!this.sidebarElement) return;

    this.isSidebarVisible = true;
    this.sidebarElement.classList.remove('hidden');
    this.sidebarElement.classList.add('visible'); // visibleクラスを追加
    
    console.log('サイドバー表示:', { 
      breakpoint: this.currentBreakpoint, 
      classes: this.sidebarElement.className 
    });
    
    if (this.currentBreakpoint === 'mobile' && this.overlayElement) {
      this.overlayElement.classList.add('active');
      console.log('モバイル: オーバーレイを表示');
    }

    if (this.toggleButton) {
      this.toggleButton.setAttribute('aria-label', 'メニューを閉じる');
    }

    // コールバック実行
    if (this.onSidebarToggle) {
      this.onSidebarToggle(true);
    }
  }

  /**
   * サイドバーを非表示
   */
  public hideSidebar(): void {
    if (!this.sidebarElement) return;

    this.isSidebarVisible = false;
    this.sidebarElement.classList.add('hidden');
    this.sidebarElement.classList.remove('visible'); // visibleクラスを削除
    
    console.log('サイドバー非表示:', { 
      breakpoint: this.currentBreakpoint, 
      classes: this.sidebarElement.className 
    });
    
    if (this.overlayElement) {
      this.overlayElement.classList.remove('active');
      console.log('オーバーレイを非表示');
    }

    if (this.toggleButton) {
      this.toggleButton.setAttribute('aria-label', 'メニューを開く');
    }

    // コールバック実行
    if (this.onSidebarToggle) {
      this.onSidebarToggle(false);
    }
  }

  /**
   * 現在のブレークポイントを取得
   */
  public getCurrentBreakpoint(): BreakpointType {
    return this.currentBreakpoint;
  }

  /**
   * モバイルかどうかを判定
   */
  public isMobile(): boolean {
    return this.currentBreakpoint === 'mobile';
  }

  /**
   * タブレットかどうかを判定
   */
  public isTablet(): boolean {
    return this.currentBreakpoint === 'tablet';
  }

  /**
   * デスクトップかどうかを判定
   */
  public isDesktop(): boolean {
    return this.currentBreakpoint === 'desktop' || this.currentBreakpoint === 'large';
  }

  /**
   * サイドバーが表示されているかどうか
   */
  public isSidebarOpen(): boolean {
    return this.isSidebarVisible;
  }

  /**
   * ブレークポイント変更時のコールバックを設定
   */
  public onBreakpointChanged(callback: (breakpoint: BreakpointType) => void): void {
    this.onBreakpointChange = callback;
  }

  /**
   * サイドバートグル時のコールバックを設定
   */
  public onSidebarToggled(callback: (isVisible: boolean) => void): void {
    this.onSidebarToggle = callback;
  }

  /**
   * リサイズ時のコールバックを設定（3Dレンダラーのリサイズなど）
   */
  public onResized(callback: () => void): void {
    this.onResize = callback;
  }

  /**
   * 3Dビューのリサイズを通知
   */
  public notifyViewerResize(): void {
    // 3Dビューアーのリサイズイベントを発火
    const event = new CustomEvent('viewer-resize', {
      detail: {
        breakpoint: this.currentBreakpoint,
        sidebarVisible: this.isSidebarVisible
      }
    });
    window.dispatchEvent(event);
  }

  /**
   * レスポンシブマネージャーの破棄
   */
  public destroy(): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    // イベントリスナーの削除
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('orientationchange', this.handleResize);

    // DOM要素の削除
    if (this.overlayElement) {
      this.overlayElement.remove();
    }
    if (this.toggleButton) {
      this.toggleButton.remove();
    }
  }
}
