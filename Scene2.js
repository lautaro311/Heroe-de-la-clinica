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

    var libreta = this.add
      .image(100, 550, "libreta")
      .setScale(0.4)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
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
      chat = chat += 1;
      console.log("chat= " + chat);
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
