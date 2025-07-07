import type { Model, ModelFileData, FileOperationResult } from '../types';

export class FileManager {
  private static readonly VERSION = '1.0.0';
  private static readonly FILE_EXTENSION = '.feamodel';

  /**
   * モデルをJSON形式でダウンロード
   */
  static exportModel(model: Model, description?: string, additionalData?: any): FileOperationResult {
    try {
      const fileData: ModelFileData = {
        version: this.VERSION,
        created: new Date().toISOString(),
        description: description || 'FEA Model',
        model: this.cleanModelForExport(model),
        ...additionalData
      };

      const jsonString = JSON.stringify(fileData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      
      // ファイル名を生成（タイムスタンプ付き）
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const filename = `fea-model-${timestamp}${this.FILE_EXTENSION}`;
      
      // ダウンロードトリガー
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      return {
        success: true,
        message: `モデルを ${filename} として保存しました`,
        filename: filename
      };
    } catch (error) {
      console.error('Export error:', error);
      return {
        success: false,
        message: 'ファイルの出力に失敗しました',
        error: (error as Error).message
      };
    }
  }

  /**
   * ファイル選択ダイアログを表示してモデルを読み込み
   */
  static importModel(): Promise<{ success: boolean; data?: ModelFileData; message: string; error?: string; filename?: string }> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = `${this.FILE_EXTENSION},.json`;
      
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          resolve({
            success: false,
            message: 'ファイルが選択されませんでした'
          });
          return;
        }

        this.importModelFromFile(file).then(result => {
          resolve({
            ...result,
            filename: file.name
          });
        });
      };

      input.oncancel = () => {
        resolve({
          success: false,
          message: 'ファイル選択がキャンセルされました'
        });
      };

      input.click();
    });
  }

  /**
   * ファイルからモデルを読み込み
   */
  static importModelFromFile(file: File): Promise<{ success: boolean; data?: ModelFileData; message: string; error?: string }> {
    return new Promise((resolve) => {
      if (!file.name.endsWith(this.FILE_EXTENSION) && !file.name.endsWith('.json')) {
        resolve({
          success: false,
          message: '対応していないファイル形式です。.feamodel または .json ファイルを選択してください。'
        });
        return;
      }

      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const jsonString = e.target?.result as string;
          const fileData: ModelFileData = JSON.parse(jsonString);
          
          // バージョンチェック
          if (!this.isCompatibleVersion(fileData.version)) {
            resolve({
              success: false,
              message: `非対応のファイルバージョンです (${fileData.version})`
            });
            return;
          }

          // モデルデータの検証
          const validationResult = this.validateModelData(fileData.model);
          if (!validationResult.valid) {
            resolve({
              success: false,
              message: 'ファイルデータが無効です',
              error: validationResult.error
            });
            return;
          }

          resolve({
            success: true,
            data: fileData,
            message: `モデルを正常に読み込みました (作成日: ${new Date(fileData.created).toLocaleString()})`
          });
        } catch (error) {
          console.error('Import error:', error);
          resolve({
            success: false,
            message: 'ファイルの読み込みに失敗しました',
            error: (error as Error).message
          });
        }
      };

      reader.onerror = () => {
        resolve({
          success: false,
          message: 'ファイルの読み取りに失敗しました'
        });
      };

      reader.readAsText(file);
    });
  }

  /**
   * エクスポート用にモデルデータをクリーンアップ
   */
  private static cleanModelForExport(model: Model): Model {
    // 解析結果や一時的なデータを除外したクリーンなモデルを返す
    return {
      nodes: model.nodes.map(node => ({
        ...node,
        // 解析結果をクリア
        displacements: undefined,
        forces: undefined,
        moments: undefined
      })),
      elements: model.elements.map(element => ({
        ...element,
        // 一時的な計算結果をクリア
        length: undefined,
        localAxis: undefined
      })),
      materials: [...model.materials],
      sections: [...model.sections],
      loads: [...model.loads]
    };
  }

  /**
   * バージョン互換性チェック
   */
  private static isCompatibleVersion(version: string): boolean {
    // メジャーバージョンが同じであれば互換性ありとする
    const currentMajor = this.VERSION.split('.')[0];
    const fileMajor = version.split('.')[0];
    return currentMajor === fileMajor;
  }

  /**
   * モデルデータの基本検証
   */
  private static validateModelData(model: any): { valid: boolean; error?: string } {
    try {
      if (!model || typeof model !== 'object') {
        return { valid: false, error: 'モデルデータが存在しません' };
      }

      if (!Array.isArray(model.nodes)) {
        return { valid: false, error: 'ノードデータが無効です' };
      }

      if (!Array.isArray(model.elements)) {
        return { valid: false, error: '要素データが無効です' };
      }

      if (!Array.isArray(model.materials)) {
        return { valid: false, error: '材料データが無効です' };
      }

      if (!Array.isArray(model.sections)) {
        return { valid: false, error: '断面データが無効です' };
      }

      if (!Array.isArray(model.loads)) {
        return { valid: false, error: '荷重データが無効です' };
      }

      // 基本的なデータ整合性チェック
      const nodeIds = new Set(model.nodes.map((n: any) => n.id));
      for (const element of model.elements) {
        if (!nodeIds.has(element.nodeIds[0]) || !nodeIds.has(element.nodeIds[1])) {
          return { valid: false, error: '要素が参照するノードが存在しません' };
        }
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, error: (error as Error).message };
    }
  }

  /**
   * ファイル選択ダイアログを表示
   */
  static showFileDialog(): Promise<File | null> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = `${this.FILE_EXTENSION},.json`;
      
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        resolve(file || null);
      };
      
      input.oncancel = () => {
        resolve(null);
      };
      
      input.click();
    });
  }
}
