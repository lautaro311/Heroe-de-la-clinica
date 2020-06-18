class Scene1 extends Phaser.Scene {
    constructor() {
      super('Menu');
    }

    preload()
    {
        this.load.image('consultorio', 'assets/consultorio.png');
        this.load.image('play', 'assets/play.png')
    }

    create()
    {

        this.add.image(400, 300, 'consultorio').setScale(2);

        var play = this.add.image(400, 300, 'play').setScale(0.25).setTint(0x000000).setInteractive({cursor: 'pointer'});

        play.setInteractive()
        play.on('pointerdown', () => {  console.log('iniciando juego');
                                        this.scene.start('juego');
                                      } );


    }



}