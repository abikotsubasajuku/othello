// element の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.element = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "水素", meaning: "H", points: 1 },
    { word: "ヘリウム", meaning: "He", points: 1 },
    { word: "炭素", meaning: "C", points: 1 },
    { word: "窒素", meaning: "N", points: 1 },
    { word: "酸素", meaning: "O", points: 1 },
    { word: "ナトリウム", meaning: "Na", points: 1 },
    { word: "マグネシウム", meaning: "Mg", points: 1 },
    { word: "アルミニウム", meaning: "Al", points: 2 },
    { word: "ケイ素", meaning: "Si", points: 2 },
    { word: "リン", meaning: "P", points: 2 },
    { word: "硫黄", meaning: "S", points: 2 },
    { word: "塩素", meaning: "Cl", points: 2 },
    { word: "カリウム", meaning: "K", points: 2 },
    { word: "カルシウム", meaning: "Ca", points: 2 },
  ],

  // 中級
  normal: [
    { word: "鉄", meaning: "Fe", points: 3 },
    { word: "銅", meaning: "Cu", points: 3 },
    { word: "亜鉛", meaning: "Zn", points: 3 },
    { word: "銀", meaning: "Ag", points: 3 },
    { word: "金", meaning: "Au", points: 3 },
    { word: "白金", meaning: "Pt", points: 3 },
  ],

  // 上級
  hard: [
    { word: "水銀", meaning: "Hg", points: 4 },
    { word: "鉛", meaning: "Pb", points: 4 },
    { word: "チタン", meaning: "Ti", points: 4 },
    { word: "ニッケル", meaning: "Ni", points: 4 },
    { word: "コバルト", meaning: "Co", points: 4 },
    { word: "ヨウ素", meaning: "I", points: 4 },
    { word: "ウラン", meaning: "U", points: 5 },
    { word: "プルトニウム", meaning: "Pu", points: 5 },
    { word: "タングステン", meaning: "W", points: 5 },
    { word: "リチウム", meaning: "Li", points: 5 },
  ],

};
