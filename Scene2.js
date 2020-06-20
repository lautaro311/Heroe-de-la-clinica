const COLOR_PRIMARY = 0x2e1f18;
const COLOR_LIGHT = 0x000000;
const COLOR_DARK = 0xffffff;

class Scene2 extends Phaser.Scene {
  constructor() {
    super("juego");
  }

  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url:
        "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });

    this.load.image(
      "nextPage",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png"
    );
  }

  create() {
    var clave = {
      cabeza: "cabeza",
    };

    var content = [
      "Doctor: Hola, buenas tardes. \n",
      "Paciente: Me duele un poco la " + clave.cabeza + ".\n",
      "Doctor: ¿Te compraste un kinder?",
    ];

    this.add.image(551, 310, "consultorio").setScale(1.05);

    createTextBox(this, 200, 10, {
      wrapWidth: 700,
    }).start(content, 40);

    var doctor = this.add.image(551, 400, "doctor").setFlip(true);

    var hitbox = this.add
      .image(1050, 293, "hitbox")
      .setAlpha(0.001)
      .setScale(0.6, 0.9)
      .setInteractive({ cursor: "pointer" });

    hitbox.on("pointerdown", () => {
      this.scene.start("popup");
    });
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
  var wrapWidth = GetValue(config, "wrapWidth", 0);
  var fixedWidth = GetValue(config, "fixedWidth", 0);
  var fixedHeight = GetValue(config, "fixedHeight", 0);
  var textBox = scene.rexUI.add
    .textBox({
      x: x,
      y: y,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 1, COLOR_PRIMARY)
        .setStrokeStyle(4, COLOR_LIGHT),

      icon: scene.rexUI.add.roundRectangle(0, 0, 80, 90, 0, COLOR_DARK),

      // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

      action: scene.add
        .image(0, 0, "nextPage")
        .setTint(0xffffff)
        .setVisible(false),

      space: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        icon: 10,
        text: 10,
      },
    })
    .setOrigin(0)
    .layout();

  textBox
    .setInteractive({ cursor: "pointer" })
    .on(
      "pointerdown",
      function () {
        var icon = this.getElement("action").setVisible(false);
        this.resetChildVisibleState(icon);
        if (this.isTyping) {
          this.stop(true);
        } else {
          this.typeNextPage();
        }
      },
      textBox
    )
    .on(
      "pageend",
      function () {
        if (this.isLastPage) {
          return;
        }
      },
      textBox
    );
  //.on('type', function () {
  //})

  return textBox;
};

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
  return scene.rexUI.add.BBCodeText(0, 0, "", {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,

    fontSize: "20px",
    wrap: {
      mode: "word",
      width: wrapWidth,
    },
    maxLines: 2,
  });
};
