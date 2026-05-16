// 問題データファイル
// word: 盤面に表示する問題
// meaning: 正解
// points: 点数（1〜5）
//
// 問題を増やしたい場合は、各ジャンルの配列に
// { word: "問題", meaning: "答え", points: 1 }
// の形で追加してください。

(function () {
const DEFAULT_KANJI_DATA = [
  { word: "過程", meaning: "かてい", points: 1 }, { word: "傾向", meaning: "けいこう", points: 1 },
  { word: "責任", meaning: "せきにん", points: 1 }, { word: "資源", meaning: "しげん", points: 1 },
  { word: "豊富", meaning: "ほうふ", points: 1 }, { word: "評価", meaning: "ひょうか", points: 1 },
  { word: "伝統", meaning: "でんとう", points: 1 }, { word: "摩擦", meaning: "まさつ", points: 2 },
  { word: "披露", meaning: "ひろう", points: 2 }, { word: "脅威", meaning: "きょうい", points: 2 },
  { word: "把握", meaning: "はあく", points: 2 }, { word: "妥協", meaning: "だきょう", points: 2 },
  { word: "貢献", meaning: "こうけん", points: 2 }, { word: "錯覚", meaning: "さっかく", points: 2 },
  { word: "顕著", meaning: "けんちょ", points: 3 }, { word: "普遍", meaning: "ふへん", points: 3 },
  { word: "俊敏", meaning: "しゅんびん", points: 3 }, { word: "匿名", meaning: "とくめい", points: 3 },
  { word: "逸話", meaning: "いつわ", points: 3 }, { word: "偏見", meaning: "へんけん", points: 3 },
  { word: "辛辣", meaning: "しんらつ", points: 4 }, { word: "語彙", meaning: "ごい", points: 4 },
  { word: "曖昧", meaning: "あいまい", points: 4 }, { word: "傲慢", meaning: "ごうまん", points: 4 },
  { word: "隠蔽", meaning: "いんぺい", points: 4 }, { word: "凄惨", meaning: "せいさん", points: 4 },
  { word: "忖度", meaning: "そんたく", points: 5 }, { word: "脆弱", meaning: "ぜいじゃく", points: 5 },
  { word: "蔓延", meaning: "まんえん", points: 5 }, { word: "喧噪", meaning: "けんそう", points: 5 },
  { word: "乖離", meaning: "かいり", points: 5 }, { word: "躊躇", meaning: "ちゅうちょ", points: 5 }
];

const DEFAULT_ENGLISH_DATA = [
  { word: "answer", meaning: "答える", points: 1 }, { word: "bring", meaning: "持ってくる", points: 1 },
  { word: "catch", meaning: "捕まえる", points: 1 }, { word: "draw", meaning: "描く", points: 1 },
  { word: "fall", meaning: "落ちる", points: 1 }, { word: "clear", meaning: "晴れた", points: 1 },
  { word: "remember", meaning: "思い出す", points: 2 }, { word: "borrow", meaning: "借りる", points: 2 },
  { word: "collect", meaning: "集める", points: 2 }, { word: "follow", meaning: "従う", points: 2 },
  { word: "invite", meaning: "招待する", points: 2 }, { word: "careful", meaning: "注意深い", points: 2 },
  { word: "create", meaning: "創造する", points: 3 }, { word: "discuss", meaning: "議論する", points: 3 },
  { word: "expect", meaning: "期待する", points: 3 }, { word: "guess", meaning: "推測する", points: 3 },
  { word: "dangerous", meaning: "危険な", points: 3 }, { word: "impossible", meaning: "不可能な", points: 3 },
  { word: "accept", meaning: "受け入れる", points: 4 }, { word: "compare", meaning: "比較する", points: 4 },
  { word: "destroy", meaning: "破壊する", points: 4 }, { word: "express", meaning: "表現する", points: 4 },
  { word: "expensive", meaning: "高価な", points: 4 }, { word: "familiar", meaning: "よく知られた", points: 4 },
  { word: "announce", meaning: "発表する", points: 5 }, { word: "complain", meaning: "不平を言う", points: 5 },
  { word: "graduate", meaning: "卒業する", points: 5 }, { word: "recognize", meaning: "認識する", points: 5 },
  { word: "complicated", meaning: "複雑な", points: 5 }, { word: "independent", meaning: "独立した", points: 5 }
];

const DEFAULT_ELEMENT_DATA = [
  { word: "水素", meaning: "H", points: 1 }, { word: "ヘリウム", meaning: "He", points: 1 },
  { word: "炭素", meaning: "C", points: 1 }, { word: "窒素", meaning: "N", points: 1 },
  { word: "酸素", meaning: "O", points: 1 }, { word: "ナトリウム", meaning: "Na", points: 1 },
  { word: "マグネシウム", meaning: "Mg", points: 1 }, { word: "アルミニウム", meaning: "Al", points: 2 },
  { word: "ケイ素", meaning: "Si", points: 2 }, { word: "リン", meaning: "P", points: 2 },
  { word: "硫黄", meaning: "S", points: 2 }, { word: "塩素", meaning: "Cl", points: 2 },
  { word: "カリウム", meaning: "K", points: 2 }, { word: "カルシウム", meaning: "Ca", points: 2 },
  { word: "鉄", meaning: "Fe", points: 3 }, { word: "銅", meaning: "Cu", points: 3 },
  { word: "亜鉛", meaning: "Zn", points: 3 }, { word: "銀", meaning: "Ag", points: 3 },
  { word: "金", meaning: "Au", points: 3 }, { word: "白金", meaning: "Pt", points: 3 },
  { word: "水銀", meaning: "Hg", points: 4 }, { word: "鉛", meaning: "Pb", points: 4 },
  { word: "チタン", meaning: "Ti", points: 4 }, { word: "ニッケル", meaning: "Ni", points: 4 },
  { word: "コバルト", meaning: "Co", points: 4 }, { word: "ヨウ素", meaning: "I", points: 4 },
  { word: "ウラン", meaning: "U", points: 5 }, { word: "プルトニウム", meaning: "Pu", points: 5 },
  { word: "タングステン", meaning: "W", points: 5 }, { word: "リチウム", meaning: "Li", points: 5 }
];

const DEFAULT_CAPITAL_DATA = [
  { word: "日本", meaning: "東京", points: 1 }, { word: "アメリカ", meaning: "ワシントンD.C.", points: 1 },
  { word: "イギリス", meaning: "ロンドン", points: 1 }, { word: "フランス", meaning: "パリ", points: 1 },
  { word: "ドイツ", meaning: "ベルリン", points: 1 }, { word: "イタリア", meaning: "ローマ", points: 1 },
  { word: "中国", meaning: "北京", points: 1 }, { word: "韓国", meaning: "ソウル", points: 1 },
  { word: "ロシア", meaning: "モスクワ", points: 2 }, { word: "カナダ", meaning: "オタワ", points: 2 },
  { word: "オーストラリア", meaning: "キャンベラ", points: 2 }, { word: "ブラジル", meaning: "ブラジリア", points: 2 },
  { word: "インド", meaning: "ニューデリー", points: 2 }, { word: "エジプト", meaning: "カイロ", points: 2 },
  { word: "タイ", meaning: "バンコク", points: 3 }, { word: "フィリピン", meaning: "マニラ", points: 3 },
  { word: "インドネシア", meaning: "ジャカルタ", points: 3 }, { word: "ベトナム", meaning: "ハノイ", points: 3 },
  { word: "メキシコ", meaning: "メキシコシティ", points: 3 }, { word: "アルゼンチン", meaning: "ブエノスアイレス", points: 3 },
  { word: "トルコ", meaning: "アンカラ", points: 4 }, { word: "イラン", meaning: "テヘラン", points: 4 },
  { word: "サウジアラビア", meaning: "リヤド", points: 4 }, { word: "南アフリカ", meaning: "プレトリア", points: 4 },
  { word: "ケニア", meaning: "ナイロビ", points: 4 }, { word: "ナイジェリア", meaning: "アブジャ", points: 5 },
  { word: "ペルー", meaning: "リマ", points: 5 }, { word: "チリ", meaning: "サンティアゴ", points: 5 },
  { word: "スイス", meaning: "ベルン", points: 5 }, { word: "オランダ", meaning: "アムステルダム", points: 5 }
];

const DEFAULT_HISTORY_DATA = [
  { word: "大化の改新", meaning: "645年", points: 1 }, { word: "白村江の戦い", meaning: "663年", points: 1 },
  { word: "壬申の乱", meaning: "672年", points: 1 }, { word: "平城京遷都", meaning: "710年", points: 1 },
  { word: "平安京遷都", meaning: "794年", points: 1 }, { word: "鎌倉幕府成立", meaning: "1185年", points: 1 },
  { word: "鉄砲伝来", meaning: "1543年", points: 1 }, { word: "キリスト教伝来", meaning: "1549年", points: 1 },
  { word: "関ヶ原の戦い", meaning: "1600年", points: 2 }, { word: "江戸幕府成立", meaning: "1603年", points: 2 },
  { word: "大政奉還", meaning: "1867年", points: 2 }, { word: "明治維新", meaning: "1868年", points: 2 },
  { word: "日清戦争", meaning: "1894年", points: 2 }, { word: "日露戦争", meaning: "1904年", points: 2 },
  { word: "第一次世界大戦", meaning: "1914年", points: 3 }, { word: "満州事変", meaning: "1931年", points: 3 },
  { word: "日中戦争", meaning: "1937年", points: 3 }, { word: "太平洋戦争開戦", meaning: "1941年", points: 3 },
  { word: "ポツダム宣言受諾", meaning: "1945年", points: 3 }, { word: "サンフランシスコ条約", meaning: "1951年", points: 4 },
  { word: "日ソ共同宣言", meaning: "1956年", points: 4 }, { word: "日韓基本条約", meaning: "1965年", points: 4 },
  { word: "沖縄返還", meaning: "1972年", points: 4 }, { word: "日中平和友好条約", meaning: "1978年", points: 4 },
  { word: "消費税導入", meaning: "1989年", points: 5 }, { word: "湾岸戦争", meaning: "1991年", points: 5 },
  { word: "同時多発テロ", meaning: "2001年", points: 5 }, { word: "東日本大震災", meaning: "2011年", points: 5 },
  { word: "新型コロナ流行", meaning: "2020年", points: 5 }
];

const DEFAULT_IDIOM_DATA = [
  { word: "一期一会", meaning: "一生に一度の出会い", points: 1 }, { word: "十人十色", meaning: "人それぞれ好みや性質が違うこと", points: 1 },
  { word: "以心伝心", meaning: "言葉に出さなくても心が通じ合うこと", points: 1 }, { word: "一石二鳥", meaning: "一つの行為で二つの利益を得ること", points: 1 },
  { word: "温故知新", meaning: "昔の事をたずねて新しい知識を得ること", points: 1 }, { word: "花鳥風月", meaning: "自然の美しい景色のこと", points: 1 },
  { word: "自画自賛", meaning: "自分で自分を褒めること", points: 2 }, { word: "臨機応変", meaning: "状況に合わせて適切な対応をすること", points: 2 },
  { word: "一喜一憂", meaning: "状況が変わるたびに喜んだり心配したりすること", points: 2 }, { word: "四面楚歌", meaning: "周りが敵だらけで孤立していること", points: 2 },
  { word: "試行錯誤", meaning: "色々な方法を試して失敗を重ねながら解決に近づくこと", points: 2 }, { word: "本末転倒", meaning: "根本的なことと些細なことを取り違えること", points: 3 },
  { word: "言語道断", meaning: "言葉で言い表せないほどとんでもないこと", points: 3 }, { word: "自業自得", meaning: "自分の悪い行いの報いを自分で受けること", points: 3 },
  { word: "前代未聞", meaning: "今まで聞いたことがないような大変なこと", points: 3 }, { word: "有名無実", meaning: "名前だけで実質が伴っていないこと", points: 3 },
  { word: "画竜点睛", meaning: "物事を完成させるための最後の大事な仕上げ", points: 4 }, { word: "捲土重来", meaning: "一度敗れた者が勢いを盛り返してくること", points: 4 },
  { word: "呉越同舟", meaning: "仲の悪い者同士が同じ場所にいること", points: 4 }, { word: "切磋琢磨", meaning: "仲間同士で励まし合いながら向上すること", points: 4 },
  { word: "傍若無人", meaning: "周りを気にせず勝手気ままに振る舞うこと", points: 4 }, { word: "天衣無縫", meaning: "自然でわざとらしくなく、美しいこと", points: 5 },
  { word: "荒唐無稽", meaning: "根拠がなく、でたらめなこと", points: 5 }, { word: "乾坤一擲", meaning: "運命をかけて大きな勝負に出ること", points: 5 },
  { word: "牽強附会", meaning: "道理に合わないことを無理にこじつけること", points: 5 }, { word: "虚心坦懐", meaning: "先入観を持たず、素直な心でいること", points: 5 }
];

const DEFAULT_MATH_DATA = [
  { word: "7 + 5", meaning: "12", points: 1 }, { word: "15 - 8", meaning: "7", points: 1 },
  { word: "4 × 6", meaning: "24", points: 1 }, { word: "9 × 9", meaning: "81", points: 1 },
  { word: "36 ÷ 6", meaning: "6", points: 1 }, { word: "45 ÷ 9", meaning: "5", points: 1 },
  { word: "12 + 19", meaning: "31", points: 2 }, { word: "40 - 15", meaning: "25", points: 2 },
  { word: "12 × 5", meaning: "60", points: 2 }, { word: "15 × 3", meaning: "45", points: 2 },
  { word: "80 ÷ 4", meaning: "20", points: 2 }, { word: "64 ÷ 4", meaning: "16", points: 2 },
  { word: "35 + 47", meaning: "82", points: 3 }, { word: "100 - 58", meaning: "42", points: 3 },
  { word: "18 × 4", meaning: "72", points: 3 }, { word: "25 × 4", meaning: "100", points: 3 },
  { word: "120 ÷ 5", meaning: "24", points: 3 }, { word: "144 ÷ 12", meaning: "12", points: 3 },
  { word: "15 × 12", meaning: "180", points: 4 }, { word: "24 × 5", meaning: "120", points: 4 },
  { word: "360 ÷ 15", meaning: "24", points: 4 }, { word: "256 ÷ 16", meaning: "16", points: 4 },
  { word: "99 + 123", meaning: "222", points: 4 }, { word: "305 - 198", meaning: "107", points: 4 },
  { word: "23 × 11", meaning: "253", points: 5 }, { word: "45 × 15", meaning: "675", points: 5 },
  { word: "512 ÷ 16", meaning: "32", points: 5 }, { word: "1024 ÷ 32", meaning: "32", points: 5 },
  { word: "1/2 + 1/4", meaning: "3/4", points: 5 }, { word: "1 - 1/3", meaning: "2/3", points: 5 }
];

const DEFAULT_PREFECTURE_DATA = [
  { word: "北海道", meaning: "札幌市", points: 1 }, { word: "青森県", meaning: "青森市", points: 1 },
  { word: "秋田県", meaning: "秋田市", points: 1 }, { word: "山形県", meaning: "山形市", points: 1 },
  { word: "福島県", meaning: "福島市", points: 1 }, { word: "千葉県", meaning: "千葉市", points: 1 },
  { word: "新潟県", meaning: "新潟市", points: 1 }, { word: "富山県", meaning: "富山市", points: 1 },
  { word: "福井県", meaning: "福井市", points: 1 }, { word: "長野県", meaning: "長野市", points: 1 },
  { word: "静岡県", meaning: "静岡市", points: 1 }, { word: "岐阜県", meaning: "岐阜市", points: 1 },
  { word: "京都府", meaning: "京都市", points: 1 }, { word: "大阪府", meaning: "大阪市", points: 1 },
  { word: "奈良県", meaning: "奈良市", points: 1 }, { word: "和歌山県", meaning: "和歌山市", points: 1 },
  { word: "鳥取県", meaning: "鳥取市", points: 1 }, { word: "広島県", meaning: "広島市", points: 1 },
  { word: "岩手県", meaning: "盛岡市", points: 3 }, { word: "宮城県", meaning: "仙台市", points: 3 },
  { word: "茨城県", meaning: "水戸市", points: 3 }, { word: "栃木県", meaning: "宇都宮市", points: 3 },
  { word: "群馬県", meaning: "前橋市", points: 3 }, { word: "埼玉県", meaning: "さいたま市", points: 2 },
  { word: "神奈川県", meaning: "横浜市", points: 3 }, { word: "石川県", meaning: "金沢市", points: 4 },
  { word: "山梨県", meaning: "甲府市", points: 4 }, { word: "愛知県", meaning: "名古屋市", points: 3 },
  { word: "三重県", meaning: "津市", points: 5 }, { word: "滋賀県", meaning: "大津市", points: 4 },
  { word: "兵庫県", meaning: "神戸市", points: 3 }, { word: "島根県", meaning: "松江市", points: 5 },
  { word: "岡山県", meaning: "岡山市", points: 1 }, { word: "山口県", meaning: "山口市", points: 1 },
  { word: "徳島県", meaning: "徳島市", points: 1 }, { word: "香川県", meaning: "高松市", points: 4 },
  { word: "愛媛県", meaning: "松山市", points: 4 }, { word: "高知県", meaning: "高知市", points: 1 },
  { word: "福岡県", meaning: "福岡市", points: 1 }, { word: "佐賀県", meaning: "佐賀市", points: 1 },
  { word: "長崎県", meaning: "長崎市", points: 1 }, { word: "熊本県", meaning: "熊本市", points: 1 },
  { word: "大分県", meaning: "大分市", points: 1 }, { word: "宮崎県", meaning: "宮崎市", points: 1 },
  { word: "鹿児島県", meaning: "鹿児島市", points: 1 }, { word: "沖縄県", meaning: "那覇市", points: 3 }
];

const DEFAULT_FREE_DATA = [
  { word: "富士山", meaning: "日本一高い山", points: 1 }, { word: "太平洋", meaning: "世界一広い海", points: 1 },
  { word: "ナイル川", meaning: "世界一長い川", points: 2 }, { word: "バチカン", meaning: "世界一面積が小さい国", points: 3 },
  { word: "ロシア", meaning: "世界一面積が大きい国", points: 1 }, { word: "エベレスト", meaning: "世界一高い山", points: 2 },
  { word: "琵琶湖", meaning: "日本一大きい湖", points: 1 }, { word: "信濃川", meaning: "日本一長い川", points: 2 },
  { word: "青函トンネル", meaning: "日本一長い海底トンネル", points: 4 }, { word: "東京スカイツリー", meaning: "日本一高い建造物", points: 1 },
  { word: "サハラ砂漠", meaning: "世界一広い砂漠", points: 2 }, { word: "カスピ海", meaning: "世界一大きい湖", points: 3 },
  { word: "バイカル湖", meaning: "世界一深い湖", points: 4 }, { word: "アマゾン川", meaning: "世界最大の流域面積の川", points: 2 },
  { word: "ユーラシア", meaning: "地球で一番大きな大陸", points: 3 }
];

const FALLBACK_DATA = {
  kanji: DEFAULT_KANJI_DATA,
  english: DEFAULT_ENGLISH_DATA,
  element: DEFAULT_ELEMENT_DATA,
  capital: DEFAULT_CAPITAL_DATA,
  history: DEFAULT_HISTORY_DATA,
  idiom: DEFAULT_IDIOM_DATA,
  math: DEFAULT_MATH_DATA,
  prefecture: DEFAULT_PREFECTURE_DATA,
  free: DEFAULT_FREE_DATA
};


  window.OTHELLO_QUESTION_DATA = FALLBACK_DATA;
})();
