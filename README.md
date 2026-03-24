# Rep Timer - Training Companion

トレーニング用タイマー＋記録アプリ（PWA対応）

## GitHub Pagesへのデプロイ手順

### 1. GitHubリポジトリ作成
1. [github.com](https://github.com) にログイン
2. 右上の「+」→「New repository」
3. Repository name: `rep-timer`（好きな名前でOK）
4. **Public** を選択
5. 「Create repository」をクリック

### 2. ファイルをアップロード
1. 作成したリポジトリのページで「uploading an existing file」をクリック
2. 以下の3ファイルをドラッグ＆ドロップ：
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. 「Commit changes」をクリック

### 3. GitHub Pagesを有効化
1. リポジトリの「Settings」タブ
2. 左メニューの「Pages」
3. Source: 「Deploy from a branch」
4. Branch: 「main」/ 「/ (root)」を選択
5. 「Save」をクリック
6. 数分待つとURLが表示される：`https://ユーザー名.github.io/rep-timer/`

### 4. iPhoneのホーム画面に追加
1. iPhoneの **Safari** で上記URLを開く（Chromeではなく必ずSafari）
2. 画面下の **共有ボタン**（□↑）をタップ
3. 下にスクロールして **「ホーム画面に追加」** をタップ
4. 名前を確認して **「追加」** をタップ

これでホーム画面にアプリアイコンが追加され、フルスクリーンで動作します！

## 機能
- ⏱ Rep/Restタイマー（1秒ごとカウント音、残り3秒カウントダウン）
- 📋 トレーニングログ（個別/日別削除可）
- 🍽 食事ログ（朝食/昼食/夕食/間食/サプリ + カロリー）
- 📊 体重・体脂肪率の記録とグラフ
- 📝 日次レポートのコピー機能
- 📱 PWA対応（オフラインでも動作）
