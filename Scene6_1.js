class Scene6_1 extends Phaser.Scene {
  constructor() {
    super("ayuda_1");
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
    this.add.image(551, 310, "ayuda_pag1").setInteractive();

    var next = this.add
      .image(700, 508, "blanco")
      .setOrigin(0)
      .setScale(0.8, 1)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.01);

    next.on("pointerdown", () => {
      this.scene.run("ayuda_2");
      this.scene.sleep();
    });
  }
}
