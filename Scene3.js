const COLOR_PRIMARY = 0x2e1f18;
const COLOR_LIGHT = 0x000000;
const COLOR_DARK = 0xffffff;

class Scene3 extends Phaser.Scene {
  constructor() {
    super("charla_01");
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
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.3)
      .setInteractive();

    var clave = {
      cabeza: "cabeza",
    };

    var boton = this.add
      .image(800, 200, "hitbox")
      .setAlpha(2)
      .setInteractive({ cursor: "pointer" });

    boton.on("pointerdown", () => {
      //this.scene.restart("Menu3");
      this.scene.restart("charla_01");
    });

    var content = [
      "Doctor: Hola, buenas tardes. \n",
      "Paciente: Me duele un poco la " + clave.cabeza + ".\n",
      "Doctor: ¿Te compraste un kinder?",
    ];

    createTextBox(this, 200, 10, {
      wrapWidth: 700,
    }).start(content, 40);

    negro.on("pointerdown", () => {
      this.scene.sleep(), this.scene.resume("juego");
    });
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
  var termino = 1;
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
          if (chat == 0) {
            chat = 1;
            console.log(chat);
          }
          return;
        }
      },
      textBox
    );
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
