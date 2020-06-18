class Scene2 extends Phaser.Scene {
    constructor() {
      super('juego');
    }

    preload ()
    {
      //se PUEDEN cargar los recursos de esta misma escena o de cualquier otra
      
      //solo esta se usa en scene1
      this.load.image('logo', 'assets/logo.png');
      this.load.image('reloj', 'assets/reloj.png')
      this.load.image('ground', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });      
      this.load.image('cuchillo', 'assets/cuchillo.png')
      //this.load.image('mushroom', 'assets/mushroom.png');
      this.load.image('tomato', 'assets/tomato.png'); 
      this.load.image('carrot', 'assets/carrot.png');      
    }

    create ()
    {
        //  A simple background for our game
        this.add.image(400, 300, 'consultorio').setScale(2);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        //  Now let's create some ledges
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');


        // The player and its settings
        player = this.physics.add.sprite(100, 450, 'dude');


        //  Player physics properties. Give the little guy a slight bounce.
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);


        //  Input Events
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        }
            

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            //  Give each star a slightly different bounce
            
            child.setBounceY(Phaser.Math.FloatBetween(0.6, 0.9));
            
            child.x += Phaser.Math.FloatBetween(-15, 15);            

            patron = Phaser.Math.FloatBetween(0, 1);
            if (patron < 0.1){
                child.score = 20;
                child.extratime = 10;
                //child.setTint(0xff0000);
                child.setTexture('tomato');
            } 
            else
            {
                if (patron > 0.55){
                    child.score = 15;
                    child.extratime = 5;
                    //child.setTint(0x00ff00);
                    child.setTexture('carrot');
                }
                else{
                    child.score = 10;
                    child.extratime = 0;
                }
            }
        
        });

        bombs = this.physics.add.group();

        //  The score
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //  Collide the player and the stars with the platforms
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bombs, platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        // Inicializacion de variables.
        score = 0;
        gameOver = false;

        // Si no junta las estrellas en 30 segundas --> Game Over
        initialTime = 30
        //timedEvent = this.time.delayedCall(1000, this.onSecond, [], this, true);
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(500, 16, '', { fontSize: '32px', fill: '#000' });

        this.jumps = 0;

        var reloj = this.add.image(400, 100, 'reloj').setScale(0.40).setInteractive();



        // Interactive dude
        var cuchillo = this.add.image(50, 50, 'cuchillo').setScale(0.10);
        cuchillo.setInteractive();
        this.input.setDraggable(cuchillo);
    
        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0x0000ff);            
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.clearTint();
        
        });


        cuchilloStateText = this.add.text(16, 550, '', { fontSize: '32px', fill: '#000' });
        cuchillo.on('pointerover', function () {
            cuchilloStateText.setText('Puntero en el cuchillo'); 
        });
        cuchillo.on('pointerout', function () {            
            cuchilloStateText.setText('Puntero fuera del cuchillo');
        });

        
        reloj.input.dropZone = true

        this.input.on('dragenter', function (pointer, gameObject, dropZone) {

            reloj.setTint(0x00ff00);
    
        });
        
        this.input.on('dragleave', function (pointer, gameObject, dropZone) {

            reloj.clearTint();
    
        });
        
        this.input.on('drop', function (pointer, gameObject, dropZone) {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.setScale(0.2);
            
            gameObject.input.enabled = false;
    
            reloj.clearTint();
    
        });

        this.input.on('dragend', function (pointer, gameObject, dropped) {

            if (!dropped)
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
    
        });

    }


    update ()
    {
        if (gameOver)
        {       
            return
        }
        
        
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down){
            player.setVelocityY(-330);
        }
    }

}