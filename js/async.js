//同期処理を実行
console.log('処理1');
console.log('処理2');
console.log('処理3');

setTimeout(() =>{
    console.log('処理4')
    //ミリ秒（1000分の1秒）だから3秒待つなら3000
},3000)

// 同期処理を実行する
console.log('処理5');
console.log('処理6');