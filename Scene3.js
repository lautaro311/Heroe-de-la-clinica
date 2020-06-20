var adjectives = [
  "adamant",
  "adroit",
  "amatory",
  "animistic",
  "antic",
  "arcadian",
  "baleful",
  "bellicose",
  "bilious",
  "boorish",
  "calamitous",
  "caustic",
  "cerulean",
  "comely",
  "concomitant",
  "contumacious",
  "corpulent",
  "crapulous",
  "defamatory",
  "didactic",
  "dilatory",
  "dowdy",
  "efficacious",
  "effulgent",
  "egregious",
  "endemic",
  "equanimous",
  "execrable",
  "fastidious",
  "feckless",
  "fecund",
  "friable",
  "fulsome",
  "garrulous",
  "guileless",
  "gustatory",
  "heuristic",
  "histrionic",
  "hubristic",
  "incendiary",
  "insidious",
  "insolent",
  "intransigent",
  "inveterate",
  "invidious",
  "irksome",
  "jejune",
  "jocular",
  "judicious",
  "lachrymose",
  "limpid",
  "loquacious",
  "luminous",
  "mannered",
  "mendacious",
  "meretricious",
  "minatory",
  "mordant",
  "munificent",
  "nefarious",
  "noxious",
  "obtuse",
  "parsimonious",
  "pendulous",
  "pernicious",
  "pervasive",
  "petulant",
  "platitudinous",
  "precipitate",
  "propitious",
  "puckish",
  "querulous",
  "quiescent",
  "rebarbative",
  "recalcitant",
  "redolent",
  "rhadamanthine",
  "risible",
  "ruminative",
  "sagacious",
  "salubrious",
  "sartorial",
  "sclerotic",
  "serpentine",
  "strident",
  "taciturn",
  "tenacious",
  "tremulous",
  "trenchant",
  "turbulent",
  "turgid",
  "ubiquitous",
  "uxorious",
  "verdant",
  "voluble",
  "voracious",
  "wheedling",
  "withering",
  "zealous",
];
var nouns = [
  "ninja",
  "chair",
  "pancake",
  "statue",
  "unicorn",
  "rainbows",
  "laser",
  "senor",
  "bunny",
  "captain",
  "nibblets",
  "cupcake",
  "carrot",
  "gnomes",
  "glitter",
  "potato",
  "salad",
  "toejam",
  "curtains",
  "beets",
  "toilet",
  "exorcism",
  "stick figures",
  "mermaid eggs",
  "sea barnacles",
  "dragons",
  "jellybeans",
  "snakes",
  "dolls",
  "bushes",
  "cookies",
  "apples",
  "ice cream",
  "ukulele",
  "kazoo",
  "banjo",
  "opera singer",
  "circus",
  "trampoline",
  "carousel",
  "carnival",
  "locomotive",
  "hot air balloon",
  "praying mantis",
  "animator",
  "artisan",
  "artist",
  "colorist",
  "inker",
  "coppersmith",
  "director",
  "designer",
  "flatter",
  "stylist",
  "leadman",
  "limner",
  "make-up artist",
  "model",
  "musician",
  "penciller",
  "producer",
  "scenographer",
  "set decorator",
  "silversmith",
  "teacher",
  "auto mechanic",
  "beader",
  "bobbin boy",
  "clerk of the chapel",
  "filling station attendant",
  "foreman",
  "maintenance engineering",
  "mechanic",
  "miller",
  "moldmaker",
  "panel beater",
  "patternmaker",
  "plant operator",
  "plumber",
  "sawfiler",
  "shop foreman",
  "soaper",
  "stationary engineer",
  "wheelwright",
  "woodworkers",
];

class Scene3 extends Phaser.Scene {
  constructor() {
    super("popup");
  }

  create() {
    this.add.image(551, 310, "consultorio").setScale(1.05).setTint(0x828282);
    this.add.image(150, 400, "doctor").setScale(2);

    var volver = this.add
      .image(900, 350, "play")
      .setScale(0.3)
      .setInteractive({ cursor: "pointer" })
      .setFlip(true)
      .setTint(0x000000);

    volver.setInteractive();
    volver.on("pointerdown", () => {
      this.scene.start("juego");
    });

    var group = this.add.group();

    group.classType = Phaser.GameObjects.Text;

    //  Create some random Text strings

    for (var i = 0; i < 32; i++) {
      var x = Phaser.Math.Between(-100, 700);
      var y = Phaser.Math.Between(0, 550);
      var str =
        Phaser.Math.RND.pick(adjectives) + " " + Phaser.Math.RND.pick(nouns);
      var font = { font: "24px Arial" };
      var text = group.create(x, y, str, font);

      text.setInteractive(
        new Phaser.Geom.Rectangle(0, 0, text.width, text.height),
        Phaser.Geom.Rectangle.Contains
      );
    }

    //  Input Event listeners

    this.input.on("gameobjectover", function (pointer, gameObject) {
      gameObject.setTint(0xff0000, 0xff0000, 0xffff00, 0xff00ff);
    });

    this.input.on("gameobjectout", function (pointer, gameObject) {
      gameObject.clearTint();
    });
  }
}
