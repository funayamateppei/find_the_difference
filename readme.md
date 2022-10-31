# 間違い探し
- STARTボタンを押すことで100個divタグにランダムで問題を出す
- 間違いのときは間違いの音、正解のときは正解の音を出す（うるさいからミュート機能あり）
- 正解だと次の問題へ
- ３問終わったらresult画面を出し、タイムとランクをわける
- ローカルストレージにタイムを保存し、過去のタイムを右上にリスト表示する
- 削除ボタンでローカルストレージ内のデータとリストを削除する
- もう一度あそぶボタンで最初の画面に戻る
- 繰り返し

## 工夫した点、こだわった点
- random()とif関数を使えるゲームを作りたかった

## できなかったこと
- 問題を表示するときにif関数で作りたかったが、要素の順番を数字として取得できなくて出来なかった（今は全て同じ文字を表示して、間違いをランダムの場所１箇所に上書きして表示している）
- 動的に付与されたクラスにon click処理をしようとしたら、反応がなかった。
  クリックしたときに反応がない or 関数がおかしい → 検証
  クリックが出来ていないことがわかった。調べると、付与したクラスにイベント処理をしたい場合は別の書き方でコードを書く必要があることがわかった。

## 参考にしたサイト
- jQuery基本構造  
  - https://uxmilk.jp/11074

- class付与 
  - https://eclair.blog/javascript-multiple-class/#JavaScript

- img src 書き換え .attr メソッド 
  - https://blog.toshimaru.net/jqueryhidden-inputjquery/

- 多次元配列の作り方
  - https://www.javadrive.jp/javascript/array/index5.html

- n番目の要素を取得する方法  eq(), index(), nth-child()
  - https://arts-factory.net/eq_nth-child/
  https://www.flatflag.nir87.com/index-2026

- 静的なクラスはイベントが設定できるが、動的に付与したクラスにはイベントを設定できない。→特殊な書き方で付与することが出来る
  - https://qiita.com/yokke0059/items/13bd0d4f950557032169

- setInterval()を止めたいとき→clearInterval()
  - https://god48.com/javascript-clearinterval 
  - https://sites.google.com/site/jqueryjavascript/setintervaltoclearintervalno-shii-fang

- divやspanタグでボタンを作ると後々大変になる内容→buttonで作ろう
  - https://qiita.com/xrxoxcxox/items/7d06d4f2d861b022767a

- fadeIn fadeOut メソッドの説明
  - https://www.sejuku.net/blog/57618

- JSONデータの変換
  - https://www.tam-tam.co.jp/tipsnote/javascript/post5978.html

- 音楽の再生
  - https://qumeru.com/magazine/377

- 要素の作成 append
  - https://www.bold.ne.jp/engineer-club/jquery-append#-jQuery