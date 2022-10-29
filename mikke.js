



// 間違い探しの問題と答え
// asTable[n] = Array(答え, 間違い);

const asTable = [];
asTable[0] = ['め', 'ぬ'];
asTable[1] = ['ろ', 'る'];
asTable[2] = ['わ', 'れ'];
asTable[3] = ['ぷ', 'ぶ'];
asTable[4] = ['ぴ', 'び'];
asTable[5] = ['子', '了'];
asTable[6] = ['夭', '天'];
asTable[7] = ['日', '曰'];
asTable[8] = ['治', '冶'];
asTable[9] = ['尤', '犬'];
asTable[10] = ['来', '未'];
asTable[11] = ['萩', '荻'];
asTable[12] = ['昨', '咋'];
asTable[13] = ['矢', '失'];
asTable[14] = ['白', '臼'];
asTable[15] = ['シ', 'ツ'];
asTable[16] = ['ソ', 'ン'];
asTable[17] = ['ユ', 'エ'];
asTable[18] = ['井', '丼'];
asTable[19] = ['斥', '斤'];
asTable[20] = ['到', '致'];
asTable[21] = ['准', '淮'];
asTable[22] = ['延', '廷'];
asTable[23] = ['晴', '睛'];
asTable[24] = ['季', '李'];
asTable[25] = ['杏', '否'];
asTable[26] = ['菻', '森'];
asTable[27] = ['冽', '洌'];
asTable[28] = ['竽', '竿'];
asTable[29] = ['苫', '苦'];
asTable[30] = ['る', 'ゐ'];
asTable[31] = ['エ', 'ヱ'];
asTable[32] = ['万', '方'];
asTable[33] = ['上', '土'];
asTable[34] = ['世', '冊'];
asTable[35] = ['亨', '亭'];
asTable[36] = ['人', '入'];
asTable[37] = ['今', '令'];
asTable[38] = ['任', '仕'];
asTable[39] = ['代', '伐'];
asTable[40] = ['伴', '件'];
asTable[41] = ['便', '使'];
asTable[42] = ['侍', '待'];
asTable[43] = ['仲', '伸'];
asTable[44] = ['侮', '悔'];
asTable[45] = ['侵', '浸'];
asTable[46] = ['侯', '候'];
asTable[47] = ['傅', '博'];
asTable[48] = ['他', '地'];
asTable[49] = ['地', '池'];
asTable[50] = ['池', '他'];
asTable[51] = ['做', '倣'];
asTable[52] = ['児', '見'];
asTable[53] = ['兎', '免'];
asTable[54] = ['全', '金'];
asTable[55] = ['両', '雨'];
asTable[56] = ['回', '同'];
asTable[57] = ['滅', '減'];
asTable[58] = ['別', '列'];
asTable[59] = ['到', '倒'];
asTable[60] = ['刊', '刑'];
asTable[61] = ['制', '判'];
asTable[66] = ['力', '刀'];
asTable[67] = ['巧', '切'];
asTable[68] = ['加', '如'];
asTable[69] = ['助', '肋'];
asTable[70] = ['幣', '弊'];
asTable[71] = ['午', '牛'];
asTable[72] = ['千', '干'];
asTable[73] = ['干', '于'];
asTable[74] = ['于', '千'];
asTable[75] = ['卯', '卵'];
asTable[76] = ['厄', '危'];
asTable[77] = ['叉', '又'];
asTable[78] = ['干', '子'];
asTable[79] = ['左', '在'];
asTable[80] = ['合', '令'];
asTable[81] = ['名', '各'];
asTable[82] = ['因', '困'];
asTable[83] = ['国', '団'];
asTable[84] = ['土', '士'];
asTable[85] = ['城', '域'];
asTable[86] = ['壌', '壊'];
asTable[87] = ['基', '墓'];
asTable[88] = ['埋', '理'];
asTable[89] = ['宣', '宜'];
asTable[90] = ['貧', '貪'];
asTable[91] = ['堅', '竪'];
asTable[92] = ['大', '犬'];
asTable[93] = ['奪', '奮'];
asTable[94] = ['太', '大'];
asTable[95] = ['失', '矢'];
asTable[96] = ['妨', '防'];
asTable[97] = ['姓', '性'];
asTable[98] = ['娘', '狼'];
asTable[99] = ['鳥', '烏'];


// カウントアップタイマーのminutes, seconds, milliseconds
let m = 0;
let s = 0;
let ms = 0;

// 問題を決めるrandomNumber
const min = 0;
const max = 99;
const quizNumber = Math.floor(Math.random() * (max - min + 1) - min);

// 間違いを配置するrandomNumber
const differentNumber = Math.floor(Math.random() * (max - min + 1) - min);


// 問題が終わると+1していく → quizNumber>3 になったらresult画面を表示する
let quizcount = 0;


// spanタグにnumber0~99までの連番でclass:number(連番)をつける
const number = () => {
  $(function () {
    let i = 0
    $('.boxes span').each(function () {
      $(this).addClass('number' + (i++));
    })
  })
}



// STRATボタンを押した直後に起動
// カウントアップタイマー起動
// css適用させて表示を変える
$('.start').on('click', () => {
  setInterval(() => {
    ms += 1;   // 10ms 毎に 100ms 増やす（表示が2桁だから）
    if (ms > 99) {
      s += 1;
      ms = 0;
    }
    if (s > 59) {
      m += 1;
      s = 0;
    }
    minutes = ('0' + m).slice(-2);
    seconds = ('0' + s).slice(-2);
    milliSeconds = ('0' + ms).slice(-2);
    $('.timer').text(`${minutes}:${seconds},${milliSeconds}`)
  }, 10);
  // ↑カウントアップタイマー機能↑

  // STARTボタンと最初に表示されている文字を消すcss適用
  $('.start').toggle('none');
  $('.startTop').toggle('none');

  // 非表示にしているboxを表示させるためのcssを適用
  $('.box').toggle('box1');

  // spanタグにnumber0~99までの連番でclass:number(連番)をつける
  number();

})



// for文でrandomNumberの配列0番目をspanタグに追加していく
// randomNumberと











// class:box をもつspanタグを生成し、.boxesに追加する
// const box = () => {
//   for (let i = 0; i <= 100; i++) {
//     document.createElement('span')
//     className('box', i)
//   }
// }
// document.querySelector('.boxes').appendChild(box);




// 問題を決める rundomNumber の関数

// 正解と間違いを .box の text に入れる関数
// どこを間違いにするか？関数
// for (let i = 0; i <= 100; i++) {

//   $('.box').text(asTable[randomNumber][0]);

// };

