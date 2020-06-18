class Scene3 extends Phaser.Scene {
    constructor() {
        super('popup');
    }


    create ()
    {
        this.add.image(551, 310, 'consultorio').setScale(1.05).setTint(0x828282);
        this.add.image(150,400, 'doctor').setScale(2); 
        
        var volver = this.add.image(900,350,'play').setScale(0.3).setInteractive({cursor: 'pointer'}).setFlip(true).setTint(0x000000);

        volver.setInteractive ()
        volver.on('pointerdown', () => {this.scene.start('juego');});

    }

}