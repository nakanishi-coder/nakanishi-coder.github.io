# 応力計算検証手順

## 🧪 検証事例の実行方法

### 1. 単純引張検証事例

**実行手順:**
1. アプリケーションを開く
2. 「🧪 応力計算検証」セクションの「単純引張」ボタンをクリック
3. モデルが自動的に読み込まれる（2つのノード、1つの要素）
4. 「静解析実行」ボタンをクリック
5. 「応力表示」をチェックして結果を確認
6. ブラウザの開発者ツール（F12）でコンソールを開き、検証結果を確認

**期待される結果:**
- 理論応力: 1.000×10⁶ Pa (1.0 MPa)
- 理論変位: 1.000×10⁻⁵ m (0.01 mm)
- 許容誤差: 5%以内

### 2. 片持ち梁検証事例

**実行手順:**
1. 「片持ち梁」ボタンをクリック
2. 3mの片持ち梁モデルが読み込まれる
3. 解析実行
4. 結果確認

**期待される結果:**
- 理論最大応力: 2.810×10⁶ Pa (2.81 MPa)
- 理論先端変位: 2.100×10⁻² m (21 mm)

### 3. 3点曲げ検証事例

**実行手順:**
1. 「3点曲げ」ボタンをクリック
2. 2スパンの単純梁モデルが読み込まれる
3. 解析実行
4. 結果確認

**期待される結果:**
- 中央集中荷重による曲げ応力
- 中央たわみ

## 🔍 検証項目

### 計算精度の確認
- [ ] 応力値が理論値と5%以内で一致
- [ ] 変位値が理論値と5%以内で一致
- [ ] 要素ごとの応力分布が適切に表示される
- [ ] カラーマップが正しく機能する

### 表示機能の確認
- [ ] 応力値テーブルに正しい数値が表示される
- [ ] 3Dモデルが応力レベルに応じて色分けされる
- [ ] 応力範囲（最小・最大値）が正しく表示される

### デバッグ情報の確認
開発者ツールのコンソールで以下の情報を確認:
- [ ] FEAEngineでの応力計算ログ
- [ ] BeamElementでの詳細計算ログ
- [ ] Renderer3Dでの表示更新ログ
- [ ] 理論値と計算値の比較結果

## 🐛 トラブルシューティング

### 応力が0になる場合
1. 荷重が正しく設定されているか確認
2. 境界条件が適切に設定されているか確認
3. 材料特性（ヤング率）が正しく設定されているか確認
4. 要素の長さが0になっていないか確認

### 変位が異常に大きい/小さい場合
1. 単位系の統一を確認（m, N, Pa）
2. 断面積・断面二次モーメントの値を確認
3. 荷重の大きさを確認

### 表示されない場合
1. 「応力表示」がチェックされているか確認
2. 解析が正常に完了しているか確認
3. ブラウザの開発者ツールでエラーがないか確認

## 📊 理論値計算式

### 単純引張
- 応力: σ = P/A
- ひずみ: ε = σ/E
- 変位: δ = εL = PL/(EA)

### 片持ち梁（先端集中荷重）
- 最大曲げモーメント: M = PL
- 最大応力: σ = Mc/I (c: 中立軸からの距離)
- 先端変位: δ = PL³/(3EI)

### 3点曲げ（中央集中荷重）
- 最大曲げモーメント: M = PL/4
- 最大応力: σ = Mc/I
- 中央変位: δ = PL³/(48EI)

## 📈 精度向上のための改善点

1. **要素分割の細分化**: 長い要素を複数の小要素に分割
2. **高次要素の採用**: より精密な形状関数の使用
3. **非線形解析の導入**: 大変形・大回転の考慮
4. **せん断変形の考慮**: ティモシェンコ梁理論の完全実装
