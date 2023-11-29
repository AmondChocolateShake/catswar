

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    backgroundColor:0xffffff
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {
        this.load.spritesheet('black', '../resources/Cats/black_0.png', 32,32);

  }
  


  function create() {
    // 게임 오브젝트 생성 및 초기화
    var black = this.add.sprite(600,300, 'black');
    var x = 0;
    // for(var i = 0 ; i < 4 ;i++){
    //     cropSprite(black, x, 32, 32, 32);
    //     x += 32;
    //     console.log(x)
    // }

    // function cropSprite(sprite, x, y, width, height) {
    //     var cropRect = new Phaser.Geom.Rectangle(x,y,width,height);
    //     sprite.setCrop(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
    // }

    var anims = this.anims;
    var cropRect = new Phaser.Geom.Rectangle(0,32,32,32);
    
    black.setCrop(0,32,32,64);

    anims.create({
        key : 'cat1',
        frames : [
            { key : 'black', frame : 0 , duration : 200},
        ],
        frameRate : 10,
        repeat : -1
    })

    black.setCrop(cropRect);

    black.play('cat1');

    // anims.create({
    //     key : 'cat2',
    //     frames : [
    //         { key : black.setCrop(32,32,32,32), frame : 0 , duration : 200},
    //     ],
    //     frameRate : 10,
    //     repeat : -1
    // })
    // anims.create({
    //     key : 'cat3',
    //     frames : [
    //         { key : black.setCrop(64,32,32,32), frame : 0 , duration : 200},
    //     ],
    //     frameRate : 10,
    //     repeat : -1
    // })
    // anims.create({
    //     key : 'cat4',
    //     frames : [
    //         { key : black.setCrop(96,32,32,32), frame : 0 , duration : 200},
    //     ],
    //     frameRate : 10,
    //     repeat : -1
    // })
    
  }
  
  function update() {
    // 게임 루프에서 발생하는 업데이트 로직
    

  }