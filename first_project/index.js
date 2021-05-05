//クラスの作成(関数での実装)
var util = require("util");

// 親クラス
var CD_Player = function(value){
    this.value = value;
};

CD_Player.prototype.Audio = function(){
    console.log("Music Start");
};


// 小クラス
var Sound = function(value){
    Sound.super_.call(this, value);
};
util.inherits(Sound, CD_Player);

Sound.prototype.echo = function () {
    Sound.super_.prototype.Audio.call(this);
};

Sound.prototype.Audio = function(){
    console.log(`play ${this.value}`);
};

var music_palyer = new Sound("test");
music_palyer.echo();
music_palyer.Audio();