class Scene5_E extends Phaser.Scene {
  constructor() {
    super("score_E");
  }

  create() {
    this.add.image(551, 310, "consultorio").setScale(1.0);

    this.add.image(551, 310, "scoreE");

    var V = this.add
      .image(555, 520, "hitbox")
      .setRotation(80)
      .setScale(0.2)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    V.on("pointerdown", () => {
      this.scene.restart("juego");
      this.scene.restart("juego2");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.sleep("clock");
      this.scene.start("Menu");
    });

    var E = this.add.image(550, 250, "E").setAlpha(0.01);

    var MB = this.add.image(550, 250, "MB").setAlpha(0.01);

    var B = this.add.image(550, 250, "B").setAlpha(0.01);

    var S = this.add.image(550, 250, "S").setAlpha(0.01);

    var NS = this.add.image(550, 250, "NS").setAlpha(0.01);

    if (score == 1000) {
      E.setAlpha(1);
    } else if (score >= 800) {
      MB.setAlpha(1);
    } else if (score >= 700) {
      B.setAlpha(1);
    } else if (score >= 600) {
      S.setAlpha(1);
    } else {
      NS.setAlpha(1);
    }
  }
}
