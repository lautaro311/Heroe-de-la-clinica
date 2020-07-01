class Scene2 extends Phaser.Scene {
  constructor() {
    super("juego");
  }
  create() {
    this.add.image(551, 310, "consultorio").setScale(1.0);

    var ficha_c = this.add
      .image(239.5, 501, "hitbox2")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(1.05, 1.05)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("Menu3");
      pausa = 2;
    });

    var libreta = this.add
      .image(85.5, 492, "hitbox2")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(1.05, 0.98)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 2;
    });

    this.add.image(600, 500, "bowl").setOrigin(0.5, 0);

    var puerta = this.add
      .image(920, 93, "puerta")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(0.575, 0.565)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
    });

    puerta.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.start("juego2");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
    });

    var pac_01 = this.add
      .image(405.6, 342, "paciente_01")
      .setScale(1.1, 1.12)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    pac_01.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("charla_01");
    });
  }
}
