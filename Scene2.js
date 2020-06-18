class Scene2 extends Phaser.Scene {
    constructor() {
        super('juego');
    }

    create ()
    {
    this.add.image(551, 310, 'consultorio').setScale(1.05);

    var doctor = this.add.image(551,400, 'doctor').setInteractive({cursor: 'pointer'});

    doctor.setInteractive()
    doctor.on('pointerdown', () => {this.scene.start('popup');});                
    }

}