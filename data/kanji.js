// kanji の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.kanji = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "過程", meaning: "かてい", points: 1 },
    { word: "傾向", meaning: "けいこう", points: 1 },
    { word: "責任", meaning: "せきにん", points: 1 },
    { word: "資源", meaning: "しげん", points: 1 },
    { word: "豊富", meaning: "ほうふ", points: 1 },
    { word: "評価", meaning: "ひょうか", points: 1 },
    { word: "伝統", meaning: "でんとう", points: 1 },
    { word: "摩擦", meaning: "まさつ", points: 2 },
    { word: "披露", meaning: "ひろう", points: 2 },
    { word: "脅威", meaning: "きょうい", points: 2 },
    { word: "把握", meaning: "はあく", points: 2 },
    { word: "妥協", meaning: "だきょう", points: 2 },
    { word: "貢献", meaning: "こうけん", points: 2 },
    { word: "錯覚", meaning: "さっかく", points: 2 },
  ],

  // 中級
  normal: [
    { word: "顕著", meaning: "けんちょ", points: 3 },
    { word: "普遍", meaning: "ふへん", points: 3 },
    { word: "俊敏", meaning: "しゅんびん", points: 3 },
    { word: "匿名", meaning: "とくめい", points: 3 },
    { word: "逸話", meaning: "いつわ", points: 3 },
    { word: "偏見", meaning: "へんけん", points: 3 },
  ],

  // 上級
  hard: [
    { word: "辛辣", meaning: "しんらつ", points: 4 },
    { word: "語彙", meaning: "ごい", points: 4 },
    { word: "曖昧", meaning: "あいまい", points: 4 },
    { word: "傲慢", meaning: "ごうまん", points: 4 },
    { word: "隠蔽", meaning: "いんぺい", points: 4 },
    { word: "凄惨", meaning: "せいさん", points: 4 },
    { word: "忖度", meaning: "そんたく", points: 5 },
    { word: "脆弱", meaning: "ぜいじゃく", points: 5 },
    { word: "蔓延", meaning: "まんえん", points: 5 },
    { word: "喧噪", meaning: "けんそう", points: 5 },
    { word: "乖離", meaning: "かいり", points: 5 },
    { word: "躊躇", meaning: "ちゅうちょ", points: 5 },
  ],

};
