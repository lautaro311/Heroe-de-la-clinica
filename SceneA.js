class SceneA extends Phaser.Scene {
  constructor() {
    super("Menu2");
  }
  create() {
    this.add.image(551, 310, "negro").setAlpha(0.4);
    this.add.image(530, 300, "libreta").setScale(2);

    var vmenu = this.add
      .image(452, 420, "menug3")
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });

    vmenu.on("pointerdown", () => {
      this.scene.restart("juego");
      this.scene.start("Menu");
    });

    var volverg = this.add
      .image(452, 110, "menug1")
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });

    volverg.on("pointerdown", () => {
      this.scene.sleep(), this.scene.resume("juego");
      pausa= pausa += 1;
    });

    var ayuda = this.add
      .image(452, 260, "menug2")
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });

    ayuda.on("pointerdown", () => {
      this.scene.start("ayuda");
    });
  }
}
