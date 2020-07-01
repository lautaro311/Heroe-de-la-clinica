class Scene4 extends Phaser.Scene {
  constructor() {
    super("juego2");
  }

  create() {
    var gvar = 0;
    var evar = 0;
    var lvar = 0;
    var tvar = 0;
    this.add.image(551, 310, "camilla");

    var ficha_c = this.add
      .image(241.5, 492.5, "hitbox2")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(1.05, 1.05)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("Menu3");
      pausa = 4;
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
      pausa = 4;
    });

    var puerta = this.add
      .image(10, 90, "puerta")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(0.575, 0.565)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
    });

    puerta.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.start("juego");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
    });

    //////// Herramientas ////////

    this.add.image(450, 545, "guantes");

    var guantes_s = this.add
      .image(450, 545, "guantes_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    guantes_s.on("pointerdown", () => {
      if (gvar == 0) {
        guantes_s.setTint(0xffff00);
        gvar = 1;
        evar = 0;
        lvar = 0;
        tvar = 0;
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_01
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (gvar == 1) {
        guantes_s.clearTint();
        gvar = 0;
        pac_01.disableInteractive().setAlpha(0.01);
      }
    });

    guantes_s.on("pointerover", () => {
      guantes_s.setAlpha(1);
    });

    guantes_s.on("pointerout", () => {
      if (gvar == 0) {
        guantes_s.setAlpha(0.01);
      }
    });

    this.add.image(600, 550, "estetoscopio");

    var esteto_s = this.add
      .image(600, 550, "estetoscopio_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    esteto_s.on("pointerdown", () => {
      if (evar == 0) {
        esteto_s.setTint(0xffff00);
        gvar = 0;
        evar = 1;
        lvar = 0;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_01
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (evar == 1) {
        esteto_s.clearTint();
        evar = 0;
        pac_01.disableInteractive().setAlpha(0.01);
      }
    });

    esteto_s.on("pointerover", () => {
      esteto_s.setAlpha(1);
    });

    esteto_s.on("pointerout", () => {
      if (evar == 0) {
        esteto_s.setAlpha(0.01);
      }
    });

    this.add.image(750, 550, "linterna");

    var linterna_s = this.add
      .image(750, 550, "linterna_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    linterna_s.on("pointerdown", () => {
      if (lvar == 0) {
        linterna_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 1;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_01
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (lvar == 1) {
        linterna_s.clearTint();
        lvar = 0;
        pac_01.disableInteractive().setAlpha(0.01);
      }
    });

    linterna_s.on("pointerover", () => {
      linterna_s.setAlpha(1);
    });

    linterna_s.on("pointerout", () => {
      if (lvar == 0) {
        linterna_s.setAlpha(0.01);
      }
    });

    this.add.image(920, 545, "termometro");

    var termometro_s = this.add
      .image(920, 545, "termometro_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    termometro_s.on("pointerdown", () => {
      if (tvar == 0) {
        termometro_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 0;
        tvar = 1;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        pac_01
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (tvar == 1) {
        termometro_s.clearTint();
        tvar = 0;
        pac_01.disableInteractive().setAlpha(0.01);
      }
    });

    termometro_s.on("pointerover", () => {
      termometro_s.setAlpha(1);
    });

    termometro_s.on("pointerout", () => {
      if (tvar == 0) {
        termometro_s.setAlpha(0.01);
      }
    });
    this.add.image(700, 283, "paciente_01a");

    var pac_01 = this.add.image(700, 283, "paciente_01a_s").setAlpha(0.01);

    pac_01.on("pointerdown", () => {
      if (gvar == 1) {
        gang = 1;
        guantes_s.clearTint().setAlpha(0.01);
        pac_01.disableInteractive().setAlpha(0.01);
        gvar = 0;
        this.scene.pause();
        this.scene.run("diagG");
      }
      if (evar == 1) {
        far = 1;
        esteto_s.clearTint().setAlpha(0.01);
        pac_01.disableInteractive().setAlpha(0.01);
        evar = 0;
        this.scene.pause();
        this.scene.run("diagE");
      }
      if (lvar == 1) {
        inf = 1;
        linterna_s.clearTint().setAlpha(0.01);
        pac_01.disableInteractive().setAlpha(0.01);
        lvar = 0;
        this.scene.pause();
        this.scene.run("diagL");
      }
      if (tvar == 1) {
        temp = 1;
        termometro_s.clearTint().setAlpha(0.01);
        pac_01.disableInteractive().setAlpha(0.01);
        tvar = 0;
        this.scene.pause();
        this.scene.run("diagT");
      }
    });
  }
}
