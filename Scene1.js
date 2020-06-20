class Scene1 extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  preload() {
    this.load.image("consultorio", "assets/consultorio.png");
    this.load.image("play", "assets/play.png");
    this.load.image("inicio", "assets/inicio.png");
    this.load.image("doctor", "assets/doctor.png");

    this.load.image("hitbox", "assets/hitbox.png");
  }

  create() {
    this.add.image(551, 310, "inicio").setScale(2);

    var play = this.add
      .image(551, 310, "play")
      .setScale(0.45)
      .setTint(0x000000)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    play.setInteractive();
    play.on("pointerdown", () => {
      console.log("iniciando juego");
      this.scene.start("juego");
    });
  }
}
