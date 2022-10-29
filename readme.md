# 間違い探し
- STARTボタンを押すことでspanタグにランダムで問題を出す
- 間違いを押したら間違いの音を出す
- 正解だと音を出して次の問題にいく
- ３問終わったらresult画面を出し、タイムとランクをわける

## 工夫した点、こだわった点
- random()とif関数を使えるゲームを作りたかった

## できなかったこと
- 問題を表示するときにif関数で作りたかったが、要素の順番を数字として取得できなくて出来なかった（今は全て同じ文字を表示して、間違いをランダムの場所１箇所に上書きして表示している）

## 参考にしたサイト
- jQuery基本構造  
  https://uxmilk.jp/11074

- class付与 
  https://eclair.blog/javascript-multiple-class/#JavaScript

- img src 書き換え .attr メソッド 
  https://blog.toshimaru.net/jqueryhidden-inputjquery/

- 多次元配列の作り方
  https://www.javadrive.jp/javascript/array/index5.html

- n番目の要素を取得する方法  eq(), index(), nth-child()
  https://arts-factory.net/eq_nth-child/
  https://www.flatflag.nir87.com/index-2026