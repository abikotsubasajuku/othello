// english の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.english = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "answer", meaning: "答える", points: 1 },
    { word: "bring", meaning: "持ってくる", points: 1 },
    { word: "catch", meaning: "捕まえる", points: 1 },
    { word: "draw", meaning: "描く", points: 1 },
    { word: "fall", meaning: "落ちる", points: 1 },
    { word: "clear", meaning: "晴れた", points: 1 },
    { word: "remember", meaning: "思い出す", points: 2 },
    { word: "borrow", meaning: "借りる", points: 2 },
    { word: "collect", meaning: "集める", points: 2 },
    { word: "follow", meaning: "従う", points: 2 },
    { word: "invite", meaning: "招待する", points: 2 },
    { word: "careful", meaning: "注意深い", points: 2 },
  ],

  // 中級
  normal: [
    { word: "create", meaning: "創造する", points: 3 },
    { word: "discuss", meaning: "議論する", points: 3 },
    { word: "expect", meaning: "期待する", points: 3 },
    { word: "guess", meaning: "推測する", points: 3 },
    { word: "dangerous", meaning: "危険な", points: 3 },
    { word: "impossible", meaning: "不可能な", points: 3 },
  ],

  // 上級
  hard: [
    { word: "accept", meaning: "受け入れる", points: 4 },
    { word: "compare", meaning: "比較する", points: 4 },
    { word: "destroy", meaning: "破壊する", points: 4 },
    { word: "express", meaning: "表現する", points: 4 },
    { word: "expensive", meaning: "高価な", points: 4 },
    { word: "familiar", meaning: "よく知られた", points: 4 },
    { word: "announce", meaning: "発表する", points: 5 },
    { word: "complain", meaning: "不平を言う", points: 5 },
    { word: "graduate", meaning: "卒業する", points: 5 },
    { word: "recognize", meaning: "認識する", points: 5 },
    { word: "complicated", meaning: "複雑な", points: 5 },
    { word: "independent", meaning: "独立した", points: 5 },
  ],

};
