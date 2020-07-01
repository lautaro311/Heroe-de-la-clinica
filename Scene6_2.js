class Scene6_2 extends Phaser.Scene {
  constructor() {
    super("ayuda_2");
  }

  create() {
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.3)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (help == 5) {
        console.log("resumo");
        this.scene.resume("Menu2");
      }
    });
    this.add.image(551, 310, "ayuda_pag2").setInteractive();

    var next = this.add
      .image(700, 508, "blanco")
      .setOrigin(0)
      .setScale(0.8, 1)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.01);

    next.on("pointerdown", () => {
      this.scene.run("ayuda_3");
      this.scene.sleep();
    });

    var back = this.add
      .image(358, 508, "blanco")
      .setOrigin(0)
      .setScale(0.8, 1)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.01);

    back.on("pointerdown", () => {
      this.scene.run("ayuda_1");
      this.scene.sleep();
    });
  }
}
