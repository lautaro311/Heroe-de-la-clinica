class Scene1 extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  preload() {
    this.load.image("negro", "assets/negro.png");
    this.load.image("blanco", "assets/blanco.png");
    this.load.image("consultorio", "assets/consultorio.png");
    this.load.image("play", "assets/play.png");
    this.load.image("inicio", "assets/inicio.png");

    this.load.image("libreta", "assets/libreta_abierta.png");
    this.load.image("ficha", "assets/ficha.png");
    this.load.image("ficha_c", "assets/ficha.png");
    this.load.image("credits", "assets/creditos.png");

    this.load.image("menug1", "assets/menug1.png");
    this.load.image("menug2", "assets/menug2.png");
    this.load.image("menug3", "assets/menug3.png");

    this.load.image("selloA", "assets/selloA.png");
    this.load.image("selloD", "assets/selloD.png");
    //this.load.image("firmaA", "assets/menug3.png");
    //this.load.image("firmaD", "assets/menug3.png");

    this.load.image("paciente_01", "assets/paciente_01.png");

    this.load.image("hitbox", "assets/hitbox.png");
  }

  create() {
    this.add.image(551, 310, "inicio").setScale(2);

    var play = this.add
      .image(551, 210, "play")
      .setScale(0.45)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var credits = this.add
      .image(551, 410, "credits")
      .setScale(0.6)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    play.on("pointerdown", () => {
      //console.log(paciente.pac_1.fiebre);
      this.scene.start("juego");
    });

    credits.on("pointerdown", () => {
      this.scene.start("creditos");
    });
  }
}
