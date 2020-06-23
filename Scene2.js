var pausa = 0;
class Scene2 extends Phaser.Scene {
  constructor() {
    super("juego");
  }

  preload() {
    this.load.image("arrow", "assets/arrow.png");
  }
  create() {
    this.add.image(551, 310, "consultorio").setScale(1.05);

    var chat = 0;

    var ficha_c = this.add
      .image(260, 550, "ficha_c")
      .setScale(0.2, 0.13)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("Menu3");
    });

    var libreta = this.add
      .image(100, 550, "libreta")
      .setScale(0.5, 0.3)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      //pac_01.destroy();
      this.scene.run("Menu2");
    });

    var pac_01 = this.add
      .image(550, 300, "paciente_01")
      .setScale(0.25)
      .setFlip(true)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    pac_01.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("charla_01");
    });

    this.arrow = this.add
      .sprite(700, 300, "arrow")
      .setOrigin(1, 1)
      .setScale(0.2);
  }

  update() {
    this.arrow.rotation += 0.1;
  }
}
