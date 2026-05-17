// history の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.history = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "大化の改新", meaning: "645年", points: 1 },
    { word: "白村江の戦い", meaning: "663年", points: 1 },
    { word: "壬申の乱", meaning: "672年", points: 1 },
    { word: "平城京遷都", meaning: "710年", points: 1 },
    { word: "平安京遷都", meaning: "794年", points: 1 },
    { word: "鎌倉幕府成立", meaning: "1185年", points: 1 },
    { word: "鉄砲伝来", meaning: "1543年", points: 1 },
    { word: "キリスト教伝来", meaning: "1549年", points: 1 },
    { word: "関ヶ原の戦い", meaning: "1600年", points: 2 },
    { word: "江戸幕府成立", meaning: "1603年", points: 2 },
    { word: "大政奉還", meaning: "1867年", points: 2 },
    { word: "明治維新", meaning: "1868年", points: 2 },
    { word: "日清戦争", meaning: "1894年", points: 2 },
    { word: "日露戦争", meaning: "1904年", points: 2 },
  ],

  // 中級
  normal: [
    { word: "第一次世界大戦", meaning: "1914年", points: 3 },
    { word: "満州事変", meaning: "1931年", points: 3 },
    { word: "日中戦争", meaning: "1937年", points: 3 },
    { word: "太平洋戦争開戦", meaning: "1941年", points: 3 },
    { word: "ポツダム宣言受諾", meaning: "1945年", points: 3 },
  ],

  // 上級
  hard: [
    { word: "サンフランシスコ条約", meaning: "1951年", points: 4 },
    { word: "日ソ共同宣言", meaning: "1956年", points: 4 },
    { word: "日韓基本条約", meaning: "1965年", points: 4 },
    { word: "沖縄返還", meaning: "1972年", points: 4 },
    { word: "日中平和友好条約", meaning: "1978年", points: 4 },
    { word: "消費税導入", meaning: "1989年", points: 5 },
    { word: "湾岸戦争", meaning: "1991年", points: 5 },
    { word: "同時多発テロ", meaning: "2001年", points: 5 },
    { word: "東日本大震災", meaning: "2011年", points: 5 },
    { word: "新型コロナ流行", meaning: "2020年", points: 5 },
  ],

};
