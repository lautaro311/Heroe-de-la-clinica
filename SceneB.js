class SceneB extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }
  create() {
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    negro.on("pointerdown", () => {
      this.scene.sleep(), this.scene.resume("juego");
      if (chat == 1) {
        console.log("xd");
        blanco.setActive(false).setVisible(false);
      }
      var ficha = this.add
        .image(551, 310, "ficha")
        .setScale(0.7)
        .setInteractive();

      var blanco = this.add
        .image(588, 218, "blanco")
        .setOrigin(0, 0)
        .setInteractive()
        .setScale(0.7);

      var selloA = this.add.image(850, 200, "selloA").setInteractive();
      this.input.setDraggable(selloA);
      var selloD = this.add.image(850, 400, "selloD").setInteractive();
      this.input.setDraggable(selloD);
      ficha.input.dropZone = true;

      this.input.on("dragstart", function (pointer, gameObject) {
        console.log("Dou");
      });

      this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      });

      this.input.on("dragend", function (pointer, gameObject) {
        gameObject.clearTint();
      });
      this.input.on("dragenter", function (pointer, gameObject, dropZone) {
        ficha.setTint(0x00ff00);
      });

      this.input.on("dragleave", function (pointer, gameObject, dropZone) {
        console.log("xd");
      });

      this.input.on("drop", function (pointer, gameObject, dropZone) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
        console.log("pelotudo");
        this.scene.add.image(600, 450, "firmaaprovado").setScale(5);

        ficha.clearTint();
      });

      this.input.on("dragend", function (pointer, gameObject, dropped) {
        if (!dropped) {
          gameObject.x = gameObject.input.dragStartX;
          gameObject.y = gameObject.input.dragStartY;
        }
      });
    });
  }
  /* update() {
    var blanco = this.add
      .image(588, 218, "blanco")
      .setOrigin(0, 0)
      .setInteractive()
      .setScale(0.7);
    if (chat == 1) {
      console.log("xd");
      blanco.setActive(false).setVisible(false);
       }
      }*/
}
