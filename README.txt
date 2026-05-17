# 更新版

## 変更内容

- 「世界の首都」を「地理」に変更
- 「県庁所在地」ジャンルを削除
- 「地理」は `data/capital.js` を使います
- 各ジャンルに「ランダム」を追加
- 「元素記号」を「理科」に変更
- Gemini APIは使わず、dataフォルダ内のJSファイルから問題を読み込みます

## GitHubに置く構成

index.html
data/
  kanji.js
  english.js
  element.js
  capital.js
  history.js
  idiom.js
  math.js

prefecture.js は不要です。
