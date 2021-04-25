## コンソール出力に関して

// Console output

//　置換文字列の種遂に関して
// %s : 文字列
// %d : 数値(整数もしくは小数)
// %i : 整数
// %f : 小数
// %o : jsonオブジェクト

//log : 指定されたデータを表示
console.log("Message : %s", "hello");

//trace : 呼指定されたデータを表示 & 呼び出されたスタックまで表示
console.trace("hello");

//console.debug();
//console.info();
//console.warin();
//console.error();

## クラスの継承

var MyClass = class {
    constructor(value){
        this.「メンバ変数」 = value;
    }
}

var MyClass = class extends <親クラス>{
    constructor(value){
        super(value)
    }

    <メソッド名>() {
        super.<親クラスのメソッド>();
    }
}

## example1

```.js
//クラスの作成

var Audio = class {
    constructor(value){
        this.value = value;
    }

    speaker(){
        console.log("bow Wow");
    }
};

var Player = class extends Audio {
    constructor(value){
        super(value);
    }

    echo(){
        super.speaker();
    }

    speaker(){
        console.log(`sound ${this.value}`);
    }
};

var audio_player = new Player("music start");
audio_player.echo();
audio_player.speaker();
```