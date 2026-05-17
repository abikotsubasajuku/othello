// math の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.math = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "7 + 5", meaning: "12", points: 1 },
    { word: "15 - 8", meaning: "7", points: 1 },
    { word: "4 × 6", meaning: "24", points: 1 },
    { word: "9 × 9", meaning: "81", points: 1 },
    { word: "36 ÷ 6", meaning: "6", points: 1 },
    { word: "45 ÷ 9", meaning: "5", points: 1 },
    { word: "12 + 19", meaning: "31", points: 2 },
    { word: "40 - 15", meaning: "25", points: 2 },
    { word: "12 × 5", meaning: "60", points: 2 },
    { word: "15 × 3", meaning: "45", points: 2 },
    { word: "80 ÷ 4", meaning: "20", points: 2 },
    { word: "64 ÷ 4", meaning: "16", points: 2 },
  ],

  // 中級
  normal: [
    { word: "35 + 47", meaning: "82", points: 3 },
    { word: "100 - 58", meaning: "42", points: 3 },
    { word: "18 × 4", meaning: "72", points: 3 },
    { word: "25 × 4", meaning: "100", points: 3 },
    { word: "120 ÷ 5", meaning: "24", points: 3 },
    { word: "144 ÷ 12", meaning: "12", points: 3 },
  ],

  // 上級
  hard: [
    { word: "15 × 12", meaning: "180", points: 4 },
    { word: "24 × 5", meaning: "120", points: 4 },
    { word: "360 ÷ 15", meaning: "24", points: 4 },
    { word: "256 ÷ 16", meaning: "16", points: 4 },
    { word: "99 + 123", meaning: "222", points: 4 },
    { word: "305 - 198", meaning: "107", points: 4 },
    { word: "23 × 11", meaning: "253", points: 5 },
    { word: "45 × 15", meaning: "675", points: 5 },
    { word: "512 ÷ 16", meaning: "32", points: 5 },
    { word: "1024 ÷ 32", meaning: "32", points: 5 },
    { word: "1/2 + 1/4", meaning: "3/4", points: 5 },
    { word: "1 - 1/3", meaning: "2/3", points: 5 },
  ],

};
