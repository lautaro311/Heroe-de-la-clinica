var config = {
  type: Phaser.AUTO,
  scale: {
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
  //la importante es la primera, que es la que arranca
  scene: [Scene1, Scene2, Scene0, Scene3, SceneA, SceneB],
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
    faringitis: "false",
  },
  pac2: {
    fiebre: "41°",
    cabeza: "true",
    congestion: "true",
    inflamacion: "false",
    ganglios: "false",
    erupcion: "true",
    articulaciones: "true",
    faringitis: "false",
  },
  pac3: {},
};

var pausa;
var chat=0;