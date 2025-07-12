//back-btnというidをもつHTML要素を取得し、定数に代入
const backBtn = document.getElementById('back-btn');

//画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll',()=>{
    //画面のスクロール量をpx(ピクセル)数で取得するプロパティ
    const scrollValue = document.scrollingElement.scrollTop;
  // 画面のスクロール量が300px以上であれば、「TOPに戻る」ボタンを表示する
 if (scrollValue >= 300) {
    // 非表示の「TOPに戻る」ボタンを「横並び要素」として表示させる
    //「idが back-btn の要素に対して、CSSの display を 'inline' に設定して、見えるようにする（インライン形式で）
   backBtn.style.display = 'inline';
 }
 // 画面のスクロール量がそれ以外（300px未満）であれば、「TOPに戻る」ボタンを非表示にする
 else {
   backBtn.style.display = 'none';
 }
});