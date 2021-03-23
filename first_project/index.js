
// Timers
// SetTimeout の遅延実行時間は100msec
// SetTimeout の中身の処理は遅延実行される
// JavaScriptはシングルスレッドなので、3秒間のループ処理後にSetTimeoutの中身が実行される
// Timers
setTimeout(()=>{
    console.log("setTimeout()");
}, 1)

//check
setImmediate(()=>{
    console.log("setImmediate");
})

// キュー(nextTickQueue)の実行
process.nextTick(()=>{
    console.log("nextTic");
})

// キュー(MicroTaskQueue)の実行
Promise.resolve().then(() => {
    console.log("Promise.resolve().then()");
})
