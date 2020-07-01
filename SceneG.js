class SceneG extends Phaser.Scene {
  constructor() {
    super("diagT");
  }
  create() {
    var tiempo = 0;
    this.add
      .text(190, 120, "38.9, una alta temperatura.", {
        fontFamily: "font1",
        fontSize: "12px",
      })
      .setTint(0x000000);
    this.gameTimer = this.time.addEvent({
      delay: 2000,
      callback: function () {
        tiempo = tiempo + 1;
        console.log(tiempo);
        if ((this.tiempo = 1)) {
          this.tiempo = 0;
          this.scene.sleep();
          this.scene.resume("juego2");
        }
      },
      callbackScope: this,
      loop: true,
    });
  }
}
