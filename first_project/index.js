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