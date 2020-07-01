class Scene1 extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  preload() {
    this.load.image("negro", "assets/negro.png");
    this.load.image("blanco", "assets/blanco.png");
    this.load.image("consultorio", "assets/consultorio.png");
    this.load.image("camilla", "assets/camilla.jpg");

    this.load.image("play", "assets/play.png");
    this.load.image("inicio", "assets/inicio.png");
    this.load.image("credits", "assets/creditos.png");
    this.load.image("ayuda", "assets/ayuda.png");

    this.load.image("ayuda_pag1", "assets/ayuda_pag1.png");
    this.load.image("ayuda_pag2", "assets/ayuda_pag2.png");
    this.load.image("ayuda_pag3", "assets/ayuda_pag3.png");

    this.load.image("scoreE", "assets/scoreE.png");
    this.load.image("scoreF", "assets/scoreF.png");

    this.load.image("libreta", "assets/libreta.png");
    this.load.image("ficha", "assets/ficha.png");
    this.load.image("guantes", "assets/guantes.png");
    this.load.image("guantes_s", "assets/guantes_s.png");
    this.load.image("reloj", "assets/reloj.png");
    this.load.image("arena", "assets/arena.png");
    this.load.image("arena2", "assets/arena2.png");
    this.load.image("linterna", "assets/linterna.png");
    this.load.image("linterna_s", "assets/linterna_s.png");
    this.load.image("estetoscopio", "assets/estetoscopio.png");
    this.load.image("estetoscopio_s", "assets/estetoscopio_s.png");
    this.load.image("termometro", "assets/termometro.png");
    this.load.image("termometro_s", "assets/termometro_s.png");
    this.load.image("bowl", "assets/bowl.png");
    this.load.image("chupetin", "assets/chupetin.png");

    this.load.image("puerta", "assets/puerta.png");
    this.load.image("tilde", "assets/tilde.png");
    //this.load.image("reload", "assets/reload.png");

    this.load.image("menug1", "assets/menug1.png");
    this.load.image("menug2", "assets/menug2.png");
    this.load.image("menug3", "assets/menug3.png");

    this.load.image("selloA", "assets/selloA.png");
    this.load.image("selloD", "assets/selloD.png");
    this.load.image("sano", "assets/sano.png");
    this.load.image("enfermo", "assets/enfermo.png");

    this.load.image("paciente_01", "assets/paciente_01.png");
    this.load.image("paciente_01a", "assets/paciente_01a.png");
    this.load.image("paciente_01a_s", "assets/paciente_01a_s.png");

    this.load.image("hitbox", "assets/hitbox.png");
    this.load.image("hitbox2", "assets/hitbox2.png");

    this.load.image("E", "assets/E.png");
    this.load.image("B", "assets/B.png");
    this.load.image("MB", "assets/MB.png");
    this.load.image("S", "assets/S.png");
    this.load.image("NS", "assets/NS.png");
  }

  create() {
    this.add.image(551, 310, "inicio");

    var play = this.add
      .image(781, 496, "play")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var credits = this.add
      .image(420, 561, "credits")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var ayuda = this.add
      .image(141, 492, "ayuda")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    play.on("pointerdown", () => {
      this.scene.start("juego");
      this.scene.run("clock");
    });

    play.on("pointerover", () => {
      play.setAlpha(1);
    });
    play.on("pointerout", () => {
      play.setAlpha(0.01);
    });

    credits.on("pointerdown", () => {
      this.scene.start("creditos");
    });
    credits.on("pointerover", () => {
      credits.setAlpha(1);
    });
    credits.on("pointerout", () => {
      credits.setAlpha(0.01);
    });

    ayuda.on("pointerdown", () => {
      pausa = 1;
      this.scene.run("ayuda_1");
    });
    ayuda.on("pointerover", () => {
      ayuda.setAlpha(1);
    });
    ayuda.on("pointerout", () => {
      ayuda.setAlpha(0.01);
    });
  }
}
