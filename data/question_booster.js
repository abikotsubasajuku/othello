// question_booster.js
// クイズオセロ用：各ジャンルの選択肢ズレ防止・問題数補強データ
(function(){
  window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
  const BOOSTER = {
  "kanji": {
    "easy": [
      {
        "word": "山の読み",
        "meaning": "やま",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "川の読み",
        "meaning": "かわ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "空の読み",
        "meaning": "そら",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "海の読み",
        "meaning": "うみ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "花の読み",
        "meaning": "はな",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "音の読み",
        "meaning": "おと",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "道の読み",
        "meaning": "みち",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "力の読み",
        "meaning": "ちから",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "心の読み",
        "meaning": "こころ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "体の読み",
        "meaning": "からだ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "読むの読み",
        "meaning": "よむ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "書くの読み",
        "meaning": "かく",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "聞くの読み",
        "meaning": "きく",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "話すの読み",
        "meaning": "はなす",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "考えるの読み",
        "meaning": "かんがえる",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "学ぶの読み",
        "meaning": "まなぶ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "進むの読み",
        "meaning": "すすむ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "選ぶの読み",
        "meaning": "えらぶ",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "努力の読み",
        "meaning": "どりょく",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "成功の読み",
        "meaning": "せいこう",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "失敗の読み",
        "meaning": "しっぱい",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "成長の読み",
        "meaning": "せいちょう",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "挑戦の読み",
        "meaning": "ちょうせん",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "経験の読み",
        "meaning": "けいけん",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "確認の読み",
        "meaning": "かくにん",
        "points": 2,
        "group": "kanji_reading",
        "answerType": "kana"
      }
    ],
    "normal": [
      {
        "word": "漢字「山」の読み",
        "meaning": "やま",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「川」の読み",
        "meaning": "かわ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「空」の読み",
        "meaning": "そら",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「海」の読み",
        "meaning": "うみ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「花」の読み",
        "meaning": "はな",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「音」の読み",
        "meaning": "おと",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「道」の読み",
        "meaning": "みち",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「力」の読み",
        "meaning": "ちから",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「心」の読み",
        "meaning": "こころ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「体」の読み",
        "meaning": "からだ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「読む」の読み",
        "meaning": "よむ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「書く」の読み",
        "meaning": "かく",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「聞く」の読み",
        "meaning": "きく",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「話す」の読み",
        "meaning": "はなす",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「考える」の読み",
        "meaning": "かんがえる",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「学ぶ」の読み",
        "meaning": "まなぶ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「進む」の読み",
        "meaning": "すすむ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「選ぶ」の読み",
        "meaning": "えらぶ",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「努力」の読み",
        "meaning": "どりょく",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「成功」の読み",
        "meaning": "せいこう",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「失敗」の読み",
        "meaning": "しっぱい",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「成長」の読み",
        "meaning": "せいちょう",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「挑戦」の読み",
        "meaning": "ちょうせん",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「経験」の読み",
        "meaning": "けいけん",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      },
      {
        "word": "漢字「確認」の読み",
        "meaning": "かくにん",
        "points": 3,
        "group": "kanji_reading",
        "answerType": "kana"
      }
    ],
    "hard": []
  },
  "english": {
    "easy": [
      {
        "word": "apple",
        "meaning": "りんご",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "orange",
        "meaning": "オレンジ",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "banana",
        "meaning": "バナナ",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "school",
        "meaning": "学校",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "teacher",
        "meaning": "先生",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "student",
        "meaning": "生徒",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "friend",
        "meaning": "友達",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "family",
        "meaning": "家族",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "water",
        "meaning": "水",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "music",
        "meaning": "音楽",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "history",
        "meaning": "歴史",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "science",
        "meaning": "理科",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "math",
        "meaning": "数学",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "book",
        "meaning": "本",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "library",
        "meaning": "図書館",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "question",
        "meaning": "質問",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "answer",
        "meaning": "答え",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "important",
        "meaning": "重要な",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "different",
        "meaning": "異なる",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "difficult",
        "meaning": "難しい",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "remember",
        "meaning": "覚える",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "practice",
        "meaning": "練習する",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "improve",
        "meaning": "上達する",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "because",
        "meaning": "なぜなら",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "however",
        "meaning": "しかし",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "therefore",
        "meaning": "したがって",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "for example",
        "meaning": "例えば",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "in front of",
        "meaning": "〜の前に",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "be good at",
        "meaning": "〜が得意である",
        "points": 2,
        "group": "english_word",
        "answerType": "text"
      }
    ],
    "normal": [
      {
        "word": "apple の意味",
        "meaning": "りんご",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "orange の意味",
        "meaning": "オレンジ",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "banana の意味",
        "meaning": "バナナ",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "school の意味",
        "meaning": "学校",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "teacher の意味",
        "meaning": "先生",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "student の意味",
        "meaning": "生徒",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "friend の意味",
        "meaning": "友達",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "family の意味",
        "meaning": "家族",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "water の意味",
        "meaning": "水",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "music の意味",
        "meaning": "音楽",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "history の意味",
        "meaning": "歴史",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "science の意味",
        "meaning": "理科",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "math の意味",
        "meaning": "数学",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "book の意味",
        "meaning": "本",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "library の意味",
        "meaning": "図書館",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "question の意味",
        "meaning": "質問",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "answer の意味",
        "meaning": "答え",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "important の意味",
        "meaning": "重要な",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "different の意味",
        "meaning": "異なる",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "difficult の意味",
        "meaning": "難しい",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "remember の意味",
        "meaning": "覚える",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "practice の意味",
        "meaning": "練習する",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "improve の意味",
        "meaning": "上達する",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "because の意味",
        "meaning": "なぜなら",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "however の意味",
        "meaning": "しかし",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "therefore の意味",
        "meaning": "したがって",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "for example の意味",
        "meaning": "例えば",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "in front of の意味",
        "meaning": "〜の前に",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      },
      {
        "word": "be good at の意味",
        "meaning": "〜が得意である",
        "points": 3,
        "group": "english_word",
        "answerType": "text"
      }
    ],
    "hard": []
  },
  "element": {
    "easy": [
      {
        "word": "水素の元素記号",
        "meaning": "H",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ヘリウムの元素記号",
        "meaning": "He",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "リチウムの元素記号",
        "meaning": "Li",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ベリリウムの元素記号",
        "meaning": "Be",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ホウ素の元素記号",
        "meaning": "B",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "炭素の元素記号",
        "meaning": "C",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "窒素の元素記号",
        "meaning": "N",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "酸素の元素記号",
        "meaning": "O",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "フッ素の元素記号",
        "meaning": "F",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ネオンの元素記号",
        "meaning": "Ne",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ナトリウムの元素記号",
        "meaning": "Na",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "マグネシウムの元素記号",
        "meaning": "Mg",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "アルミニウムの元素記号",
        "meaning": "Al",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ケイ素の元素記号",
        "meaning": "Si",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "リンの元素記号",
        "meaning": "P",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "硫黄の元素記号",
        "meaning": "S",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "塩素の元素記号",
        "meaning": "Cl",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "アルゴンの元素記号",
        "meaning": "Ar",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "カリウムの元素記号",
        "meaning": "K",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "カルシウムの元素記号",
        "meaning": "Ca",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "鉄の元素記号",
        "meaning": "Fe",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "銅の元素記号",
        "meaning": "Cu",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "亜鉛の元素記号",
        "meaning": "Zn",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "銀の元素記号",
        "meaning": "Ag",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "スズの元素記号",
        "meaning": "Sn",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "ヨウ素の元素記号",
        "meaning": "I",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "金の元素記号",
        "meaning": "Au",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "水銀の元素記号",
        "meaning": "Hg",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      },
      {
        "word": "鉛の元素記号",
        "meaning": "Pb",
        "points": 2,
        "group": "science_element_symbol",
        "answerType": "element_symbol"
      }
    ],
    "normal": [
      {
        "word": "血液を固める成分",
        "meaning": "血小板",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "酸素を運ぶ血液成分",
        "meaning": "赤血球",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "病原体から体を守る血液成分",
        "meaning": "白血球",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液の液体成分",
        "meaning": "血しょう",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "赤血球に含まれる赤い色素",
        "meaning": "ヘモグロビン",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血しょうの大部分を占めるもの",
        "meaning": "水",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液が固まるはたらき",
        "meaning": "凝固",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液が全身をめぐる道すじ",
        "meaning": "血液循環",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "心臓から出る血管",
        "meaning": "動脈",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "心臓へ戻る血管",
        "meaning": "静脈",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "毛細血管で行われること",
        "meaning": "物質交換",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "肺で血液に取り込まれる気体",
        "meaning": "酸素",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液から肺へ出される気体",
        "meaning": "二酸化炭素",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "赤血球が作られる場所",
        "meaning": "骨髄",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液を全身へ送り出す器官",
        "meaning": "心臓",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "血液中で栄養分を運ぶ成分",
        "meaning": "血しょう",
        "points": 3,
        "group": "science_blood",
        "answerType": "blood_term"
      },
      {
        "word": "等粒状組織をもつ岩石",
        "meaning": "深成岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "斑状組織をもつ岩石",
        "meaning": "火山岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "マグマが地下深くでゆっくり冷えてできる岩石",
        "meaning": "深成岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "マグマが地表付近で急に冷えてできる岩石",
        "meaning": "火山岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち白っぽく大きな結晶がある岩石",
        "meaning": "花こう岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち灰色で斑状組織の岩石",
        "meaning": "安山岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち黒っぽい火山岩",
        "meaning": "玄武岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火山灰が固まった岩石",
        "meaning": "凝灰岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "サンゴや貝殻が固まってできやすい岩石",
        "meaning": "石灰岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "泥が固まった堆積岩",
        "meaning": "泥岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "砂が固まった堆積岩",
        "meaning": "砂岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "れきが固まった堆積岩",
        "meaning": "れき岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "生物の死がいなどが地層中に残ったもの",
        "meaning": "化石",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩を大きく2つに分けると火山岩と何か",
        "meaning": "深成岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "深成岩の代表例",
        "meaning": "花こう岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火山岩の代表例",
        "meaning": "安山岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "堆積岩の代表例",
        "meaning": "砂岩",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "石灰岩にうすい塩酸をかけると出る気体",
        "meaning": "二酸化炭素",
        "points": 3,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "Hで表される元素名",
        "meaning": "水素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Heで表される元素名",
        "meaning": "ヘリウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Liで表される元素名",
        "meaning": "リチウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Beで表される元素名",
        "meaning": "ベリリウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Bで表される元素名",
        "meaning": "ホウ素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Cで表される元素名",
        "meaning": "炭素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Nで表される元素名",
        "meaning": "窒素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Oで表される元素名",
        "meaning": "酸素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Fで表される元素名",
        "meaning": "フッ素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Neで表される元素名",
        "meaning": "ネオン",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Naで表される元素名",
        "meaning": "ナトリウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Mgで表される元素名",
        "meaning": "マグネシウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Alで表される元素名",
        "meaning": "アルミニウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Siで表される元素名",
        "meaning": "ケイ素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Pで表される元素名",
        "meaning": "リン",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Sで表される元素名",
        "meaning": "硫黄",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Clで表される元素名",
        "meaning": "塩素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Arで表される元素名",
        "meaning": "アルゴン",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Kで表される元素名",
        "meaning": "カリウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Caで表される元素名",
        "meaning": "カルシウム",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Feで表される元素名",
        "meaning": "鉄",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Cuで表される元素名",
        "meaning": "銅",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Znで表される元素名",
        "meaning": "亜鉛",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Agで表される元素名",
        "meaning": "銀",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Snで表される元素名",
        "meaning": "スズ",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Iで表される元素名",
        "meaning": "ヨウ素",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Auで表される元素名",
        "meaning": "金",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Hgで表される元素名",
        "meaning": "水銀",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "Pbで表される元素名",
        "meaning": "鉛",
        "points": 3,
        "group": "science_element_symbol",
        "answerType": "text"
      },
      {
        "word": "水の化学式",
        "meaning": "H2O",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "二酸化炭素の化学式",
        "meaning": "CO2",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "酸素の化学式",
        "meaning": "O2",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "水素の化学式",
        "meaning": "H2",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "窒素の化学式",
        "meaning": "N2",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "アンモニアの化学式",
        "meaning": "NH3",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "メタンの化学式",
        "meaning": "CH4",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "塩化ナトリウムの化学式",
        "meaning": "NaCl",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "塩酸の主成分の化学式",
        "meaning": "HCl",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "水酸化ナトリウムの化学式",
        "meaning": "NaOH",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "硫酸の化学式",
        "meaning": "H2SO4",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "硝酸の化学式",
        "meaning": "HNO3",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "酢酸の化学式",
        "meaning": "CH3COOH",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "エタノールの化学式",
        "meaning": "C2H5OH",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "ブドウ糖の化学式",
        "meaning": "C6H12O6",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "炭酸カルシウムの化学式",
        "meaning": "CaCO3",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "酸化銅の化学式",
        "meaning": "CuO",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "酸化銀の化学式",
        "meaning": "Ag2O",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "酸化鉄の化学式",
        "meaning": "Fe2O3",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "水酸化カルシウムの化学式",
        "meaning": "Ca(OH)2",
        "points": 3,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "速さの単位",
        "meaning": "m/s",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "電流の単位",
        "meaning": "A",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "電圧の単位",
        "meaning": "V",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "抵抗の単位",
        "meaning": "Ω",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "電力の単位",
        "meaning": "W",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "仕事の単位",
        "meaning": "J",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "圧力の単位",
        "meaning": "Pa",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "周波数の単位",
        "meaning": "Hz",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "力の単位",
        "meaning": "N",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "密度の単位",
        "meaning": "g/cm3",
        "points": 3,
        "group": "science_physics",
        "answerType": "number_unit"
      },
      {
        "word": "速さの公式",
        "meaning": "距離÷時間",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "密度の公式",
        "meaning": "質量÷体積",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "電圧を求める式",
        "meaning": "電流×抵抗",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "電流を求める式",
        "meaning": "電圧÷抵抗",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "電力を求める式",
        "meaning": "電圧×電流",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "仕事を求める式",
        "meaning": "力×距離",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "圧力を求める式",
        "meaning": "力÷面積",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "周波数を求める式",
        "meaning": "振動数÷時間",
        "points": 3,
        "group": "science_physics",
        "answerType": "formula_or_math"
      },
      {
        "word": "震源の真上の地表の地点",
        "meaning": "震央",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "地震そのものの規模",
        "meaning": "マグニチュード",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "各地点での揺れの強さ",
        "meaning": "震度",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "初期微動を起こす波",
        "meaning": "P波",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "主要動を起こす波",
        "meaning": "S波",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "P波とS波の到着時刻の差",
        "meaning": "初期微動継続時間",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "天気図で気圧の等しい点を結んだ線",
        "meaning": "等圧線",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "暖かい空気と冷たい空気の境目",
        "meaning": "前線",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "低気圧で中心に向かって吹く風の向き",
        "meaning": "反時計回り",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "日本の天気を西から東へ動かす風",
        "meaning": "偏西風",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "太陽表面の黒い部分",
        "meaning": "黒点",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "月が太陽を隠す現象",
        "meaning": "日食",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      },
      {
        "word": "地球の影に月が入る現象",
        "meaning": "月食",
        "points": 3,
        "group": "science_earth",
        "answerType": "earth_term"
      }
    ],
    "hard": [
      {
        "word": "等粒状組織をもつ岩石を答えよ",
        "meaning": "深成岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "斑状組織をもつ岩石を答えよ",
        "meaning": "火山岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "マグマが地下深くでゆっくり冷えてできる岩石を答えよ",
        "meaning": "深成岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "マグマが地表付近で急に冷えてできる岩石を答えよ",
        "meaning": "火山岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち白っぽく大きな結晶がある岩石を答えよ",
        "meaning": "花こう岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち灰色で斑状組織の岩石を答えよ",
        "meaning": "安山岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩のうち黒っぽい火山岩を答えよ",
        "meaning": "玄武岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火山灰が固まった岩石を答えよ",
        "meaning": "凝灰岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "サンゴや貝殻が固まってできやすい岩石を答えよ",
        "meaning": "石灰岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "泥が固まった堆積岩を答えよ",
        "meaning": "泥岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "砂が固まった堆積岩を答えよ",
        "meaning": "砂岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "れきが固まった堆積岩を答えよ",
        "meaning": "れき岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "生物の死がいなどが地層中に残ったものを答えよ",
        "meaning": "化石",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火成岩を大きく2つに分けると火山岩と何かを答えよ",
        "meaning": "深成岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "深成岩の代表例を答えよ",
        "meaning": "花こう岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "火山岩の代表例を答えよ",
        "meaning": "安山岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "堆積岩の代表例を答えよ",
        "meaning": "砂岩",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "石灰岩にうすい塩酸をかけると出る気体を答えよ",
        "meaning": "二酸化炭素",
        "points": 4,
        "group": "science_rock",
        "answerType": "rock_term"
      },
      {
        "word": "H2Oで表される物質",
        "meaning": "水",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "CO2で表される物質",
        "meaning": "二酸化炭素",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "O2で表される物質",
        "meaning": "酸素",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "H2で表される物質",
        "meaning": "水素",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "N2で表される物質",
        "meaning": "窒素",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "NH3で表される物質",
        "meaning": "アンモニア",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "CH4で表される物質",
        "meaning": "メタン",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "NaClで表される物質",
        "meaning": "塩化ナトリウム",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "HClで表される物質",
        "meaning": "塩酸",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "NaOHで表される物質",
        "meaning": "水酸化ナトリウム",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "H2SO4で表される物質",
        "meaning": "硫酸",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "HNO3で表される物質",
        "meaning": "硝酸",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "CH3COOHで表される物質",
        "meaning": "酢酸",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "C2H5OHで表される物質",
        "meaning": "エタノール",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "C6H12O6で表される物質",
        "meaning": "ブドウ糖",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "CaCO3で表される物質",
        "meaning": "炭酸カルシウム",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "CuOで表される物質",
        "meaning": "酸化銅",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "Ag2Oで表される物質",
        "meaning": "酸化銀",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "Fe2O3で表される物質",
        "meaning": "酸化鉄",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      },
      {
        "word": "Ca(OH)2で表される物質",
        "meaning": "水酸化カルシウム",
        "points": 4,
        "group": "science_chemistry",
        "answerType": "chemical_formula_or_name"
      }
    ]
  },
  "capital": {
    "easy": [
      {
        "word": "北海道の県庁所在地",
        "meaning": "札幌市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "青森県の県庁所在地",
        "meaning": "青森市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "岩手県の県庁所在地",
        "meaning": "盛岡市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "宮城県の県庁所在地",
        "meaning": "仙台市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "秋田県の県庁所在地",
        "meaning": "秋田市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "山形県の県庁所在地",
        "meaning": "山形市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "福島県の県庁所在地",
        "meaning": "福島市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "茨城県の県庁所在地",
        "meaning": "水戸市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "栃木県の県庁所在地",
        "meaning": "宇都宮市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "群馬県の県庁所在地",
        "meaning": "前橋市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "埼玉県の県庁所在地",
        "meaning": "さいたま市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "千葉県の県庁所在地",
        "meaning": "千葉市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "東京都の県庁所在地",
        "meaning": "新宿区",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "神奈川県の県庁所在地",
        "meaning": "横浜市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "新潟県の県庁所在地",
        "meaning": "新潟市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "富山県の県庁所在地",
        "meaning": "富山市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "石川県の県庁所在地",
        "meaning": "金沢市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "福井県の県庁所在地",
        "meaning": "福井市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "山梨県の県庁所在地",
        "meaning": "甲府市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "長野県の県庁所在地",
        "meaning": "長野市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "岐阜県の県庁所在地",
        "meaning": "岐阜市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "静岡県の県庁所在地",
        "meaning": "静岡市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "愛知県の県庁所在地",
        "meaning": "名古屋市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "三重県の県庁所在地",
        "meaning": "津市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "滋賀県の県庁所在地",
        "meaning": "大津市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "京都府の県庁所在地",
        "meaning": "京都市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "大阪府の県庁所在地",
        "meaning": "大阪市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "兵庫県の県庁所在地",
        "meaning": "神戸市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "奈良県の県庁所在地",
        "meaning": "奈良市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "和歌山県の県庁所在地",
        "meaning": "和歌山市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "鳥取県の県庁所在地",
        "meaning": "鳥取市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "島根県の県庁所在地",
        "meaning": "松江市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "岡山県の県庁所在地",
        "meaning": "岡山市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "広島県の県庁所在地",
        "meaning": "広島市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "山口県の県庁所在地",
        "meaning": "山口市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "徳島県の県庁所在地",
        "meaning": "徳島市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "香川県の県庁所在地",
        "meaning": "高松市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "愛媛県の県庁所在地",
        "meaning": "松山市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "高知県の県庁所在地",
        "meaning": "高知市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "福岡県の県庁所在地",
        "meaning": "福岡市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "佐賀県の県庁所在地",
        "meaning": "佐賀市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "長崎県の県庁所在地",
        "meaning": "長崎市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "熊本県の県庁所在地",
        "meaning": "熊本市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "大分県の県庁所在地",
        "meaning": "大分市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "宮崎県の県庁所在地",
        "meaning": "宮崎市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "鹿児島県の県庁所在地",
        "meaning": "鹿児島市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "沖縄県の県庁所在地",
        "meaning": "那覇市",
        "points": 2,
        "group": "geo_prefecture_capital",
        "answerType": "city"
      },
      {
        "word": "日本の首都",
        "meaning": "東京",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "韓国の首都",
        "meaning": "ソウル",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "中国の首都",
        "meaning": "北京",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "台湾の首都",
        "meaning": "台北",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "タイの首都",
        "meaning": "バンコク",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ベトナムの首都",
        "meaning": "ハノイ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "インドの首都",
        "meaning": "ニューデリー",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "アメリカの首都",
        "meaning": "ワシントンD.C.",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "カナダの首都",
        "meaning": "オタワ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "メキシコの首都",
        "meaning": "メキシコシティ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ブラジルの首都",
        "meaning": "ブラジリア",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "アルゼンチンの首都",
        "meaning": "ブエノスアイレス",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "イギリスの首都",
        "meaning": "ロンドン",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "フランスの首都",
        "meaning": "パリ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ドイツの首都",
        "meaning": "ベルリン",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "イタリアの首都",
        "meaning": "ローマ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "スペインの首都",
        "meaning": "マドリード",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ロシアの首都",
        "meaning": "モスクワ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "エジプトの首都",
        "meaning": "カイロ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "南アフリカの首都",
        "meaning": "プレトリア",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "オーストラリアの首都",
        "meaning": "キャンベラ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ニュージーランドの首都",
        "meaning": "ウェリントン",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "インドネシアの首都",
        "meaning": "ジャカルタ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "フィリピンの首都",
        "meaning": "マニラ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "マレーシアの首都",
        "meaning": "クアラルンプール",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "シンガポールの首都",
        "meaning": "シンガポール",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "トルコの首都",
        "meaning": "アンカラ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ギリシャの首都",
        "meaning": "アテネ",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "オランダの首都",
        "meaning": "アムステルダム",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "ベルギーの首都",
        "meaning": "ブリュッセル",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "スイスの首都",
        "meaning": "ベルン",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      },
      {
        "word": "オーストリアの首都",
        "meaning": "ウィーン",
        "points": 2,
        "group": "geo_country_capital",
        "answerType": "city"
      }
    ],
    "normal": [
      {
        "word": "札幌市が県庁所在地の都道府県",
        "meaning": "北海道",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "青森市が県庁所在地の都道府県",
        "meaning": "青森県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "盛岡市が県庁所在地の都道府県",
        "meaning": "岩手県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "仙台市が県庁所在地の都道府県",
        "meaning": "宮城県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "秋田市が県庁所在地の都道府県",
        "meaning": "秋田県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "山形市が県庁所在地の都道府県",
        "meaning": "山形県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "福島市が県庁所在地の都道府県",
        "meaning": "福島県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "水戸市が県庁所在地の都道府県",
        "meaning": "茨城県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "宇都宮市が県庁所在地の都道府県",
        "meaning": "栃木県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "前橋市が県庁所在地の都道府県",
        "meaning": "群馬県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "さいたま市が県庁所在地の都道府県",
        "meaning": "埼玉県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "千葉市が県庁所在地の都道府県",
        "meaning": "千葉県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "新宿区が県庁所在地の都道府県",
        "meaning": "東京都",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "横浜市が県庁所在地の都道府県",
        "meaning": "神奈川県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "新潟市が県庁所在地の都道府県",
        "meaning": "新潟県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "富山市が県庁所在地の都道府県",
        "meaning": "富山県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "金沢市が県庁所在地の都道府県",
        "meaning": "石川県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "福井市が県庁所在地の都道府県",
        "meaning": "福井県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "甲府市が県庁所在地の都道府県",
        "meaning": "山梨県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "長野市が県庁所在地の都道府県",
        "meaning": "長野県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "岐阜市が県庁所在地の都道府県",
        "meaning": "岐阜県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "静岡市が県庁所在地の都道府県",
        "meaning": "静岡県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "名古屋市が県庁所在地の都道府県",
        "meaning": "愛知県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "津市が県庁所在地の都道府県",
        "meaning": "三重県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "大津市が県庁所在地の都道府県",
        "meaning": "滋賀県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "京都市が県庁所在地の都道府県",
        "meaning": "京都府",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "大阪市が県庁所在地の都道府県",
        "meaning": "大阪府",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "神戸市が県庁所在地の都道府県",
        "meaning": "兵庫県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "奈良市が県庁所在地の都道府県",
        "meaning": "奈良県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "和歌山市が県庁所在地の都道府県",
        "meaning": "和歌山県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "鳥取市が県庁所在地の都道府県",
        "meaning": "鳥取県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "松江市が県庁所在地の都道府県",
        "meaning": "島根県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "岡山市が県庁所在地の都道府県",
        "meaning": "岡山県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "広島市が県庁所在地の都道府県",
        "meaning": "広島県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "山口市が県庁所在地の都道府県",
        "meaning": "山口県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "徳島市が県庁所在地の都道府県",
        "meaning": "徳島県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "高松市が県庁所在地の都道府県",
        "meaning": "香川県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "松山市が県庁所在地の都道府県",
        "meaning": "愛媛県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "高知市が県庁所在地の都道府県",
        "meaning": "高知県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "福岡市が県庁所在地の都道府県",
        "meaning": "福岡県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "佐賀市が県庁所在地の都道府県",
        "meaning": "佐賀県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "長崎市が県庁所在地の都道府県",
        "meaning": "長崎県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "熊本市が県庁所在地の都道府県",
        "meaning": "熊本県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "大分市が県庁所在地の都道府県",
        "meaning": "大分県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "宮崎市が県庁所在地の都道府県",
        "meaning": "宮崎県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "鹿児島市が県庁所在地の都道府県",
        "meaning": "鹿児島県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "那覇市が県庁所在地の都道府県",
        "meaning": "沖縄県",
        "points": 3,
        "group": "geo_prefecture_capital",
        "answerType": "prefecture"
      },
      {
        "word": "東京を首都とする国",
        "meaning": "日本",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ソウルを首都とする国",
        "meaning": "韓国",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "北京を首都とする国",
        "meaning": "中国",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "台北を首都とする国",
        "meaning": "台湾",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "バンコクを首都とする国",
        "meaning": "タイ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ハノイを首都とする国",
        "meaning": "ベトナム",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ニューデリーを首都とする国",
        "meaning": "インド",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ワシントンD.C.を首都とする国",
        "meaning": "アメリカ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "オタワを首都とする国",
        "meaning": "カナダ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "メキシコシティを首都とする国",
        "meaning": "メキシコ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ブラジリアを首都とする国",
        "meaning": "ブラジル",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ブエノスアイレスを首都とする国",
        "meaning": "アルゼンチン",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ロンドンを首都とする国",
        "meaning": "イギリス",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "パリを首都とする国",
        "meaning": "フランス",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ベルリンを首都とする国",
        "meaning": "ドイツ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ローマを首都とする国",
        "meaning": "イタリア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "マドリードを首都とする国",
        "meaning": "スペイン",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "モスクワを首都とする国",
        "meaning": "ロシア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "カイロを首都とする国",
        "meaning": "エジプト",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "プレトリアを首都とする国",
        "meaning": "南アフリカ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "キャンベラを首都とする国",
        "meaning": "オーストラリア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ウェリントンを首都とする国",
        "meaning": "ニュージーランド",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ジャカルタを首都とする国",
        "meaning": "インドネシア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "マニラを首都とする国",
        "meaning": "フィリピン",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "クアラルンプールを首都とする国",
        "meaning": "マレーシア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "シンガポールを首都とする国",
        "meaning": "シンガポール",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "アンカラを首都とする国",
        "meaning": "トルコ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "アテネを首都とする国",
        "meaning": "ギリシャ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "アムステルダムを首都とする国",
        "meaning": "オランダ",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ブリュッセルを首都とする国",
        "meaning": "ベルギー",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ベルンを首都とする国",
        "meaning": "スイス",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      },
      {
        "word": "ウィーンを首都とする国",
        "meaning": "オーストリア",
        "points": 3,
        "group": "geo_country_capital",
        "answerType": "country_or_region"
      }
    ],
    "hard": []
  },
  "history": {
    "easy": [
      {
        "word": "大化の改新が起きた年",
        "meaning": "645年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "平城京遷都が起きた年",
        "meaning": "710年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "平安京遷都が起きた年",
        "meaning": "794年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "源頼朝が征夷大将軍になるが起きた年",
        "meaning": "1192年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "鉄砲伝来が起きた年",
        "meaning": "1543年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "関ヶ原の戦いが起きた年",
        "meaning": "1600年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "江戸幕府成立が起きた年",
        "meaning": "1603年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ペリー来航が起きた年",
        "meaning": "1853年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "明治維新が起きた年",
        "meaning": "1868年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ポツダム宣言受諾が起きた年",
        "meaning": "1945年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日本国憲法施行が起きた年",
        "meaning": "1947年",
        "points": 2,
        "group": "history_year",
        "answerType": "year"
      }
    ],
    "normal": [
      {
        "word": "漢委奴国王の金印が起きた年",
        "meaning": "57年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "57年の出来事",
        "meaning": "漢委奴国王の金印",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "卑弥呼が魏に使いを送るが起きた年",
        "meaning": "239年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "239年の出来事",
        "meaning": "卑弥呼が魏に使いを送る",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "仏教伝来が起きた年",
        "meaning": "538年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "538年の出来事",
        "meaning": "仏教伝来",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "聖徳太子が摂政になるが起きた年",
        "meaning": "593年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "593年の出来事",
        "meaning": "聖徳太子が摂政になる",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "遣隋使派遣が起きた年",
        "meaning": "607年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "607年の出来事",
        "meaning": "遣隋使派遣",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "645年の出来事",
        "meaning": "大化の改新",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "大宝律令が起きた年",
        "meaning": "701年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "701年の出来事",
        "meaning": "大宝律令",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "710年の出来事",
        "meaning": "平城京遷都",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "墾田永年私財法が起きた年",
        "meaning": "743年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "743年の出来事",
        "meaning": "墾田永年私財法",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "794年の出来事",
        "meaning": "平安京遷都",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "遣唐使停止が起きた年",
        "meaning": "894年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "894年の出来事",
        "meaning": "遣唐使停止",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "藤原道長が摂政になるが起きた年",
        "meaning": "1016年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1016年の出来事",
        "meaning": "藤原道長が摂政になる",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "白河上皇の院政開始が起きた年",
        "meaning": "1086年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1086年の出来事",
        "meaning": "白河上皇の院政開始",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "壇ノ浦の戦いが起きた年",
        "meaning": "1185年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1185年の出来事",
        "meaning": "壇ノ浦の戦い",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1192年の出来事",
        "meaning": "源頼朝が征夷大将軍になる",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "承久の乱が起きた年",
        "meaning": "1221年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1221年の出来事",
        "meaning": "承久の乱",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "御成敗式目が起きた年",
        "meaning": "1232年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1232年の出来事",
        "meaning": "御成敗式目",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "文永の役が起きた年",
        "meaning": "1274年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1274年の出来事",
        "meaning": "文永の役",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "弘安の役が起きた年",
        "meaning": "1281年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1281年の出来事",
        "meaning": "弘安の役",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "鎌倉幕府滅亡が起きた年",
        "meaning": "1333年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1333年の出来事",
        "meaning": "鎌倉幕府滅亡",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "建武の新政が起きた年",
        "meaning": "1334年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1334年の出来事",
        "meaning": "建武の新政",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "室町幕府成立が起きた年",
        "meaning": "1338年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1338年の出来事",
        "meaning": "室町幕府成立",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "南北朝合一が起きた年",
        "meaning": "1392年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1392年の出来事",
        "meaning": "南北朝合一",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "応仁の乱が起きた年",
        "meaning": "1467年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1467年の出来事",
        "meaning": "応仁の乱",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1543年の出来事",
        "meaning": "鉄砲伝来",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "キリスト教伝来が起きた年",
        "meaning": "1549年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1549年の出来事",
        "meaning": "キリスト教伝来",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "桶狭間の戦いが起きた年",
        "meaning": "1560年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1560年の出来事",
        "meaning": "桶狭間の戦い",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "室町幕府滅亡が起きた年",
        "meaning": "1573年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1573年の出来事",
        "meaning": "室町幕府滅亡",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "長篠の戦いが起きた年",
        "meaning": "1575年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1575年の出来事",
        "meaning": "長篠の戦い",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "本能寺の変が起きた年",
        "meaning": "1582年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1582年の出来事",
        "meaning": "本能寺の変",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "刀狩が起きた年",
        "meaning": "1588年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1588年の出来事",
        "meaning": "刀狩",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "豊臣秀吉の全国統一が起きた年",
        "meaning": "1590年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1590年の出来事",
        "meaning": "豊臣秀吉の全国統一",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1600年の出来事",
        "meaning": "関ヶ原の戦い",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1603年の出来事",
        "meaning": "江戸幕府成立",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "武家諸法度が起きた年",
        "meaning": "1615年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1615年の出来事",
        "meaning": "武家諸法度",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "参勤交代の制度化が起きた年",
        "meaning": "1635年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1635年の出来事",
        "meaning": "参勤交代の制度化",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "島原・天草一揆が起きた年",
        "meaning": "1637年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1637年の出来事",
        "meaning": "島原・天草一揆",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "ポルトガル船来航禁止が起きた年",
        "meaning": "1639年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1639年の出来事",
        "meaning": "ポルトガル船来航禁止",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "享保の改革開始が起きた年",
        "meaning": "1716年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1716年の出来事",
        "meaning": "享保の改革開始",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "寛政の改革開始が起きた年",
        "meaning": "1787年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1787年の出来事",
        "meaning": "寛政の改革開始",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "大塩平八郎の乱が起きた年",
        "meaning": "1837年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1837年の出来事",
        "meaning": "大塩平八郎の乱",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "天保の改革開始が起きた年",
        "meaning": "1841年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1841年の出来事",
        "meaning": "天保の改革開始",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1853年の出来事",
        "meaning": "ペリー来航",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日米和親条約が起きた年",
        "meaning": "1854年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1854年の出来事",
        "meaning": "日米和親条約",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日米修好通商条約が起きた年",
        "meaning": "1858年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1858年の出来事",
        "meaning": "日米修好通商条約",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "大政奉還が起きた年",
        "meaning": "1867年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1867年の出来事",
        "meaning": "大政奉還",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1868年の出来事",
        "meaning": "明治維新",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "廃藩置県が起きた年",
        "meaning": "1871年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1871年の出来事",
        "meaning": "廃藩置県",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "学制が起きた年",
        "meaning": "1872年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1872年の出来事",
        "meaning": "学制",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "徴兵令・地租改正が起きた年",
        "meaning": "1873年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1873年の出来事",
        "meaning": "徴兵令・地租改正",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "西南戦争が起きた年",
        "meaning": "1877年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1877年の出来事",
        "meaning": "西南戦争",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "大日本帝国憲法発布が起きた年",
        "meaning": "1889年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1889年の出来事",
        "meaning": "大日本帝国憲法発布",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "第一回帝国議会が起きた年",
        "meaning": "1890年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1890年の出来事",
        "meaning": "第一回帝国議会",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日清戦争が起きた年",
        "meaning": "1894年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1894年の出来事",
        "meaning": "日清戦争",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日英同盟が起きた年",
        "meaning": "1902年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1902年の出来事",
        "meaning": "日英同盟",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日露戦争が起きた年",
        "meaning": "1904年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1904年の出来事",
        "meaning": "日露戦争",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "韓国併合が起きた年",
        "meaning": "1910年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1910年の出来事",
        "meaning": "韓国併合",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "第一次世界大戦が起きた年",
        "meaning": "1914年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1914年の出来事",
        "meaning": "第一次世界大戦",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "米騒動が起きた年",
        "meaning": "1918年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1918年の出来事",
        "meaning": "米騒動",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "ベルサイユ条約が起きた年",
        "meaning": "1919年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1919年の出来事",
        "meaning": "ベルサイユ条約",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "関東大震災が起きた年",
        "meaning": "1923年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1923年の出来事",
        "meaning": "関東大震災",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "普通選挙法・治安維持法が起きた年",
        "meaning": "1925年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1925年の出来事",
        "meaning": "普通選挙法・治安維持法",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "世界恐慌が起きた年",
        "meaning": "1929年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1929年の出来事",
        "meaning": "世界恐慌",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "満州事変が起きた年",
        "meaning": "1931年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1931年の出来事",
        "meaning": "満州事変",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "五・一五事件が起きた年",
        "meaning": "1932年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1932年の出来事",
        "meaning": "五・一五事件",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "二・二六事件が起きた年",
        "meaning": "1936年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1936年の出来事",
        "meaning": "二・二六事件",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日中戦争が起きた年",
        "meaning": "1937年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1937年の出来事",
        "meaning": "日中戦争",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "第二次世界大戦が起きた年",
        "meaning": "1939年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1939年の出来事",
        "meaning": "第二次世界大戦",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "太平洋戦争が起きた年",
        "meaning": "1941年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1941年の出来事",
        "meaning": "太平洋戦争",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1945年の出来事",
        "meaning": "ポツダム宣言受諾",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日本国憲法公布が起きた年",
        "meaning": "1946年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1946年の出来事",
        "meaning": "日本国憲法公布",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "1947年の出来事",
        "meaning": "日本国憲法施行",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "サンフランシスコ平和条約が起きた年",
        "meaning": "1951年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1951年の出来事",
        "meaning": "サンフランシスコ平和条約",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "日本の国連加盟が起きた年",
        "meaning": "1956年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1956年の出来事",
        "meaning": "日本の国連加盟",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "東京オリンピックが起きた年",
        "meaning": "1964年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1964年の出来事",
        "meaning": "東京オリンピック",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "沖縄返還が起きた年",
        "meaning": "1972年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1972年の出来事",
        "meaning": "沖縄返還",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "ベルリンの壁崩壊が起きた年",
        "meaning": "1989年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1989年の出来事",
        "meaning": "ベルリンの壁崩壊",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "ソ連解体が起きた年",
        "meaning": "1991年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "1991年の出来事",
        "meaning": "ソ連解体",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      },
      {
        "word": "東日本大震災が起きた年",
        "meaning": "2011年",
        "points": 3,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "2011年の出来事",
        "meaning": "東日本大震災",
        "points": 3,
        "group": "history_event",
        "answerType": "text"
      }
    ],
    "hard": [
      {
        "word": "漢委奴国王の金印の年代",
        "meaning": "57年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "卑弥呼が魏に使いを送るの年代",
        "meaning": "239年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "仏教伝来の年代",
        "meaning": "538年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "聖徳太子が摂政になるの年代",
        "meaning": "593年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "遣隋使派遣の年代",
        "meaning": "607年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "大化の改新の年代",
        "meaning": "645年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "大宝律令の年代",
        "meaning": "701年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "平城京遷都の年代",
        "meaning": "710年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "墾田永年私財法の年代",
        "meaning": "743年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "平安京遷都の年代",
        "meaning": "794年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "遣唐使停止の年代",
        "meaning": "894年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "藤原道長が摂政になるの年代",
        "meaning": "1016年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "白河上皇の院政開始の年代",
        "meaning": "1086年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "壇ノ浦の戦いの年代",
        "meaning": "1185年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "源頼朝が征夷大将軍になるの年代",
        "meaning": "1192年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "承久の乱の年代",
        "meaning": "1221年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "御成敗式目の年代",
        "meaning": "1232年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "文永の役の年代",
        "meaning": "1274年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "弘安の役の年代",
        "meaning": "1281年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "鎌倉幕府滅亡の年代",
        "meaning": "1333年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "建武の新政の年代",
        "meaning": "1334年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "室町幕府成立の年代",
        "meaning": "1338年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "南北朝合一の年代",
        "meaning": "1392年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "応仁の乱の年代",
        "meaning": "1467年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "鉄砲伝来の年代",
        "meaning": "1543年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "キリスト教伝来の年代",
        "meaning": "1549年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "桶狭間の戦いの年代",
        "meaning": "1560年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "室町幕府滅亡の年代",
        "meaning": "1573年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "長篠の戦いの年代",
        "meaning": "1575年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "本能寺の変の年代",
        "meaning": "1582年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "刀狩の年代",
        "meaning": "1588年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "豊臣秀吉の全国統一の年代",
        "meaning": "1590年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "関ヶ原の戦いの年代",
        "meaning": "1600年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "江戸幕府成立の年代",
        "meaning": "1603年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "武家諸法度の年代",
        "meaning": "1615年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "参勤交代の制度化の年代",
        "meaning": "1635年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "島原・天草一揆の年代",
        "meaning": "1637年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ポルトガル船来航禁止の年代",
        "meaning": "1639年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "享保の改革開始の年代",
        "meaning": "1716年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "寛政の改革開始の年代",
        "meaning": "1787年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "大塩平八郎の乱の年代",
        "meaning": "1837年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "天保の改革開始の年代",
        "meaning": "1841年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ペリー来航の年代",
        "meaning": "1853年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日米和親条約の年代",
        "meaning": "1854年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日米修好通商条約の年代",
        "meaning": "1858年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "大政奉還の年代",
        "meaning": "1867年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "明治維新の年代",
        "meaning": "1868年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "廃藩置県の年代",
        "meaning": "1871年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "学制の年代",
        "meaning": "1872年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "徴兵令・地租改正の年代",
        "meaning": "1873年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "西南戦争の年代",
        "meaning": "1877年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "大日本帝国憲法発布の年代",
        "meaning": "1889年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "第一回帝国議会の年代",
        "meaning": "1890年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日清戦争の年代",
        "meaning": "1894年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日英同盟の年代",
        "meaning": "1902年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日露戦争の年代",
        "meaning": "1904年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "韓国併合の年代",
        "meaning": "1910年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "第一次世界大戦の年代",
        "meaning": "1914年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "米騒動の年代",
        "meaning": "1918年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ベルサイユ条約の年代",
        "meaning": "1919年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "関東大震災の年代",
        "meaning": "1923年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "普通選挙法・治安維持法の年代",
        "meaning": "1925年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "世界恐慌の年代",
        "meaning": "1929年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "満州事変の年代",
        "meaning": "1931年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "五・一五事件の年代",
        "meaning": "1932年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "二・二六事件の年代",
        "meaning": "1936年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日中戦争の年代",
        "meaning": "1937年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "第二次世界大戦の年代",
        "meaning": "1939年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "太平洋戦争の年代",
        "meaning": "1941年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ポツダム宣言受諾の年代",
        "meaning": "1945年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日本国憲法公布の年代",
        "meaning": "1946年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日本国憲法施行の年代",
        "meaning": "1947年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "サンフランシスコ平和条約の年代",
        "meaning": "1951年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "日本の国連加盟の年代",
        "meaning": "1956年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "東京オリンピックの年代",
        "meaning": "1964年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "沖縄返還の年代",
        "meaning": "1972年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ベルリンの壁崩壊の年代",
        "meaning": "1989年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "ソ連解体の年代",
        "meaning": "1991年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      },
      {
        "word": "東日本大震災の年代",
        "meaning": "2011年",
        "points": 4,
        "group": "history_year",
        "answerType": "year"
      }
    ]
  },
  "idiom": {
    "easy": [
      {
        "word": "一石二鳥",
        "meaning": "一つの行為で二つの利益を得ること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "十人十色",
        "meaning": "人それぞれ違うこと",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "自業自得",
        "meaning": "自分の行いの報いを受けること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "温故知新",
        "meaning": "昔を学び新しい知識を得ること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "試行錯誤",
        "meaning": "試しながら解決を探ること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "臨機応変",
        "meaning": "状況に応じて対応すること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "本末転倒",
        "meaning": "大事なことと小さなことを取り違えること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "四面楚歌",
        "meaning": "周囲が敵ばかりで孤立すること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "切磋琢磨",
        "meaning": "互いに励まし合い向上すること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "三日坊主",
        "meaning": "長続きしないこと",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "七転八起",
        "meaning": "何度失敗しても立ち上がること",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      },
      {
        "word": "馬耳東風",
        "meaning": "人の意見を聞き流すこと",
        "points": 2,
        "group": "idiom_four_character",
        "answerType": "text"
      }
    ],
    "normal": [
      {
        "word": "一つの行為で二つの利益を得ることを表す四字熟語",
        "meaning": "一石二鳥",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "人それぞれ違うことを表す四字熟語",
        "meaning": "十人十色",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "自分の行いの報いを受けることを表す四字熟語",
        "meaning": "自業自得",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "昔を学び新しい知識を得ることを表す四字熟語",
        "meaning": "温故知新",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "試しながら解決を探ることを表す四字熟語",
        "meaning": "試行錯誤",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "状況に応じて対応することを表す四字熟語",
        "meaning": "臨機応変",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "大事なことと小さなことを取り違えることを表す四字熟語",
        "meaning": "本末転倒",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "周囲が敵ばかりで孤立することを表す四字熟語",
        "meaning": "四面楚歌",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "互いに励まし合い向上することを表す四字熟語",
        "meaning": "切磋琢磨",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "長続きしないことを表す四字熟語",
        "meaning": "三日坊主",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "何度失敗しても立ち上がることを表す四字熟語",
        "meaning": "七転八起",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      },
      {
        "word": "人の意見を聞き流すことを表す四字熟語",
        "meaning": "馬耳東風",
        "points": 3,
        "group": "idiom_four_character",
        "answerType": "idiom_or_proverb"
      }
    ],
    "hard": []
  },
  "math": {
    "easy": [],
    "normal": [
      {
        "word": "2x-8=-28 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-5=-35 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+12=-28 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+10=-40 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+3=-57 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+12=-58 のx",
        "meaning": "-10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+12=-6 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+4=-23 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-11=-47 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-5=-50 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+2=-52 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+9=-54 のx",
        "meaning": "-9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+6=-10 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-6=-30 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-8=-40 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-2=-42 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+12=-36 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+9=-47 のx",
        "meaning": "-8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-11=-25 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+4=-17 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-3=-31 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-5=-40 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+11=-31 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+6=-43 のx",
        "meaning": "-7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+0=-12 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+5=-13 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-10=-34 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-6=-36 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-11=-47 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+0=-42 のx",
        "meaning": "-6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-7=-17 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+10=-5 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-3=-23 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-11=-36 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+4=-26 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x-8=-43 のx",
        "meaning": "-5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-8=-16 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-10=-22 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-2=-18 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-5=-25 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-9=-33 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+1=-27 のx",
        "meaning": "-4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-10=-16 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-6=-15 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-5=-17 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-3=-18 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-1=-19 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x-7=-28 のx",
        "meaning": "-3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+4=0 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+8=2 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+11=3 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-11=-21 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+1=-11 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+8=-6 のx",
        "meaning": "-2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+11=9 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-5=-8 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-10=-14 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-2=-7 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+5=-1 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+0=-7 のx",
        "meaning": "-1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+2=2 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+3=3 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+12=12 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+12=12 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-6=-6 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+2=2 のx",
        "meaning": "0",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+1=3 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+1=4 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-12=-8 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+6=11 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-10=-4 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x-6=1 のx",
        "meaning": "1",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+3=7 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+11=17 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-11=-3 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+12=22 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+4=16 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+8=22 のx",
        "meaning": "2",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+4=10 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-11=-2 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-10=2 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+0=15 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-10=8 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x-2=19 のx",
        "meaning": "3",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+3=11 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+9=21 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+7=23 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-4=16 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-12=12 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+7=35 のx",
        "meaning": "4",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+4=14 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-11=4 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+4=24 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+12=37 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-4=26 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+9=44 のx",
        "meaning": "5",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-2=10 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+9=27 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+4=28 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-5=25 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+1=37 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+7=49 のx",
        "meaning": "6",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+4=18 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-6=15 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+3=31 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-7=28 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-11=31 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+11=60 のx",
        "meaning": "7",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+9=25 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x-1=23 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+11=43 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x-12=28 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-2=46 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+5=61 のx",
        "meaning": "8",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x+2=20 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+10=37 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x-5=31 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+10=55 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x-11=43 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x-3=60 のx",
        "meaning": "9",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "2x-11=9 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "3x+12=42 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "4x+8=48 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "5x+7=57 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "6x+9=69 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      },
      {
        "word": "7x+9=79 のx",
        "meaning": "10",
        "points": 3,
        "group": "math_equation",
        "answerType": "number"
      }
    ],
    "hard": [
      {
        "word": "x^2+15x+56=0 の解",
        "meaning": "x=-8,-7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+14x+48=0 の解",
        "meaning": "x=-8,-6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+13x+40=0 の解",
        "meaning": "x=-8,-5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+12x+32=0 の解",
        "meaning": "x=-8,-4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+11x+24=0 の解",
        "meaning": "x=-8,-3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+10x+16=0 の解",
        "meaning": "x=-8,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+9x+8=0 の解",
        "meaning": "x=-8,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+8x+0=0 の解",
        "meaning": "x=-8,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+7x-8=0 の解",
        "meaning": "x=-8,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+6x-16=0 の解",
        "meaning": "x=-8,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x-24=0 の解",
        "meaning": "x=-8,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x-32=0 の解",
        "meaning": "x=-8,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x-40=0 の解",
        "meaning": "x=-8,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-48=0 の解",
        "meaning": "x=-8,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-56=0 の解",
        "meaning": "x=-8,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-64=0 の解",
        "meaning": "x=-8,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+13x+42=0 の解",
        "meaning": "x=-7,-6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+12x+35=0 の解",
        "meaning": "x=-7,-5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+11x+28=0 の解",
        "meaning": "x=-7,-4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+10x+21=0 の解",
        "meaning": "x=-7,-3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+9x+14=0 の解",
        "meaning": "x=-7,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+8x+7=0 の解",
        "meaning": "x=-7,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+7x+0=0 の解",
        "meaning": "x=-7,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+6x-7=0 の解",
        "meaning": "x=-7,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x-14=0 の解",
        "meaning": "x=-7,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x-21=0 の解",
        "meaning": "x=-7,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x-28=0 の解",
        "meaning": "x=-7,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-35=0 の解",
        "meaning": "x=-7,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-42=0 の解",
        "meaning": "x=-7,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-49=0 の解",
        "meaning": "x=-7,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-56=0 の解",
        "meaning": "x=-7,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+11x+30=0 の解",
        "meaning": "x=-6,-5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+10x+24=0 の解",
        "meaning": "x=-6,-4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+9x+18=0 の解",
        "meaning": "x=-6,-3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+8x+12=0 の解",
        "meaning": "x=-6,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+7x+6=0 の解",
        "meaning": "x=-6,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+6x+0=0 の解",
        "meaning": "x=-6,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x-6=0 の解",
        "meaning": "x=-6,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x-12=0 の解",
        "meaning": "x=-6,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x-18=0 の解",
        "meaning": "x=-6,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-24=0 の解",
        "meaning": "x=-6,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-30=0 の解",
        "meaning": "x=-6,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-36=0 の解",
        "meaning": "x=-6,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-42=0 の解",
        "meaning": "x=-6,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-48=0 の解",
        "meaning": "x=-6,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+9x+20=0 の解",
        "meaning": "x=-5,-4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+8x+15=0 の解",
        "meaning": "x=-5,-3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+7x+10=0 の解",
        "meaning": "x=-5,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+6x+5=0 の解",
        "meaning": "x=-5,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x+0=0 の解",
        "meaning": "x=-5,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x-5=0 の解",
        "meaning": "x=-5,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x-10=0 の解",
        "meaning": "x=-5,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-15=0 の解",
        "meaning": "x=-5,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-20=0 の解",
        "meaning": "x=-5,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-25=0 の解",
        "meaning": "x=-5,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-30=0 の解",
        "meaning": "x=-5,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-35=0 の解",
        "meaning": "x=-5,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x-40=0 の解",
        "meaning": "x=-5,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+7x+12=0 の解",
        "meaning": "x=-4,-3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+6x+8=0 の解",
        "meaning": "x=-4,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x+4=0 の解",
        "meaning": "x=-4,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x+0=0 の解",
        "meaning": "x=-4,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x-4=0 の解",
        "meaning": "x=-4,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-8=0 の解",
        "meaning": "x=-4,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-12=0 の解",
        "meaning": "x=-4,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-16=0 の解",
        "meaning": "x=-4,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-20=0 の解",
        "meaning": "x=-4,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-24=0 の解",
        "meaning": "x=-4,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x-28=0 の解",
        "meaning": "x=-4,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x-32=0 の解",
        "meaning": "x=-4,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+5x+6=0 の解",
        "meaning": "x=-3,-2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+4x+3=0 の解",
        "meaning": "x=-3,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x+0=0 の解",
        "meaning": "x=-3,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x-3=0 の解",
        "meaning": "x=-3,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-6=0 の解",
        "meaning": "x=-3,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-9=0 の解",
        "meaning": "x=-3,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-12=0 の解",
        "meaning": "x=-3,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-15=0 の解",
        "meaning": "x=-3,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x-18=0 の解",
        "meaning": "x=-3,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x-21=0 の解",
        "meaning": "x=-3,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x-24=0 の解",
        "meaning": "x=-3,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+3x+2=0 の解",
        "meaning": "x=-2,-1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+2x+0=0 の解",
        "meaning": "x=-2,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x-2=0 の解",
        "meaning": "x=-2,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-4=0 の解",
        "meaning": "x=-2,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-6=0 の解",
        "meaning": "x=-2,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-8=0 の解",
        "meaning": "x=-2,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x-10=0 の解",
        "meaning": "x=-2,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x-12=0 の解",
        "meaning": "x=-2,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x-14=0 の解",
        "meaning": "x=-2,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-6x-16=0 の解",
        "meaning": "x=-2,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+1x+0=0 の解",
        "meaning": "x=-1,0",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2+0x-1=0 の解",
        "meaning": "x=-1,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x-2=0 の解",
        "meaning": "x=-1,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x-3=0 の解",
        "meaning": "x=-1,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x-4=0 の解",
        "meaning": "x=-1,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x-5=0 の解",
        "meaning": "x=-1,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x-6=0 の解",
        "meaning": "x=-1,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-6x-7=0 の解",
        "meaning": "x=-1,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-7x-8=0 の解",
        "meaning": "x=-1,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-1x+0=0 の解",
        "meaning": "x=0,1",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-2x+0=0 の解",
        "meaning": "x=0,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x+0=0 の解",
        "meaning": "x=0,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x+0=0 の解",
        "meaning": "x=0,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x+0=0 の解",
        "meaning": "x=0,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-6x+0=0 の解",
        "meaning": "x=0,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-7x+0=0 の解",
        "meaning": "x=0,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-8x+0=0 の解",
        "meaning": "x=0,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-3x+2=0 の解",
        "meaning": "x=1,2",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-4x+3=0 の解",
        "meaning": "x=1,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x+4=0 の解",
        "meaning": "x=1,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-6x+5=0 の解",
        "meaning": "x=1,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-7x+6=0 の解",
        "meaning": "x=1,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-8x+7=0 の解",
        "meaning": "x=1,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-9x+8=0 の解",
        "meaning": "x=1,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-5x+6=0 の解",
        "meaning": "x=2,3",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-6x+8=0 の解",
        "meaning": "x=2,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-7x+10=0 の解",
        "meaning": "x=2,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-8x+12=0 の解",
        "meaning": "x=2,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-9x+14=0 の解",
        "meaning": "x=2,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-10x+16=0 の解",
        "meaning": "x=2,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-7x+12=0 の解",
        "meaning": "x=3,4",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-8x+15=0 の解",
        "meaning": "x=3,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-9x+18=0 の解",
        "meaning": "x=3,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-10x+21=0 の解",
        "meaning": "x=3,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-11x+24=0 の解",
        "meaning": "x=3,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-9x+20=0 の解",
        "meaning": "x=4,5",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-10x+24=0 の解",
        "meaning": "x=4,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-11x+28=0 の解",
        "meaning": "x=4,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-12x+32=0 の解",
        "meaning": "x=4,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-11x+30=0 の解",
        "meaning": "x=5,6",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-12x+35=0 の解",
        "meaning": "x=5,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-13x+40=0 の解",
        "meaning": "x=5,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-13x+42=0 の解",
        "meaning": "x=6,7",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-14x+48=0 の解",
        "meaning": "x=6,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "x^2-15x+56=0 の解",
        "meaning": "x=7,8",
        "points": 4,
        "group": "math_quadratic",
        "answerType": "math_expression"
      },
      {
        "word": "4C2",
        "meaning": "6",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "4C3",
        "meaning": "4",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "5C2",
        "meaning": "10",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "5C3",
        "meaning": "10",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "5C4",
        "meaning": "5",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "6C2",
        "meaning": "15",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "6C3",
        "meaning": "20",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "6C4",
        "meaning": "15",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "6C5",
        "meaning": "6",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "7C2",
        "meaning": "21",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "7C3",
        "meaning": "35",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "7C4",
        "meaning": "35",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "7C5",
        "meaning": "21",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "8C2",
        "meaning": "28",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "8C3",
        "meaning": "56",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "8C4",
        "meaning": "70",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "8C5",
        "meaning": "56",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "9C2",
        "meaning": "36",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "9C3",
        "meaning": "84",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "9C4",
        "meaning": "126",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "9C5",
        "meaning": "126",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "10C2",
        "meaning": "45",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "10C3",
        "meaning": "120",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "10C4",
        "meaning": "210",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "10C5",
        "meaning": "252",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "11C2",
        "meaning": "55",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "11C3",
        "meaning": "165",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "11C4",
        "meaning": "330",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "11C5",
        "meaning": "462",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "12C2",
        "meaning": "66",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "12C3",
        "meaning": "220",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "12C4",
        "meaning": "495",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "12C5",
        "meaning": "792",
        "points": 4,
        "group": "math_probability",
        "answerType": "number"
      },
      {
        "word": "微分: 1x^2",
        "meaning": "2x^1",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 1x^3",
        "meaning": "3x^2",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 1x^4",
        "meaning": "4x^3",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 1x^5",
        "meaning": "5x^4",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 2x^2",
        "meaning": "4x^1",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 2x^3",
        "meaning": "6x^2",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 2x^4",
        "meaning": "8x^3",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 2x^5",
        "meaning": "10x^4",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 3x^2",
        "meaning": "6x^1",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 3x^3",
        "meaning": "9x^2",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 3x^4",
        "meaning": "12x^3",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 3x^5",
        "meaning": "15x^4",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 4x^2",
        "meaning": "8x^1",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 4x^3",
        "meaning": "12x^2",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 4x^4",
        "meaning": "16x^3",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 4x^5",
        "meaning": "20x^4",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 5x^2",
        "meaning": "10x^1",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 5x^3",
        "meaning": "15x^2",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 5x^4",
        "meaning": "20x^3",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      },
      {
        "word": "微分: 5x^5",
        "meaning": "25x^4",
        "points": 5,
        "group": "math_calculus",
        "answerType": "math_expression"
      }
    ]
  },
  "trivia": {
    "easy": [
      {
        "word": "日本の通貨単位",
        "meaning": "円",
        "points": 2,
        "group": "trivia_life",
        "answerType": "text"
      },
      {
        "word": "アメリカの通貨単位",
        "meaning": "ドル",
        "points": 2,
        "group": "trivia_life",
        "answerType": "text"
      },
      {
        "word": "1日は何時間",
        "meaning": "24時間",
        "points": 2,
        "group": "trivia_life",
        "answerType": "number_unit"
      },
      {
        "word": "昆虫の足の本数",
        "meaning": "6本",
        "points": 2,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "クモの足の本数",
        "meaning": "8本",
        "points": 2,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "タコの足の本数",
        "meaning": "8本",
        "points": 2,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "チョコレートの原料",
        "meaning": "カカオ",
        "points": 2,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "コーヒーの原料",
        "meaning": "コーヒー豆",
        "points": 2,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "豆腐の主な原料",
        "meaning": "大豆",
        "points": 2,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "太陽系最大の惑星",
        "meaning": "木星",
        "points": 2,
        "group": "trivia_space",
        "answerType": "text"
      },
      {
        "word": "地球の衛星",
        "meaning": "月",
        "points": 2,
        "group": "trivia_space",
        "answerType": "text"
      },
      {
        "word": "赤い惑星と呼ばれる惑星",
        "meaning": "火星",
        "points": 2,
        "group": "trivia_space",
        "answerType": "text"
      }
    ],
    "normal": [
      {
        "word": "日本の通貨単位は何か",
        "meaning": "円",
        "points": 3,
        "group": "trivia_life",
        "answerType": "text"
      },
      {
        "word": "アメリカの通貨単位は何か",
        "meaning": "ドル",
        "points": 3,
        "group": "trivia_life",
        "answerType": "text"
      },
      {
        "word": "1日は何時間は何か",
        "meaning": "24時間",
        "points": 3,
        "group": "trivia_life",
        "answerType": "number_unit"
      },
      {
        "word": "昆虫の足の本数は何か",
        "meaning": "6本",
        "points": 3,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "クモの足の本数は何か",
        "meaning": "8本",
        "points": 3,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "タコの足の本数は何か",
        "meaning": "8本",
        "points": 3,
        "group": "trivia_animal",
        "answerType": "number_unit"
      },
      {
        "word": "チョコレートの原料は何か",
        "meaning": "カカオ",
        "points": 3,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "コーヒーの原料は何か",
        "meaning": "コーヒー豆",
        "points": 3,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "豆腐の主な原料は何か",
        "meaning": "大豆",
        "points": 3,
        "group": "trivia_food",
        "answerType": "text"
      },
      {
        "word": "太陽系最大の惑星は何か",
        "meaning": "木星",
        "points": 3,
        "group": "trivia_space",
        "answerType": "text"
      },
      {
        "word": "地球の衛星は何か",
        "meaning": "月",
        "points": 3,
        "group": "trivia_space",
        "answerType": "text"
      },
      {
        "word": "赤い惑星と呼ばれる惑星は何か",
        "meaning": "火星",
        "points": 3,
        "group": "trivia_space",
        "answerType": "text"
      }
    ],
    "hard": []
  }
};

  Object.keys(BOOSTER).forEach((genre) => {
    window.OTHELLO_QUESTION_DATA[genre] = window.OTHELLO_QUESTION_DATA[genre] || {};
    ['easy', 'normal', 'hard'].forEach((level) => {
      const current = window.OTHELLO_QUESTION_DATA[genre][level];
      if (!Array.isArray(current)) {
        window.OTHELLO_QUESTION_DATA[genre][level] = [];
      }
      const existing = new Set(window.OTHELLO_QUESTION_DATA[genre][level].map(q => `${q.word}::${q.meaning}`));
      BOOSTER[genre][level].forEach((q) => {
        const key = `${q.word}::${q.meaning}`;
        if (!existing.has(key)) {
          window.OTHELLO_QUESTION_DATA[genre][level].push(q);
          existing.add(key);
        }
      });
    });
  });
})();