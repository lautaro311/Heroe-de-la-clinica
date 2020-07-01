class SceneA extends Phaser.Scene {
  constructor() {
    super("Menu2");
  }
  create() {
    this.add.image(551, 310, "negro").setAlpha(0.4);
    this.add.image(530, 300, "libreta");

    var volverg = this.add
      .image(410, 180, "menug1")
      .setOrigin(0, 0)
      .setScale(1.95, 1)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    volverg.on("pointerdown", () => {
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        this.scene.resume("clock");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        this.scene.resume("clock");
        pausa = 0;
      }
    });

    var ayuda = this.add
      .image(452, 275, "menug2")
      .setOrigin(0, 0)
      .setScale(1.2, 1)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    ayuda.on("pointerdown", () => {
      help = 5;
      this.scene.pause();
      this.scene.run("ayuda_1");
    });

    var vmenu = this.add
      .image(460, 370, "menug3")
      .setOrigin(0, 0)
      .setScale(1.1, 1)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    vmenu.on("pointerdown", () => {
      if (pausa == 2) {
        this.scene.restart("juego");
        this.scene.restart("juego2");
        this.scene.sleep("juego");
        this.scene.sleep("clock");
        pausa = 0;
        this.scene.start("Menu");
      } else if (pausa == 4) {
        this.scene.restart("juego");
        this.scene.restart("juego2");
        this.scene.sleep("juego2");
        this.scene.sleep("clock");
        pausa = 0;
        this.scene.start("Menu");
      }
    });
  }
}
