# GitHub Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## プロジェクト概要
このプロジェクトは、ブラウザで動作する有限要素解析（FEA）アプリケーションです。

## 主要機能
- ビーム要素を使用した構造解析
- 3Dモデルとメッシュの生成
- Three.jsを使用した3D可視化
- ポストプロセッサ機能（変位、応力、ひずみの表示）
- インタラクティブなユーザーインターフェース

## 技術スタック
- **フロントエンド**: TypeScript + Vite
- **3Dグラフィックス**: Three.js
- **数値計算**: ml-matrix（行列演算）
- **UI**: 純粋なHTML/CSS/JavaScript

## コーディング指針
1. **型安全性**: TypeScriptの型システムを活用し、厳密な型定義を使用
2. **モジュラー設計**: 機能ごとにクラスとモジュールを分離
3. **パフォーマンス**: 大規模な計算とレンダリングの最適化を考慮
4. **ユーザビリティ**: 直感的なインターフェースとフィードバック

## ファイル構成
- `src/core/`: 有限要素解析の核となるクラス
- `src/visualization/`: Three.jsベースの3D表示
- `src/ui/`: ユーザーインターフェース
- `src/utils/`: ユーティリティ関数
- `src/types/`: TypeScript型定義

## 有限要素解析の要件
- ビーム要素の剛性マトリクス計算
- 境界条件の適用
- 連立方程式の求解
- 変位・応力・ひずみの計算
- 結果の可視化とエクスポート
