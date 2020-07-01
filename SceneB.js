class SceneB extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    var selloPS = 0;
    var selloPE = 0;
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    var ficha = this.add
      .image(481, 310, "ficha")
      .setScale(0.99)
      .setInteractive();

    var blanco1 = this.add
      .image(577, 272, "blanco")
      .setScale(2, 1.1)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco2 = this.add
      .image(588, 312, "blanco")
      .setScale(0.9)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco3 = this.add
      .image(588, 343, "blanco")
      .setScale(0.93)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco4 = this.add
      .image(588, 372, "blanco")
      .setScale(0.9, 0.88)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco5 = this.add
      .image(588, 400, "blanco")
      .setScale(0.87)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco6 = this.add
      .image(588, 427, "blanco")
      .setScale(0.86)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco7 = this.add
      .image(588, 452, "blanco")
      .setScale(0.82)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });
    var blanco8 = this.add
      .image(588, 478, "blanco")
      .setScale(0.9)
      .setOrigin(0, 0)
      .setInteractive({ cursor: "pointer" });

    blanco1.on("pointerdown", () => {
      if (temp == 1) {
        blanco1.setAlpha(0.1);
        temp = 0;
        blanco1.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco2.on("pointerdown", () => {
      if (cab == 1) {
        blanco2.setAlpha(0.1);
        cab = 0;
        blanco2.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco3.on("pointerdown", () => {
      if (con == 1) {
        blanco3.setAlpha(0.1);
        con = 0;
        blanco3.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco4.on("pointerdown", () => {
      if (inf == 1) {
        blanco4.setAlpha(0.1);
        inf = 0;
        blanco4.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco5.on("pointerdown", () => {
      if (gang == 1) {
        blanco5.setAlpha(0.01);
        gang = 0;
        blanco5.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco6.on("pointerdown", () => {
      if (sar == 1) {
        blanco6.setAlpha(0.01);
        sar = 0;
        blanco6.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco7.on("pointerdown", () => {
      if (dol == 1) {
        blanco7.setAlpha(0.01);
        dol = 0;
        blanco7.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });
    blanco8.on("pointerdown", () => {
      if (far == 1) {
        blanco8.setAlpha(0.01);
        far = 0;
        blanco8.disableInteractive();
        score += 20;
        if (finish == 0) {
          finish = 1;
        }
      }
    });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        pausa = 0;
      }
    });

    var selloE = this.add
      .image(850, 400, "selloD")
      .setInteractive({ cursor: "pointer" });

    var enfermo = this.add.image(550, 220, "enfermo").setAlpha(0.01);

    selloE.on("pointerdown", () => {
      if (selloPE == 0) {
        selloPE = 1;
        selloPS = 0;
        selloS.clearTint();
        selloE.setTint(0x7f7f7f);
      } else if (selloPE == 1) {
        selloPE = 0;
        selloE.clearTint();
      }
    });
    selloE.on("pointerover", () => {
      if (selloPE == 0) {
        selloE.setTint(0xff0000);
      }
    });
    selloE.on("pointerout", () => {
      if (selloPE === 0) {
        selloE.clearTint();
      }
    });

    var selloS = this.add
      .image(850, 200, "selloA")
      .setInteractive({ cursor: "pointer" });

    var sano = this.add.image(550, 220, "sano").setAlpha(0.01);

    selloS.on("pointerdown", () => {
      if (selloPS == 0) {
        selloPS = 1;
        selloPE = 0;
        selloE.clearTint();
        selloS.setTint(0x7f7f7f);
      } else if (selloPS == 1) {
        selloPS = 0;
        selloS.clearTint();
      }
    });
    selloS.on("pointerover", () => {
      if (selloPS == 0) {
        selloS.setTint(0x00ff00);
      }
    });
    selloS.on("pointerout", () => {
      if (selloPS === 0) {
        selloS.clearTint();
      }
    });

    var flecha = this.add
      .image(1000, 55, "tilde")
      .setAlpha(0)
      .setScale(2)
      .setInteractive({ cursor: "pointer" });
    flecha.on("pointerdown", () => {
      if (selloPE == 2) {
        this.scene.start("score_E");
      } else if (selloPS == 2) {
        this.scene.start("score_F");
      }
    });

    ficha.on("pointerdown", () => {
      if (selloPS === 1) {
        if (finish == 1) {
          selloPS = 2;
          sano.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
        }
      } else if (selloPE == 1) {
        if (finish == 1) {
          selloPE = 2;
          enfermo.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
          score += 600;
        }
      }
    });
  }
}
