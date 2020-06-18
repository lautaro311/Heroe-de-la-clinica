class Scene4 extends Phaser.Scene {

    constructor ()
    {
        super('popup2');

        this.hotdog;
    }

    create ()
    {
        var graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRect(0, 0, 800, 600);

        this.add.text(10, 30, 'Scene B. Press arrows to move. Space to change Scene.', { font: '16px Courier', fill: '#00ff00' });

        var hotdog = this.add.image(400, 300, 'hotdog').setTint(0xff0000);

        this.input.keyboard.addCapture('UP, DOWN, LEFT, RIGHT');

        this.input.keyboard.on('keydown_UP', function (event) {

            hotdog.y -= 4;

        }, this);

        this.input.keyboard.on('keydown_DOWN', function (event) {

            hotdog.y += 4;

        }, this);

        this.input.keyboard.on('keydown_LEFT', function (event) {

            console.log('B left');
            hotdog.x -= 4;

        }, this);

        this.input.keyboard.on('keydown_RIGHT', function (event) {

            console.log('B right');
            hotdog.x += 4;

        }, this);

        this.input.keyboard.once('keydown_SPACE', function (event) {

            this.scene.stop();
            this.scene.resume('sceneA');

        }, this);

        this.hotdog = hotdog;
    }

}