// capital の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.capital = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "日本", meaning: "東京", points: 1 },
    { word: "アメリカ", meaning: "ワシントンD.C.", points: 1 },
    { word: "イギリス", meaning: "ロンドン", points: 1 },
    { word: "フランス", meaning: "パリ", points: 1 },
    { word: "ドイツ", meaning: "ベルリン", points: 1 },
    { word: "イタリア", meaning: "ローマ", points: 1 },
    { word: "中国", meaning: "北京", points: 1 },
    { word: "韓国", meaning: "ソウル", points: 1 },
    { word: "ロシア", meaning: "モスクワ", points: 2 },
    { word: "カナダ", meaning: "オタワ", points: 2 },
    { word: "オーストラリア", meaning: "キャンベラ", points: 2 },
    { word: "ブラジル", meaning: "ブラジリア", points: 2 },
    { word: "インド", meaning: "ニューデリー", points: 2 },
    { word: "エジプト", meaning: "カイロ", points: 2 },
  ],

  // 中級
  normal: [
    { word: "タイ", meaning: "バンコク", points: 3 },
    { word: "フィリピン", meaning: "マニラ", points: 3 },
    { word: "インドネシア", meaning: "ジャカルタ", points: 3 },
    { word: "ベトナム", meaning: "ハノイ", points: 3 },
    { word: "メキシコ", meaning: "メキシコシティ", points: 3 },
    { word: "アルゼンチン", meaning: "ブエノスアイレス", points: 3 },
  ],

  // 上級
  hard: [
    { word: "トルコ", meaning: "アンカラ", points: 4 },
    { word: "イラン", meaning: "テヘラン", points: 4 },
    { word: "サウジアラビア", meaning: "リヤド", points: 4 },
    { word: "南アフリカ", meaning: "プレトリア", points: 4 },
    { word: "ケニア", meaning: "ナイロビ", points: 4 },
    { word: "ナイジェリア", meaning: "アブジャ", points: 5 },
    { word: "ペルー", meaning: "リマ", points: 5 },
    { word: "チリ", meaning: "サンティアゴ", points: 5 },
    { word: "スイス", meaning: "ベルン", points: 5 },
    { word: "オランダ", meaning: "アムステルダム", points: 5 },
  ],

};
