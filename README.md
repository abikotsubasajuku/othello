# 学習リバーシ（難易度別データ分割版）

GitHub Pages で公開する場合は、リポジトリ直下が次の形になるように配置してください。

```text
index.html
data/
  kanji.js
  english.js
  element.js
  capital.js
  history.js
  idiom.js
  math.js
  prefecture.js
```

## 問題の追加方法

各ジャンルのJSファイル内で、`easy`（初級）、`normal`（中級）、`hard`（上級）に分けて追加します。

例: `data/english.js`

```js
window.OTHELLO_QUESTION_DATA.english = {
  easy: [
    { word: "apple", meaning: "りんご", points: 1 },
  ],
  normal: [
    { word: "important", meaning: "重要な", points: 3 },
  ],
  hard: [
    { word: "recognize", meaning: "認識する", points: 5 },
  ],
};
```

`points` は 1〜5 で指定してください。
