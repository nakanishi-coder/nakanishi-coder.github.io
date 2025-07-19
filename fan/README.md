# 扇風機羽根モデル生成Webアプリ（three.js）

## 概要

このWebアプリはthree.jsを用いて扇風機の羽根モデルを生成し、物理計算やSTLエクスポートも可能です。GitHub Pagesで公開できます。

## 公開手順（GitHub Pages）

1. このリポジトリの `index.html` をルートに配置してください。
2. `main.js`, `fan_model.js`, `style.css` もルートに配置します。
3. `libs/` フォルダに three.js および examples（OrbitControls.js, STLExporter.js, FontLoader.js, TextGeometry.js）を配置します。
4. フォントファイル（helvetiker_regular.typeface.json）はCDN参照ですが、必要なら `fonts/` フォルダに保存し、パスを修正してください。
5. GitHub Pagesの設定で `main` ブランチの `/`（root）を公開対象にします。

## 必要ファイル構成

```plaintext
fan/
├─ index.html
├─ main.js
├─ fan_model.js
├─ style.css
├─ libs/
│   ├─ three.module.js
│   ├─ OrbitControls.js
│   ├─ STLExporter.js
│   ├─ FontLoader.js
│   └─ TextGeometry.js
└─ fonts/
    └─ helvetiker_regular.typeface.json（必要なら）
```

## 注意

- three.js/examplesは公式リポジトリからESモジュール版をダウンロードしてください。
- フォントファイルはCDN参照でも動作しますが、CORSエラー回避のためローカル配置推奨です。
- Pythonサーバーは不要、GitHub Pagesで静的公開できます。

## 公開例

- [公開例](https://nakanishi-coder.github.io/fan/)

---
