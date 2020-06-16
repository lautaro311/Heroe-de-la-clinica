class Scene1 extends Phaser.Scene {
    constructor() {
        super("Menu")
    }
}

function preload () 
{
    this.load.image('Clinica', 'assets/clinica.png')
    
}

function create () 
{
 this.add.image(400, 300, 'Clinica');

}