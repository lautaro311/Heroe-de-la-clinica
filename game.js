var config = {
    type: Phaser.AUTO,
    width: 800 ,
    heigth: 600 ,
    physics: {
        default: 'arcade' ,
        arcade: {
            gravity: { y: 300} ,
            debug: false 
        } 
    } ,
    scene: [Scene1,]
} ;

var Doctor;
var piso;
var apretar;

var game = new Phaser.Game(config);

