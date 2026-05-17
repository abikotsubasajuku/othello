// idiom の問題データ（難易度別）
// 追加形式: { word: "問題", meaning: "答え", points: 1 }
// points は 1〜5。easy / normal / hard の中に追加してください。
window.OTHELLO_QUESTION_DATA = window.OTHELLO_QUESTION_DATA || {};
window.OTHELLO_QUESTION_DATA.idiom = {
  // 初級
  easy: [
    { word: "問題", meaning: "答え", points: 1 },
    { word: "一期一会", meaning: "一生に一度の出会い", points: 1 },
    { word: "十人十色", meaning: "人それぞれ好みや性質が違うこと", points: 1 },
    { word: "以心伝心", meaning: "言葉に出さなくても心が通じ合うこと", points: 1 },
    { word: "一石二鳥", meaning: "一つの行為で二つの利益を得ること", points: 1 },
    { word: "温故知新", meaning: "昔の事をたずねて新しい知識を得ること", points: 1 },
    { word: "花鳥風月", meaning: "自然の美しい景色のこと", points: 1 },
    { word: "自画自賛", meaning: "自分で自分を褒めること", points: 2 },
    { word: "臨機応変", meaning: "状況に合わせて適切な対応をすること", points: 2 },
    { word: "一喜一憂", meaning: "状況が変わるたびに喜んだり心配したりすること", points: 2 },
    { word: "四面楚歌", meaning: "周りが敵だらけで孤立していること", points: 2 },
    { word: "試行錯誤", meaning: "色々な方法を試して失敗を重ねながら解決に近づくこと", points: 2 },
  ],

  // 中級
  normal: [
    { word: "本末転倒", meaning: "根本的なことと些細なことを取り違えること", points: 3 },
    { word: "言語道断", meaning: "言葉で言い表せないほどとんでもないこと", points: 3 },
    { word: "自業自得", meaning: "自分の悪い行いの報いを自分で受けること", points: 3 },
    { word: "前代未聞", meaning: "今まで聞いたことがないような大変なこと", points: 3 },
    { word: "有名無実", meaning: "名前だけで実質が伴っていないこと", points: 3 },
  ],

  // 上級
  hard: [
    { word: "画竜点睛", meaning: "物事を完成させるための最後の大事な仕上げ", points: 4 },
    { word: "捲土重来", meaning: "一度敗れた者が勢いを盛り返してくること", points: 4 },
    { word: "呉越同舟", meaning: "仲の悪い者同士が同じ場所にいること", points: 4 },
    { word: "切磋琢磨", meaning: "仲間同士で励まし合いながら向上すること", points: 4 },
    { word: "傍若無人", meaning: "周りを気にせず勝手気ままに振る舞うこと", points: 4 },
    { word: "天衣無縫", meaning: "自然でわざとらしくなく、美しいこと", points: 5 },
    { word: "荒唐無稽", meaning: "根拠がなく、でたらめなこと", points: 5 },
    { word: "乾坤一擲", meaning: "運命をかけて大きな勝負に出ること", points: 5 },
    { word: "牽強附会", meaning: "道理に合わないことを無理にこじつけること", points: 5 },
    { word: "虚心坦懐", meaning: "先入観を持たず、素直な心でいること", points: 5 },
  ],

};
