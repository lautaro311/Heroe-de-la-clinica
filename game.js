var config = {
    type: Phaser.AUTO,
    scale:{
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1102,
        height: 620,
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    //la importante es la primera, que es la que arranca
    scene: [Scene1,Scene2]
};

var game = new Phaser.Game(config);
var cuchilloStateText;
var play;
var cuchillo
var score;
var gameOver;
var reloj;
var player;
var stars;
var bombs;
var platforms;
var cursors;
var scoreText;
var dudeStateText;

var timedEvent;
var initialTime;
var timeText;

var patron;

var hongo;