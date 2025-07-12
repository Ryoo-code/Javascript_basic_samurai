//output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

//HTML要素がクリックされたときにイベントを処理する
btn.addEventListener('click',()=>{
    console.log('クリックされました！');
})

 // add-btnというidを持つHTML要素を取得し、定数に代入する
 const addBtn = document.getElementById('add-btn');
 // parent-listというidを持つHTML要素を取得し、定数に代入する
 const parentList = document.getElementById('parent-list');

 addBtn.addEventListener('click',() =>{
    console.log('クリックされました！');
 })

// HTML要素がクリックされたときにイベント処理を実行する
//そして、どんな処理が行われているかをここで書く
 addBtn.addEventListener('click', () => {
   // li要素を新しく作成する
   const childList = document.createElement('li');
   //作成したli要素に「これはリスト要素です」というテキスト追加
   childList.textContent = 'これはリスト要素です';
   // 作成したli要素をul要素の子要素として末尾に追加する
   parentList.appendChild(childList);
 });