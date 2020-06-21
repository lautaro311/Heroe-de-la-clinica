class Scene0 extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {
    this.load.image("cre_scene", "assets/scene0.png");
  }
  create() {
    this.add.image(551, 310, "cre_scene");

    var volver = this.add
      .image(998, 49, "hitbox")
      .setAlpha(0.0003)
      .setInteractive({ useHandCursor: true })
      .setScale(0.85, 0.1);

    volver.on("pointerdown", () => {
      this.scene.start("Menu");
    });
  }
}
