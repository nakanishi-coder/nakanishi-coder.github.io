export type NotificationType = 'success' | 'error' | 'warning' | 'info';
export type StatusType = 'ready' | 'working' | 'error';

export interface NotificationOptions {
  title: string;
  message?: string;
  type: NotificationType;
  duration?: number; // ミリ秒、0で手動削除のみ
  persistent?: boolean; // trueの場合、自動で消えない
}

export interface StatusBarInfo {
  mode: string;
  nodeCount: number;
  elementCount: number;
  status: StatusType;
  message?: string;
}

export class UIManager {
  private notificationContainer!: HTMLElement;
  private statusBar!: HTMLElement;
  private notificationId = 0;

  constructor() {
    this.initializeNotificationContainer();
    this.initializeStatusBar();
  }

  private initializeNotificationContainer(): void {
    this.notificationContainer = document.createElement('div');
    this.notificationContainer.className = 'notification-container';
    document.body.appendChild(this.notificationContainer);
  }

  private initializeStatusBar(): void {
    // アプリのコンテナの最後にステータスバーを追加
    const app = document.querySelector('.fea-app');
    if (app) {
      this.statusBar = document.createElement('div');
      this.statusBar.className = 'status-bar';
      this.statusBar.innerHTML = `
        <div class="status-left">
          <div class="status-indicator">
            <div class="status-dot ready" id="status-dot"></div>
            <span id="status-text">準備完了</span>
          </div>
          <span id="mode-text">プリセットモード</span>
        </div>
        <div class="status-right">
          <span id="model-stats">ノード: 0, 要素: 0</span>
          <span id="coordinates">x: 0, y: 0</span>
        </div>
      `;
      app.appendChild(this.statusBar);
    }
  }

  public showNotification(options: NotificationOptions): string {
    const id = `notification-${++this.notificationId}`;
    const notification = document.createElement('div');
    notification.className = `notification ${options.type}`;
    notification.id = id;

    const iconMap = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    notification.innerHTML = `
      <div class="notification-header">
        <span>${iconMap[options.type]}</span>
        ${options.title}
      </div>
      ${options.message ? `<div class="notification-body">${options.message}</div>` : ''}
      <button class="notification-close" onclick="document.getElementById('${id}').remove()">×</button>
    `;

    this.notificationContainer.appendChild(notification);

    // 自動削除の設定
    if (!options.persistent) {
      const duration = options.duration || 5000;
      setTimeout(() => {
        if (document.getElementById(id)) {
          this.removeNotification(id);
        }
      }, duration);
    }

    return id;
  }

  public removeNotification(id: string): void {
    const notification = document.getElementById(id);
    if (notification) {
      notification.style.animation = 'slideOut 0.3s ease-out forwards';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }

  public updateStatusBar(info: StatusBarInfo): void {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const modeText = document.getElementById('mode-text');
    const modelStats = document.getElementById('model-stats');

    if (statusDot) {
      statusDot.className = `status-dot ${info.status}`;
    }

    if (statusText) {
      const statusMessages = {
        ready: '準備完了',
        working: '処理中...',
        error: 'エラー'
      };
      statusText.textContent = info.message || statusMessages[info.status];
    }

    if (modeText) {
      modeText.textContent = info.mode;
    }

    if (modelStats) {
      modelStats.textContent = `ノード: ${info.nodeCount}, 要素: ${info.elementCount}`;
    }
  }

  public updateCoordinates(x: number, y: number): void {
    const coordinatesElement = document.getElementById('coordinates');
    if (coordinatesElement) {
      coordinatesElement.textContent = `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`;
    }
  }

  public showProgress(message: string, percentage: number = 0): string {
    const id = `progress-${++this.notificationId}`;
    const progressNotification = document.createElement('div');
    progressNotification.className = 'notification info';
    progressNotification.id = id;

    progressNotification.innerHTML = `
      <div class="notification-header">
        <span>⏳</span>
        ${message}
      </div>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${percentage}%"></div>
      </div>
      <div class="progress-text">${percentage}%</div>
    `;

    this.notificationContainer.appendChild(progressNotification);
    return id;
  }

  public updateProgress(id: string, percentage: number, message?: string): void {
    const notification = document.getElementById(id);
    if (notification) {
      const progressBar = notification.querySelector('.progress-bar') as HTMLElement;
      const progressText = notification.querySelector('.progress-text') as HTMLElement;
      const header = notification.querySelector('.notification-header') as HTMLElement;

      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }

      if (progressText) {
        progressText.textContent = `${percentage}%`;
      }

      if (message && header) {
        header.innerHTML = `<span>⏳</span>${message}`;
      }

      // 100%完了時は自動的に成功通知に変更
      if (percentage >= 100) {
        setTimeout(() => {
          this.removeNotification(id);
          this.showNotification({
            title: '完了',
            message: message || '処理が完了しました',
            type: 'success'
          });
        }, 500);
      }
    }
  }

  public addTooltip(element: HTMLElement, text: string): void {
    element.classList.add('tooltip');
    
    const tooltipContent = document.createElement('div');
    tooltipContent.className = 'tooltip-content';
    tooltipContent.textContent = text;
    
    element.appendChild(tooltipContent);
  }

  public setStatus(status: StatusType, message?: string): void {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    if (statusDot) {
      statusDot.className = `status-dot ${status}`;
    }

    if (statusText && message) {
      statusText.textContent = message;
    }
  }

  public showConfirmDialog(message: string, onConfirm: () => void, onCancel?: () => void): void {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const dialog = document.createElement('div');
    dialog.style.cssText = `
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      max-width: 400px;
      text-align: center;
    `;

    dialog.innerHTML = `
      <div style="margin-bottom: 1.5rem; color: #333; font-size: 1.1rem;">${message}</div>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button id="confirm-btn" style="padding: 0.5rem 1.5rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">はい</button>
        <button id="cancel-btn" style="padding: 0.5rem 1.5rem; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">キャンセル</button>
      </div>
    `;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const confirmBtn = dialog.querySelector('#confirm-btn') as HTMLButtonElement;
    const cancelBtn = dialog.querySelector('#cancel-btn') as HTMLButtonElement;

    confirmBtn.addEventListener('click', () => {
      overlay.remove();
      onConfirm();
    });

    cancelBtn.addEventListener('click', () => {
      overlay.remove();
      if (onCancel) onCancel();
    });

    // ESCキーで閉じる
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        overlay.remove();
        if (onCancel) onCancel();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  public hideProgress(id?: string): void {
    if (id) {
      this.removeNotification(id);
    } else {
      // 全ての進行状況通知を削除
      const progressNotifications = this.notificationContainer.querySelectorAll('[id^="progress-"]');
      progressNotifications.forEach(notification => {
        this.removeNotification(notification.id);
      });
    }
  }

  public updateStatus(status: StatusType, message?: string): void {
    const statusInfo: StatusBarInfo = {
      mode: this.getCurrentMode(),
      nodeCount: this.getCurrentNodeCount(),
      elementCount: this.getCurrentElementCount(),
      status: status,
      message: message
    };
    this.updateStatusBar(statusInfo);
  }

  public showLoadingState(element: HTMLElement, message: string = '読み込み中...'): string {
    const loadingId = `loading-${++this.notificationId}`;
    const originalContent = element.innerHTML;
    
    element.innerHTML = `
      <div class="loading-container" id="${loadingId}">
        <div class="loading-spinner"></div>
        <span class="loading-text">${message}</span>
      </div>
    `;
    
    element.classList.add('loading-state');
    element.dataset.originalContent = originalContent;
    
    return loadingId;
  }

  public hideLoadingState(element: HTMLElement): void {
    const originalContent = element.dataset.originalContent;
    if (originalContent) {
      element.innerHTML = originalContent;
      element.classList.remove('loading-state');
      delete element.dataset.originalContent;
    }
  }

  public addSuccessAnimation(element: HTMLElement): void {
    element.classList.add('success-pulse');
    setTimeout(() => {
      element.classList.remove('success-pulse');
    }, 600);
  }

  public addErrorAnimation(element: HTMLElement): void {
    element.classList.add('error-shake');
    setTimeout(() => {
      element.classList.remove('error-shake');
    }, 500);
  }

  public createInfoBadge(text: string, type: 'info' | 'warning' | 'success' | 'error' = 'info'): HTMLElement {
    const badge = document.createElement('span');
    badge.className = `badge badge-${type}`;
    badge.textContent = text;
    return badge;
  }

  public updateElementProgress(element: HTMLElement, percentage: number): void {
    let progressBar = element.querySelector('.element-progress') as HTMLElement;
    
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'element-progress';
      progressBar.innerHTML = '<div class="element-progress-bar"></div>';
      element.appendChild(progressBar);
    }
    
    const bar = progressBar.querySelector('.element-progress-bar') as HTMLElement;
    if (bar) {
      bar.style.width = `${percentage}%`;
    }
    
    if (percentage >= 100) {
      setTimeout(() => {
        progressBar.remove();
      }, 1000);
    }
  }

  private getCurrentMode(): string {
    const modeText = document.getElementById('mode-text');
    return modeText ? modeText.textContent || 'プリセットモード' : 'プリセットモード';
  }

  private getCurrentNodeCount(): number {
    const modelStats = document.getElementById('model-stats');
    if (modelStats && modelStats.textContent) {
      const match = modelStats.textContent.match(/ノード: (\d+)/);
      return match ? parseInt(match[1]) : 0;
    }
    return 0;
  }

  private getCurrentElementCount(): number {
    const modelStats = document.getElementById('model-stats');
    if (modelStats && modelStats.textContent) {
      const match = modelStats.textContent.match(/要素: (\d+)/);
      return match ? parseInt(match[1]) : 0;
    }
    return 0;
  }
}

// スライドアウトアニメーションのCSS
const slideOutCSS = `
@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
`;

// スタイルを追加
const style = document.createElement('style');
style.textContent = slideOutCSS;
document.head.appendChild(style);
