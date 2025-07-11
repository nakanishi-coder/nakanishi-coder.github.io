# 有限要素解析 Webアプリケーション

ブラウザで動作する有限要素解析（FEA）アプリケーションです。ビーム要素を使用した構造解析と3D可視化機能を提供します。

## 🌐 デモ

**ライブデモ**: [https://your-username.github.io/fea-beam-app/](https://your-username.github.io/fea-beam-app/)

## 🚀 特徴

- **ビーム要素による構造解析**: 3D空間での梁構造の静解析
- **3D可視化**: Three.jsによるリアルタイム3D表示
- **ポストプロセッサ**: 変位・応力・ひずみの視覚化
- **カスタムモデル作成**: ユーザー定義による自由なモデル構築
- **プリセット材料・断面**: 一般的な構造材料と断面の事前定義
- **インタラクティブUI**: 直感的な操作とリアルタイム結果表示
- **レスポンシブデザイン**: デスクトップとモバイルデバイス対応

## 🛠️ 技術スタック

- **フロントエンド**: TypeScript + Vite
- **3Dグラフィックス**: Three.js
- **数値計算**: ml-matrix（行列演算）
- **スタイリング**: 純粋なCSS
- **開発環境**: VS Code + GitHub Copilot

## 📁 プロジェクト構成

```
src/
├── core/                  # 有限要素解析エンジン
│   ├── BeamElement.ts     # ビーム要素クラス
│   └── FEAEngine.ts       # 解析エンジン
├── types/                 # TypeScript型定義
│   └── index.ts
├── ui/                    # ユーザーインターフェース
│   ├── CustomModelEditor.ts # カスタムモデル編集
│   └── UIManager.ts       # UI管理
├── utils/                 # ユーティリティ関数
├── visualization/         # 3D可視化
│   └── Renderer3D.ts      # Three.js レンダラー
├── main.ts               # メインアプリケーション
└── style.css             # スタイルシート
```

## 🔧 セットアップ

### 前提条件
- Node.js (v16以上)
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd fea-beam-app
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで http://localhost:5173 を開く

## 🚀 ビルドとデプロイ

### プロダクションビルド
```bash
npm run build
```

### ローカルプレビュー
```bash
npm run preview
```

### GitHub Pages デプロイ

#### 自動デプロイ（推奨）
1. GitHubリポジトリの Settings > Pages に移動
2. Source で "GitHub Actions" を選択
3. `main` ブランチにプッシュすると自動的にデプロイされます

#### 手動デプロイ
```bash
npm run deploy
```

**デプロイ後のURL**: `https://[ユーザー名].github.io/fea-beam-app/`

## 📊 使用方法

### 1. カスタムモデル作成

#### 材料・断面
- 以下のプリセット材料が利用可能：
  - **構造用鋼 SS400**: 一般構造用圧延鋼材
  - **構造用鋼 SM490**: 溶接構造用圧延鋼材  
  - **アルミニウム A6061**: アルミニウム合金
  - **普通コンクリート**: 設計基準強度 Fc=24N/mm²

- 以下のプリセット断面が利用可能：
  - **H-200×100×5.5×8**: H形鋼
  - **H-300×150×6.5×9**: H形鋼
  - **角パイプ □-100×100×4.5**: 角形鋼管
  - **丸パイプ φ-89.1×3.2**: 円形鋼管
  - **矩形断面 200×100**: 矩形断面

- カスタム材料・断面の追加も可能

#### モデル構築手順
1. **ノード追加**: 座標入力または3Dビューをクリック
   - **インタラクティブ追加**: 「ノード追加」モードで3Dビューをクリック
   - **グリッドスナップ**: グリッド表示時に自動的に格子点にスナップ
   - **マニュアル入力**: 座標値を直接入力して追加
2. **要素追加**: ノード間を接続してビーム要素を作成
   - **クリック操作**: 「要素追加」モードでノードを順次クリック
   - **フォーム入力**: ノードIDを指定して直接作成
3. **荷重設定**: 集中荷重またはモーメントを指定
4. **境界条件**: 固定・ピン・ローラー支点を設定

#### グリッド機能

- **表示制御**: XY、XZ、YZ平面のグリッド表示
- **スナップ機能**: グリッド格子点への自動スナップ
- **視覚的支援**: グリッド交点の表示とカーソル変更

#### モデルファイル操作

- **モデル保存**: 💾 モデル保存ボタンで現在のモデルをJSONファイルとして保存
  - ファイル形式: `.feamodel` （JSON形式）
  - 保存内容: ノード、要素、材料、断面、荷重、境界条件、編集状態
  - 自動ファイル名: `fea-model-YYYY-MM-DD-HH-mm-ss.feamodel`

- **モデル読み込み**: 📁 モデル読み込みボタンで保存したモデルファイルを復元
  - 対応形式: `.feamodel`、`.json`
  - バージョン互換性チェック
  - データ整合性検証
  - 読み込み後の状態復元（編集モード、ID管理など）

- **モデルクリア**: 🗑️ モデルクリアボタンで新規モデル作成に切り替え

#### 選択・削除機能

- **要素選択**: 「選択」モードで3Dビューのノードや要素をクリックして選択
  - 複数選択可能（Ctrlキー + クリック）
  - 選択された要素の詳細情報を表示

- **選択項目削除**: 🗑️ 選択項目を削除ボタンで選択したノード・要素を一括削除
  - 要素に使用されているノードは削除不可
  - ノード削除時に関連する荷重も自動削除
  - 削除前に確認ダイアログを表示

- **選択解除**: ❌ 選択解除ボタンで現在の選択状態をクリア

### 2. 応力計算検証

プリセットされた標準的な構造問題を用いて、計算精度の検証が行えます：

#### 検証用モデル
- **単純引張**: 軸引張応力・変位の検証
- **片持ち梁**: 曲げ応力・たわみの検証  
- **3点曲げ**: 集中荷重下での応力分布検証

#### 分割数指定機能
- **精度検証**: 1〜32分割まで指定可能
- **収束性確認**: 分割数を増やした際の計算結果の変化を確認
- **理論値比較**: 各分割数での計算値と理論値の自動比較
- **誤差評価**: 許容誤差（5%）内での精度判定

#### 使用方法
1. 検証セクションで分割数を選択（1, 2, 4, 8, 16, 32分割）
2. 検証したいモデルボタンをクリック（単純引張・片持ち梁・3点曲げ）
3. 自動的にモデルが生成され、解析実行
4. コンソールに理論値との比較結果が表示

### 3. 解析実行

- モデル作成後、「静解析実行」ボタンをクリック
- 解析結果がリアルタイムで表示

### 3. 結果の可視化

- **メッシュ表示**: 構造の骨組み表示
- **ノード表示**: 節点の表示
- **荷重表示**: 外力の矢印表示
- **変位表示**: 変形後の形状表示
- **応力表示**: 色分けによる応力分布
- **変位倍率**: 変形の拡大表示

## 🧮 解析機能

### 対応する解析タイプ
- 静的線形解析
- 3次元ビーム要素
- 集中荷重・モーメント
- 固定・ピン・ローラー支点

## 📊 解析結果と可視化

### 計算される結果
- 節点変位 (dx, dy, dz, rx, ry, rz)
- 要素内力 (軸力、せん断力、曲げモーメント)
- **要素応力・ひずみ**
- 支点反力

### 応力表示機能
解析完了後、以下の応力表示機能が利用可能：

#### 数値表示
- **応力値表示**: 各要素の応力値を数値テーブルで表示
- **応力範囲**: 最小・最大応力値の表示
- **要素ごとの詳細**: 要素ID、応力値、色コードの一覧

#### 視覚的表示
- **応力分布表示**: ビーム要素を応力レベルに応じて色分け
- **カラーマップ選択**:
  - **レインボー**: 青（低応力）→ 赤（高応力）
  - **ヒートマップ**: 黒 → 赤 → 黄 → 白
  - **Viridis**: 科学的可視化に適した色マップ
  - **グレースケール**: 白黒表示
- **リアルタイム更新**: 設定変更時の即座な表示更新

#### 使用方法
1. 解析実行後、「応力表示」にチェック
2. 「応力表示設定」で以下を選択：
   - 応力値表示: 数値テーブルを表示
   - 応力分布表示: 3Dモデルを色分け
   - カラーマップ: 色の種類を選択
3. 応力範囲が自動表示され、色と数値の対応が確認可能

### 対応する解析タイプ
- 12×12剛性マトリクス（ビーム要素）
- 3D座標変換
- 境界条件の適用
- 連立方程式の求解（逆行列法）

### 3D可視化
- WebGL ベースのレンダリング
- インタラクティブなカメラ制御
- 材料・断面による色分け表示
- リアルタイム変形アニメーション

### ユーザーインターフェース
- レスポンシブデザイン
- リアルタイム設定変更
- エラーハンドリング
- 進捗表示

## 🔬 理論背景

このアプリケーションは以下の有限要素法の理論に基づいています：

- **ティモシェンコ梁理論**: せん断変形を考慮した梁要素
- **マトリクス構造解析**: 剛性マトリクス法
- **3次元座標変換**: 局所座標系から全体座標系への変換

## 📈 今後の改善点

- [ ] 動的解析（固有値解析）
- [ ] 非線形解析
- [ ] より多様な要素タイプ
- [ ] 結果のエクスポート機能
- [ ] カスタムモデル作成UI
- [ ] より詳細な応力分布表示

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

## 📄 ライセンス

MIT License

## 🙏 謝辞

- [Three.js](https://threejs.org/) - 3Dグラフィックスライブラリ
- [ml-matrix](https://github.com/mljs/matrix) - 行列計算ライブラリ
- [Vite](https://vitejs.dev/) - 高速ビルドツール
