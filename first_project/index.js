
// SetTimeout の遅延実行時間は100msec
// SetTimeout の中身の処理は遅延実行される
// JavaScriptはシングルスレッドなので、3秒間のループ処理後にSetTimeoutの中身が実行される
setTimeout(()=>{
    console.log("setTimeout()");
}, 100)

console.log("global");

// 3秒間whileループ処理
var end = (new Date()).getTime() + 3000;
while ((new Date()).getTime() < end){ }

//現在のディレクトリを取得
console.log(__dirname);

//現在実行中のファイルパスを取得
console.log(__filename);