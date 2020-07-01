var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1102,
    height: 620,
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [
    Scene1,
    Scene2,
    Scene0,
    Scene3,
    Scene4,
    SceneA,
    SceneB,
    SceneC,
    SceneD,
    SceneE,
    SceneF,
    SceneG,
    Scene6_1,
    Scene6_2,
    Scene6_3,
    Scene5_E,
    Scene5_F,
  ],
};

var game = new Phaser.Game(config);

const pac = {
  pac1: {
    fiebre: "41°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "true",
  },
  /*pac2: {
    fiebre: "41°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "false",
  },
  pac3: {},*/
};

var pausa = 0;
var help = 0;
var chat = 0;

var score = 240;

var blanco = 0;

var temp = 0;
var cab = 0;
var con = 0;
var inf = 0;
var gang = 0;
var sar = 0;
var dol = 0;
var far = 0;

var finish = 0;
