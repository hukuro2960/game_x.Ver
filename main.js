
var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'sceneA' });
    },

    preload: function ()
    {
        console.log("preload!!");
        // プレイヤー
        this.load.image("kuma", "./assets/kuma.png");
        // 地面グループ
        this.load.image("ground", "./assets/ground.png");
        this.load.image("ground_2", "./assets/ground_2.png");
        //アイテムグループ
        this.load.image("mochi", "./assets/mochi.png");
        this.load.image("choco_1", "./assets/choco_1.png");
        // 物体グループ
        this.load.image("sign_1", "./assets/sign_1.png");
        this.load.image("sign_2", "./assets/sign_2.png");
        this.load.image("sign_3", "./assets/sign_3.png");
        this.load.image("stone_1", "./assets/stone_1.png");
        this.load.image("wood", "./assets/wood.png");
        this.load.image("car", "./assets/car.png");
        this.load.image("flag", "./assets/flag.png");
        this.load.image("house", "./assets/house.png");
        this.load.image("pillar", "./assets/pillar.png");
        this.load.image("post", "./assets/post.png");
        this.load.image("board", "./assets/board.png");
        // NPCグループ
        this.load.image("enemy_1", "./assets/enemy_1.png");
        this.load.image("bukakuma", "./assets/bukakuma.png");
        this.load.image("obasan_1", "./assets/obasan_1.png");
        this.load.image("obasan_2", "./assets/obasan_2.png");
        this.load.image("obasan_3", "./assets/obasan_3.png");
        // 背景グループ
        this.load.image("sky", "./assets/sky.png");
        this.load.image("grass", "./assets/grass.png");
        this.load.image("tree_1", "./assets/tree_1.png");
        this.load.image("tree_2", "./assets/tree_2.png");
        this.load.image("tree_3", "./assets/tree_3.png");
        this.load.image("flour_1", "./assets/flour_1.png");
        this.load.image("flour_2", "./assets/flour_2.png");
        this.load.image("flour_3", "./assets/flour_3.png");
        this.load.image("flour_4", "./assets/flour_4.png");
        this.load.image("flour_5", "./assets/flour_5.png");
        this.load.image("butterfly_blue", "./assets/butterfly_blue.png");
        this.load.image("butterfly_red", "./assets/butterfly_red.png");
        this.load.image("butterfly_yellow", "./assets/butterfly_yellow.png");
        this.load.image("building_1", "./assets/building_1.png");
        this.load.image("building_2", "./assets/building_2.png");
        this.load.image("building_3", "./assets/building_3.png");
        this.load.image("building_4", "./assets/building_4.png");
        this.load.image("building_5", "./assets/building_5.png");
        this.load.image("building_6", "./assets/building_6.png");
        this.load.image("building_7", "./assets/building_7.png");
        this.load.image("building_8", "./assets/building_8.png");
        this.load.image("dialog", "./assets/dialog.png");
        // 透明壁
        this.load.image("wall", "./assets/wall.png");
        this.load.image("wall_2", "./assets/wall_2.png");
        this.load.image("wall_3", "./assets/wall_3.png");
    },

    create: function ()
    {
        console.log("create!!");

        this.cameras.main.setBounds(0, -300, 2880, 320*2);
        this.physics.world.setBounds(0, 0, 2880, 320*2);
        this.add.image(2880/2, D_HEIGHT/2, "sky");// 画面の中心に表示します

        // 背景グループ
        let backgroundGroup = this.physics.add.group();// 背景をまとめる
        // 0～
        backgroundGroup.create(70, 111, "tree_2").setDisplaySize(150, 287);// 木
        backgroundGroup.create(70, 115, "grass").setDisplaySize(100, 100);// 草
        backgroundGroup.create(140, 115, "grass").setDisplaySize(50, 50).flipX=false;// 草
        backgroundGroup.create(210, 115, "grass").setDisplaySize(50, 50);// 草
        backgroundGroup.create(250, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(320, 115, "grass").setDisplaySize(50, 50).flipX=false;// 草
        backgroundGroup.create(350, 115, "grass").setDisplaySize(40, 40);// 草
        backgroundGroup.create(365, 115, "flour_4").setDisplaySize(25, 23);// 花
        backgroundGroup.create(370, 115, "grass").setDisplaySize(30, 30).flipX=false;// 草
        backgroundGroup.create(380, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(420, 115, "grass").setDisplaySize(40, 40).flipX=false;// 草
        backgroundGroup.create(440, 115, "grass").setDisplaySize(30, 30);// 草
        // 480～
        backgroundGroup.create(480, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(500, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(520, 115, "grass").setDisplaySize(100, 100);// 草
        backgroundGroup.create(590, 115, "grass").setDisplaySize(50, 50);// 草
        backgroundGroup.create(600, 115, "flour_1").setDisplaySize(25, 23).flipX=false;;// 花　
        backgroundGroup.create(620, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(660, 115, "grass").setDisplaySize(30, 30);// 草
        backgroundGroup.create(670, 115, "flour_4").setDisplaySize(25, 23).flipX=false;;// 花
        backgroundGroup.create(690, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(710, 115, "grass").setDisplaySize(50, 50).flipX=false;// 草
        backgroundGroup.create(720, 115, "flour_3").setDisplaySize(20, 36);// 花
        backgroundGroup.create(730, 115, "flour_4").setDisplaySize(25, 23);// 花
        backgroundGroup.create(750, 115, "grass").setDisplaySize(30, 30);// 草
        backgroundGroup.create(780, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(800, 115, "grass").setDisplaySize(50, 50);// 草
        backgroundGroup.create(800, 115, "flour_2").setDisplaySize(20, 36).flipX=false;// 花
        backgroundGroup.create(820, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(920, 115, "flour_2").setDisplaySize(20, 36).flipX=false;// 花
        backgroundGroup.create(950, 115, "flour_3").setDisplaySize(20, 36);// 花
        backgroundGroup.create(890, 111, "tree_2").setDisplaySize(150, 287);// 木
        // 960～
        backgroundGroup.create(1200, 80, "tree_3").setDisplaySize(470, 300);// 木
        backgroundGroup.create(960, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(990, 115, "flour_2").setDisplaySize(20, 36).flipX=false;// 花
        backgroundGroup.create(1020, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1050, 115, "grass").setDisplaySize(100, 100);// 草
        backgroundGroup.create(1090, 115, "grass").setDisplaySize(50, 50);// 草
        backgroundGroup.create(1120, 115, "flour_3").setDisplaySize(20, 36);// 花
        backgroundGroup.create(1150, 115, "flour_1").setDisplaySize(25, 23).flipX=false;;// 花　
        backgroundGroup.create(1180, 115, "flour_1").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1200, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1220, 115, "grass").setDisplaySize(50, 50);// 草
        backgroundGroup.create(1250, 115, "grass").setDisplaySize(30, 30);// 草
        backgroundGroup.create(1270, 115, "flour_2").setDisplaySize(20, 36).flipX=false;// 花
        backgroundGroup.create(1290, 115, "flour_4").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1320, 115, "flour_5").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1350, 115, "grass").setDisplaySize(50, 50).flipX=false;// 草
        backgroundGroup.create(1380, 115, "flour_3").setDisplaySize(20, 36);// 花
        backgroundGroup.create(1400, 115, "flour_4").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1420, 115, "grass").setDisplaySize(30, 30);// 草
        // 1440～
        backgroundGroup.create(1440, 115, "grass").setDisplaySize(50, 50).flipX=false;// 草
        backgroundGroup.create(1450, 115, "flour_3").setDisplaySize(20, 36);// 花
        backgroundGroup.create(1460, 115, "grass").setDisplaySize(30, 30);// 草
        backgroundGroup.create(1500, 115, "flour_4").setDisplaySize(25, 23);// 花
        backgroundGroup.create(1520, 115, "grass").setDisplaySize(30, 30).flipX=false;// 草
        backgroundGroup.create(1550, 115, "grass").setDisplaySize(30, 30);// 草
        backgroundGroup.create(1620, 115, "car").setDisplaySize(120, 65);// 車
        backgroundGroup.create(1720, 115, "pillar");// 電柱
        backgroundGroup.create(1800, 115, "building_8").setDisplaySize(200, 99);// ビル
        // 1920～
        backgroundGroup.create(1920, 115, "pillar");// 電柱
        backgroundGroup.create(2120, 115, "pillar");// 電柱
        backgroundGroup.create(2320, 115, "pillar");// 電柱
        backgroundGroup.create(2000, 115, "building_4").setDisplaySize(150, 75);// ビル
        backgroundGroup.create(2180, 115, "building_7").setDisplaySize(170, 140);// ビル
        backgroundGroup.create(2285, 230, "post");// ポスト
        backgroundGroup.create(2360, 115, "building_5").setDisplaySize(100, 100);// ビル
        backgroundGroup.create(2510, 115, "building_6").setDisplaySize(200, 150);// ビル
        backgroundGroup.create(2655, 115, "building_3").setDisplaySize(100, 200);// ビル
        backgroundGroup.create(2850, 115, "house").setDisplaySize(100, 159);// ビル
        backgroundGroup.create(2760, 115, "building_2").setDisplaySize(120, 156);// 家

        // プレイヤー
        player = this.physics.add.sprite(80, 80, "kuma");// プレイヤー
        player.setBounce(0.2); // 少しバウンドする
        player.setCollideWorldBounds(true);// 画面端当たり判定

        // 物体グループ
        let staticGroup = this.physics.add.staticGroup();// 動かない物体をまとめる　地面まで280
        staticGroup.create(280, 248, "stone_1");// 石
        staticGroup.create(520, 248, "stone_1");// 石
        staticGroup.create(380, 225, "sign_1");// 看板
        staticGroup.create(880, 248, "wood");// 切り株
        staticGroup.create(1200, 185, "board").setSize(50, 10).setDisplaySize(50, 10);// 板
        staticGroup.create(1300, 215, "board").setSize(50, 10).setDisplaySize(50, 10);// 板
        staticGroup.create(1100, 215, "board").setSize(50, 10).setDisplaySize(50, 10);// 板
        staticGroup.create(1460, 248, "stone_1");// 石
        staticGroup.create(2760, 250, "sign_3");// 看板
        staticGroup.create(2800, 230, "sign_2");// 看板
        staticGroup.create(2170, 120, "wall_3").setSize(150, 1);// 透明壁
        staticGroup.create(2253, 159, "wall_3").setSize(15, 1);// 透明壁
        staticGroup.create(2285, 205, "wall_3").setSize(30, 1);// 透明壁
        staticGroup.create(2360, 160, "wall_3").setSize(70, 1);// 透明壁
        staticGroup.create(2445, 110, "wall_3").setSize(70, 1);// 透明壁
        staticGroup.create(2545, 117, "wall_3").setSize(60, 1);// 透明壁
        staticGroup.create(2655, 75, "wall_3").setSize(100, 1);// 透明壁
        staticGroup.create(2760, 100, "wall_3").setSize(120, 1);// 透明壁
        staticGroup.create(2850, 110, "wall_3").setSize(60, 1);// 透明壁
        clear_flag = staticGroup.create(2860, 90, "flag").setSize(30, 60);// 旗
        // 吹き出し
        dialog = staticGroup.create(0, 500, "dialog").setDisplaySize(70, 25).setAlpha(0);// 吹き出し
        dialog_text = this.add.text(0, 500, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);
        dialog_2 = staticGroup.create(0, 500, "dialog").setDisplaySize(70, 25).setAlpha(0);// 吹き出し
        dialog_text_2 = this.add.text(0, 500, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);
        dialog_3 = staticGroup.create(0, 500, "dialog").setDisplaySize(70, 25).setAlpha(1);// 吹き出し
        dialog_text_3 = this.add.text(0, 500, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);
        dialog_4 = staticGroup.create(0, 500, "dialog").setDisplaySize(70, 25).setAlpha(1);// 吹き出し
        dialog_text_4 = this.add.text(0, 500, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);

        //obaグループ
        let obaGroup = this.physics.add.group();// 動く物体をまとめる
        oba_arr[0] = obaGroup.create(3000, 500, "obasan_1").setBounce(0.5).setCollideWorldBounds(true).setDisplaySize(30, 45);

        // 動体グループ
        let coinGroup = this.physics.add.group();// 動く物体をまとめる
        mochi_arr[mochi_arr.length] = coinGroup.create(1000, 0, "mochi");// mochi_s1
        mochi_arr[mochi_arr.length] = coinGroup.create(1100, 0, "mochi");// mochi_2
        mochi_arr[mochi_arr.length] = coinGroup.create(1200, 0, "mochi");// mochi_3
        this.physics.add.collider(coinGroup, staticGroup);// 衝突処理を設定する

        // チョコグループ
        let chocoGroup = this.physics.add.group();// 動く物体をまとめる
        item_choco = chocoGroup.create(2130, 0, "choco_1").setDisplaySize(30, 20);
        this.physics.add.collider(chocoGroup, staticGroup);// 衝突処理を設定する

        // プレイヤーchoco獲得
        this.physics.add.overlap(player, item_choco, (p, c)=>{
            c.destroy();// チョコを消す
            health += 500;// スコア加算
            scoreText.setText('HP: ' + health);
            dialog.setAlpha(1).setDisplaySize(90, 25)
            dialog_text.setText('ちょこぱわー！').setAlpha(1)
        }, null, this);

        // NPCグループ
        let npcGroup = this.physics.add.group();// NPCをまとめる

        // 敵犬
        enemy_1 = npcGroup.create(1400, 0, "enemy_1").setSize(40, 24).setDisplaySize(40, 24).setGravityY(-100);// 犬
        enemy_1.setCollideWorldBounds(true);// 画面端当たり判定
        enemy_1.setBounce(0.5);// 跳ね返り度
        this.physics.add.collider(enemy_1, staticGroup);// 衝突処理を設定する

        // 青蝶
        butterfly_blue = npcGroup.create(180, 200, "butterfly_blue").setGravityY(-950);// 青蝶
        butterfly_blue.setCollideWorldBounds(true);// 画面端当たり判定
        butterfly_blue.setVelocity(-50);// 水平速度
        butterfly_blue.setBounce(0.5);// 跳ね返り度
        this.physics.add.collider(butterfly_blue, staticGroup);// 衝突処理を設定する

        // 赤蝶
        butterfly_red = npcGroup.create(550, 200, "butterfly_red").setGravityY(-950);// 赤蝶
        butterfly_red.setCollideWorldBounds(true);// 画面端当たり判定
        butterfly_red.setVelocity(-50);// 水平速度
        butterfly_red.setBounce(0.5);// 跳ね返り度
        this.physics.add.collider(butterfly_red, staticGroup);// 衝突処理を設定する

        // 黄蝶
        butterfly_yellow = npcGroup.create(780, 200, "butterfly_yellow").setGravityY(-950);// 黄蝶
        butterfly_yellow.setCollideWorldBounds(true);// 画面端当たり判定
        butterfly_yellow.setVelocity(-50);// 水平速度
        butterfly_yellow.setBounce(0.5);// 跳ね返り度
        this.physics.add.collider(butterfly_yellow, staticGroup);// 衝突処理を設定する

        // 味方
        let supporterGroup = this.physics.add.group();// 味方グループをまとめる
        supporter_1 = supporterGroup.create(880, 0, "bukakuma").setDisplaySize(23, 28).setGravityY(-100);// 880
        supporter_1.setCollideWorldBounds(true);// 画面端当たり判定
        supporter_1.setVelocity(-50);// 水平速度
        supporter_1.setBounce(0.5);// 跳ね返り度
        this.physics.add.collider(supporter_1, staticGroup);// 衝突処理を設定する

        //ゲームクリア
        this.physics.add.collider(player, clear_flag, (p, c)=>{
            if(player.x - supporter_1.x < 60 && supporter_1.y - player.y < 50){
                console.log("ゲームクリア")
                this.scene.restart();
                this.scene.pause();
                this.scene.start('Ending');
            }else{
                dialog.setAlpha(1).setDisplaySize(110, 25)
                dialog_text.setText('ぶかくまがいない...').setAlpha(1)
            }
        }, null, this);
        this.physics.add.collider(player, staticGroup);// 衝突処理を設定する

        // 地面グループ
        let groundGroup = this.physics.add.staticGroup();// 地面グループをまとめる
        groundGroup.create(2880/2, D_HEIGHT, "ground");// 地面
        groundGroup.create(2400, D_HEIGHT, "ground_2");// 地面
        this.physics.add.collider(player, groundGroup);// 衝突処理を設定する
        this.physics.add.collider(coinGroup, groundGroup);// 衝突処理を設定する
        this.physics.add.collider(backgroundGroup, groundGroup);// 衝突処理を設定する
        this.physics.add.collider(supporterGroup, groundGroup);// 衝突処理を設定する

        // 透明壁
        let wallGroup = this.physics.add.staticGroup();// 壁グループをまとめる
        wall_1 = wallGroup.create(960, 200, "wall")
        wall_2 = wallGroup.create(1440, 200, "wall")
        this.physics.add.collider(wallGroup, npcGroup);// 衝突処理を設定する
        subboss_wall = npcGroup.create(1440, 100, "wall_2");// 透明壁
        this.physics.add.collider(player, subboss_wall);// 衝突処理を設定する
        this.physics.add.collider(staticGroup, subboss_wall);// 衝突処理を設定する

        // 敵犬の動き
        this.physics.add.collider(enemy_1, groundGroup, (p, c)=>{
            try{
                var num = Math.floor(Math.random() * (100 - 50)) + 50;
                var enemy_num = mochi_arr.length - 1;
                console.log(mochi_arr[enemy_num].y, enemy_1.y)
                if(mochi_arr[enemy_num].y < enemy_1.y && enemy_1.body.touching.down){
                    enemy_1.setVelocityY(-350);
                    console.log("up")
                };
                if(mochi_arr[enemy_num].x > enemy_1.x){
                    enemy_1.flipX=true;// 画像の回転
                    enemy_1.setVelocityX(num);
                    console.log("right")
                }else if( mochi_arr[enemy_num].x < enemy_1.x){
                    enemy_1.flipX=false;// 画像の回転
                    enemy_1.setVelocityX(-num);
                    console.log("left")
                }else{

                };
            }catch{
                console.log("dog_err" + enemy_num)
            }
        }, null, this);

        this.physics.add.collider(npcGroup, groundGroup);// 衝突処理を設定する

         // スコアテキスト
        var scoreText = this.add.text(15, 280, 'mochi:' + score, { fontFamily: 'PixelMplus12', fontSize: 25, color: '#FFF' }).setShadow(5, 3, "#333333", 2, false, true).setScrollFactor(0);

        // カメラ設定
        this.cameras.main.startFollow(player, true, 0.1, 0.1, -120);

        // プレイヤーmochi獲得
        this.physics.add.overlap(player, coinGroup, (p, c)=>{
            c.destroy();// コインを消す
            score += 1;// スコア加算
            scoreText.setText('mochi: ' + score);
            dialog.setAlpha(1).setDisplaySize(70, 25)
            dialog_text.setText('しいれฅ').setAlpha(1)
            console.log("player_get_mochi")
        }, null, this);

        // 味方mochi獲得
        this.physics.add.overlap(supporter_1, coinGroup, (p, c)=>{
            c.destroy();// コインを消す
            score += 1;// スコア加算
            scoreText.setText('mochi: ' + score);
            console.log("supporter_get_mochi")
        }, null, this);

        // NPCmochi獲得
        this.physics.add.overlap(enemy_1, coinGroup, (p, c)=>{
            c.destroy();// コインを消す
            enemy_score += 1;// スコア加算
            dialog_3.setAlpha(1).setDisplaySize(70, 25)
            dialog_text_3.setText('わんっ').setAlpha(1)
            console.log("npc_get_mochi")

            //mochi追加
            var num = Math.floor(Math.random() * (1400 - 1000)) + 1000;
            mochi_arr[mochi_arr.length] = coinGroup.create(num, 0, "mochi").setGravityY(-900)

            scoreText.setText('mochi: ' + score);
            if(score < 0 || enemy_score > 10){
                reson = "もちをとられてしまった...";// スコア加算
                score = 0;// スコア初期化
                enemy_score = 0;// スコア初期化
                this.scene.restart();
                this.scene.pause();
                this.scene.launch('Gameover');
            }
        }, null, this);

        // NPCmochi奪取
        this.physics.add.collider(player, enemy_1, (p, c)=>{
            var ref = Math.floor( Math.random() * 11 );
            if(ref > 5){
                score -= 1;// スコア減算
                scoreText.setText('mochi: ' + score);
                dialog.setAlpha(1).setDisplaySize(70, 25)
                dialog_text.setText('とられた！').setAlpha(1)
                dialog_3.setAlpha(1).setDisplaySize(70, 25)
                dialog_text_3.setText('ガウッ').setAlpha(1)
                console.log("npc_take_mochi")
                var ref_2 = Math.floor( Math.random() * 11 );
                if(ref_2 > 5){
                    //mochi追加
                    var num = Math.floor(Math.random() * (1400 - 1000)) + 1000;
                    coinGroup.create(num, 0, "mochi").setGravityY(-900)
                }
                if(score < 0 || enemy_score > 10){
                    reson = "もちをとられてしまった...";// スコア加算
                    score = 0;// スコア初期化
                    enemy_score = 0;// スコア初期化
                    this.scene.restart();
                    this.scene.pause();
                    this.scene.launch('Gameover');
                }
            }
        }, null, this);

        // obasan追加
        this.input.on('pointerdown', ()=>{
            var ref = Math.floor( Math.random() * 15 );
            if(player.x > 1920 && ref == 5){
                oba_arr[oba_arr.length] = obaGroup.create(2000, 225, "obasan_1").setBounce(0.5).setCollideWorldBounds(true).setDisplaySize(30, 45);
            }else if(player.x > 1920 && ref == 6){
                oba_arr[oba_arr.length] = obaGroup.create(2000, 225, "obasan_2").setBounce(0.5).setCollideWorldBounds(true).setDisplaySize(30, 45);
            }else if(player.x > 1920 && ref == 7){
                oba_arr[oba_arr.length] = obaGroup.create(2000, 225, "obasan_3").setBounce(0.5).setCollideWorldBounds(true).setDisplaySize(30, 45);
            };
        }, this);

        // mochi追加
        this.input.on('pointerdown', ()=>{
            var ref = Math.floor( Math.random() * 11 );
            var num = Math.floor(Math.random() * (1400 - 1000)) + 1000;
            if(player.x > 1000 && player.x < 1400 && ref < 3){
                mochi_arr[mochi_arr.length] = coinGroup.create(num, 0, "mochi").setGravityY(-900)
            };

            // クリア
            if(player.x > 1000 && player.x < 1440 && score > 9 && typeof supporter_2 === "undefined"){
                var enemy_x = enemy_1.x
                var enemy_y = enemy_1.y
                enemy_1.destroy()
                supporter_2 = supporterGroup.create(enemy_x, enemy_y, "enemy_1").setDisplaySize(40, 24).setGravityY(-100);// 犬
                supporter_2.setCollideWorldBounds(true);// 画面端当たり判定
                supporter_2.setVelocity(-50);// 水平速度
                supporter_2.setBounce(0.5);// 跳ね返り度
                this.physics.add.collider(supporter_2, staticGroup);// 衝突処理を設定する
                // 味方oba退治
                this.physics.add.collider(supporter_2, obaGroup, (p, c)=>{
                    try{
                        c.destroy();
                        dialog_4.setAlpha(1).setDisplaySize(70, 25)
                        dialog_text_4.setText('ガウッ').setAlpha(1)
                        console.log("supporter_destroy_oba")
                    }catch{

                    }
                }, null, this);
                coinGroup.clear(true);
                subboss_wall.destroy();
                scoreText.setText('HP: ' + health);
                dialog.setAlpha(1).setDisplaySize(110, 25)
                dialog_text.setText('もうもてないです…').setAlpha(1)
                console.log("クリア！")
            };

            if(player.x - supporter_1.x > 150){
                dialog.setAlpha(1).setDisplaySize(100, 25)
                dialog_text.setText('ぶかくまー！').setAlpha(1)
            }
        }, this);

        // obasanの動き
        this.physics.add.collider(obaGroup, groundGroup, (p, c)=>{
            try{
                var num = Math.floor(Math.random() * (100 - 50)) + 50;
                var oba_num = Math.floor( Math.random() * oba_arr.length );
                if(player.y + 50 < oba_arr[oba_num].y && oba_arr[oba_num].body.touching.down){
                    oba_arr[oba_num].flipX=false;// 画像の回転
                    oba_arr[oba_num].setVelocityY(-330);
                };
                if(player.x > oba_arr[oba_num].x){
                    oba_arr[oba_num].flipX=true;// 画像の回転
                    oba_arr[oba_num].setVelocityX(num);
                }else if(player.x < oba_arr[oba_num].x){
                    oba_arr[oba_num].flipX=false;// 画像の回転
                    oba_arr[oba_num].setVelocityX(-num);
                };
            }catch{

            }
        }, null, this);
        this.physics.add.collider(obaGroup, groundGroup);// 衝突処理を設定する

        // obasan接触
        this.physics.add.collider(player, obaGroup, (p, c)=>{
            var ref = Math.floor( Math.random() * 11 );
            if(ref > 5){
                health -= 1;// スコア減算
                console.log("oba_take_health")
                //mochi追加
                var num = Math.floor(Math.random() * (1400 - 1000)) + 1000;
                coinGroup.create(num, 0, "mochi").setGravityY(-900)
                dialog.setAlpha(1).setDisplaySize(70, 25)
                dialog_text.setText('わー').setAlpha(1)
                scoreText.setText('HP: ' + health);
                if(health < 0){
                    reson = "おばさんにつかまってしまった...";// スコア加算
                    health = 100;// スコア初期化
                    score = 0;// スコア初期化
                    this.scene.restart();
                    this.scene.pause();
                    this.scene.launch('Gameover');
                }
            }
        }, null, this);

        // メインタイトル表示
        mainTitle = this.add.text(32, 32, 'くまのぼうけん', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setShadow(5, 3, "#333333", 2, false, true).setAlpha(0).setScrollFactor(0);
        this.input.on('pointerdown', ()=>{
            if(player.x < 300){
                // タイトル表示
                var tween = this.tweens.add({
                    targets: mainTitle,
                    alpha: 1,
                    duration: 10000,
                    ease: 'Power2'
                });
            }
            else if(player.x > 480){
                // タイトル非表示
                var tween = this.tweens.add({
                    targets: mainTitle,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        mainTitle.destroy()
                    }
                });
            }
        }, this);

        // サブタイトル表示
        subTitle = this.add.text(32, 32, 'なかまをみつける', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setShadow(5, 3, "#333333", 2, false, true).setAlpha(0).setScrollFactor(0);
        this.input.on('pointerdown', ()=>{
            if(player.x > 500 && player.x < 850){
                // タイトル表示
                var tween = this.tweens.add({
                    targets: subTitle,
                    alpha: 1,
                    duration: 10000,
                    ease: 'Power2'
                });
                // セリフ表示
                dialog.setAlpha(1).setDisplaySize(70, 25)
                dialog_text.setText('ぶかくま！').setAlpha(1)
                dialog_2.setAlpha(1).setDisplaySize(70, 25)
                dialog_text_2.setText('くまさん！').setAlpha(1)
            }
            else if(player.x > 960){
                // タイトル非表示
                var tween = this.tweens.add({
                    targets: subTitle,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        subTitle.destroy()
                    }
                });
            }
        }, this);

        // サブタイトル表示
        subTitle_2 = this.add.text(32, 32, 'わらびもちを10こしいれよう', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setShadow(5, 3, "#333333", 2, false, true).setAlpha(0).setScrollFactor(0);
        this.input.on('pointerdown', ()=>{
            if(player.x > 960 && player.x < 1100){
                // タイトル表示
                var tween = this.tweens.add({
                    targets: subTitle_2,
                    alpha: 1,
                    duration: 10000,
                    ease: 'Power2'
                });
            }
            else if(player.x > 1340){
                // タイトル非表示
                var tween = this.tweens.add({
                    targets: subTitle_2,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        subTitle_2.destroy()
                    }
                });
            }
        }, this);

        // サブタイトル表示
        subTitle_3 = this.add.text(32, 32, 'くまのいえにかえろう', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setShadow(5, 3, "#333333", 2, false, true).setAlpha(0).setScrollFactor(0);
        this.input.on('pointerdown', ()=>{
            if(player.x > 1340 && player.x < 2000){
                // タイトル表示
                var tween = this.tweens.add({
                    targets: subTitle_3,
                    alpha: 1,
                    duration: 10000,
                    ease: 'Power2'
                });
            }
            else if(player.x > 2300){
                // タイトル非表示
                var tween = this.tweens.add({
                    targets: subTitle_3,
                    alpha: 0,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        subTitle_3.destroy()
                    }
                });
            }
        }, this);
    },

    update: function ()
    {
        console.log("update!!");
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
        var pointer = this.input.activePointer;
        if(pointer.isDown){
            // UPキーでplayerが地面に接しているとき
            if (pointer.y < player.y - 80 && player.body.touching.down)
            {
                player.setVelocityY(-330);
                dialog.setAlpha(0)
                dialog_text.setAlpha(0)
                dialog_2.setAlpha(0)
                dialog_text_2.setAlpha(0)
                dialog_3.setAlpha(0)
                dialog_text_3.setAlpha(0)
                dialog_4.setAlpha(0)
                dialog_text_4.setAlpha(0)
            }
            if(pointer.worldX < player.x){
                //console.log("Left");
                player.setVelocityX(-100);// 左方向の速度を設定
            }else if(player.x < pointer.worldX){
                //console.log("Right!!");
                player.setVelocityX(100);// 右方向の速度を設定
            }
        }else{
            player.setVelocityX(0);// 横方向の速度を0
        }

        if(player.x < 880 || (player.x - supporter_1.x < 30 && player.x - supporter_1.x > -30))
        {
            supporter_1.setVelocityX(0);
        }else{
            if(player.y + 50 < supporter_1.y && supporter_1.body.touching.down)
            {
                supporter_1.setVelocityY(-400);
            }
            if(player.x > supporter_1.x)
            {
                supporter_1.flipX=true;// 画像の回転
                supporter_1.setVelocityX(65);
            }else if(player.x < supporter_1.x)
            {
                supporter_1.flipX=false;// 画像の回転
                supporter_1.setVelocityX(-65);
            }
        }

        if(typeof supporter_2 != "undefined"){
            if(supporter_1.x < 1400 || (supporter_1.x - supporter_2.x < 50 && supporter_1.x - supporter_2.x > -50))
            {
                try{
                    supporter_2.setVelocityX(0);
                }catch{

                }
            }else{
                if(supporter_1.y + 50 < supporter_2.y && supporter_1.body.touching.down)
                {
                    supporter_2.setVelocityY(-330);
                }
                if(supporter_1.x > supporter_2.x)
                {
                    supporter_2.flipX=true;// 画像の回転
                    supporter_2.setVelocityX(50);
                }else if(supporter_1.x < supporter_2.x)
                {
                    supporter_2.flipX=false;// 画像の回転
                    supporter_2.setVelocityX(-50);
                }
            }
        }

        if(butterfly_blue.y > 200){
            var num = Math.floor(Math.random()*49) + 1; // this will get a number between 1 and 99;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            butterfly_blue.setVelocityY(-65);
            butterfly_blue.setVelocityX(num);
        }

        if(butterfly_red.y > 200){
            var num = Math.floor(Math.random()*49) + 1; // this will get a number between 1 and 99;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            butterfly_red.setVelocityY(-65);
            butterfly_red.setVelocityX(num);
        }

        if(butterfly_yellow.y > 200){
            var num = Math.floor(Math.random()*49) + 1; // this will get a number between 1 and 99;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            butterfly_yellow.setVelocityY(-65);
            butterfly_yellow.setVelocityX(num);
        }

        try{
            dialog.setPosition(player.x, player.y - 30);
            dialog_text.setPosition(player.x, player.y - 32);
            dialog_2.setPosition(supporter_1.x, supporter_1.y - 30);
            dialog_text_2.setPosition(supporter_1.x, supporter_1.y - 32);
            dialog_3.setPosition(enemy_1.x, enemy_1.y - 30);
            dialog_text_3.setPosition(enemy_1.x, enemy_1.y - 32);
            dialog_4.setPosition(supporter_2.x, supporter_2.y - 30);
            dialog_text_4.setPosition(supporter_2.x, supporter_2.y - 32);
        }catch{
            console.log("errrr")
        }
    },

});

// clearTint() 色付けの解除

var Ending = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Ending ()
    {
        Phaser.Scene.call(this, { key: 'Ending' });
    },

    preload: function ()
    {
        console.log("preload!!");
        this.load.image("ending", "./assets/ending.png");
        this.load.image("kuma", "./assets/kuma.png");
        this.load.image("treasure", "./assets/treasure.png");
        this.load.image("dialog", "./assets/dialog.png");
        this.load.image("choco_1", "./assets/choco_1.png");
        this.load.image("bukakuma", "./assets/bukakuma.png");
    },

    create: function ()
    {
        console.log("create!!");
        this.cameras.main.setBounds(0, -300, 480, 2480);
        this.physics.world.setBounds(0, 0, 480, 1280);

        this.add.image(2880/2, D_HEIGHT/2, "ending");// 画面の中心に表示します
        this.add.text(240, 100, 'くまのぼうけん', { fontFamily: 'PixelMplus12', fontSize: 50, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 300, 'しゅえん　くま', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 400, 'でぃれくしょん　くま', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 500, 'かんとく　くま', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 600, 'おてつだい1 やまもとさん', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 700, 'おてつだい2 ぶかくま', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);
        this.add.text(240, 850, 'Thank you for playing ฅʕ ›ᴥ‹ ʔฅ', { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setAlpha(1).setOrigin(0.5);

        let staticGroup = this.physics.add.staticGroup();// 動かない物体をまとめる
        staticGroup.create(240, 1280, "wall_3").setSize(480, 1);// 透明壁
        treasure = staticGroup.create(240, 1260, "treasure").setDisplaySize(40, 40);// 宝箱

        let coinGroup = this.physics.add.group();// 動く物体をまとめる

        // 味方
        let supporterGroup = this.physics.add.group();// 味方グループをまとめる

        // プレイヤー
        player = this.physics.add.sprite(240, 0, "kuma");// プレイヤー

        // カメラ設定
        this.cameras.main.startFollow(player, true, 1, 1, 0);

        dialog = staticGroup.create(0, 0, "dialog").setDisplaySize(70, 25).setAlpha(0);// 吹き出し
        dialog_text = this.add.text(0, 0, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);

        dialog_2 = staticGroup.create(0, 0, "dialog").setDisplaySize(70, 25).setAlpha(0);// 吹き出し
        dialog_text_2 = this.add.text(0, 0, '', { fontFamily: 'PixelMplus12', fontSize: 10, color: '#000' }).setAlpha(0).setOrigin(0.5);

        // 宝箱接触
        this.physics.add.collider(player, treasure, (p, c)=>{
            // セリフ表示
            dialog.setAlpha(1).setDisplaySize(120, 25)
            dialog_text.setText('Merry Christmas!').setAlpha(1)
            endTitle = this.add.text(240, 1150, 'くまサンタからのプレゼントです ฅʕ ›ᴥ‹ ʔ', { fontFamily: 'PixelMplus12', fontSize: 20, color: '#FFF' }).setAlpha(0).setOrigin(0.5);
            // タイトル表示
            var tween = this.tweens.add({
                targets: endTitle,
                alpha: 1,
                duration: 20000,
                ease: 'Power2'
            });
        }, null, this);
        this.physics.add.collider(player, staticGroup);// 衝突処理を設定する

        // チョコ追加
        this.input.on('pointerdown', ()=>{
            var num = Math.floor(Math.random() * (100 - 30)) + 30;
            num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
            coinGroup.create(player.x + num, player.y + 180, "choco_1").setDisplaySize(30, 20).setSize(30, 20).setGravityY(-999);// チョコ

            // 味方追加
            if(player.y > 500 && supporter_1_ct == 0){
                supporter_1 = supporterGroup.create(player.x + num, player.y - 180, "bukakuma").setDisplaySize(23, 28).setGravityY(-100);// bukakuma
                this.physics.add.collider(player, supporter_1, (p, c)=>{
                    dialog_2.setAlpha(1)
                    dialog_text_2.setText('おめでとう！').setAlpha(1)
                }, null, this);
                this.physics.add.collider(supporter_1, staticGroup);// 衝突処理を設定する
                supporter_1_ct += 1
            }
        }, this);

        // チョコ接触
        this.physics.add.collider(player, coinGroup, (p, c)=>{
            // セリフ表示
            dialog.setAlpha(1).setDisplaySize(70, 25)
            dialog_text.setText('うまうま').setAlpha(1)
            c.destroy()
        }, null, this);

        this.physics.add.collider(staticGroup, coinGroup, (p, c)=>{
            c.destroy()
        }, null, this);
    },

    update: function ()
    {
        console.log("update!!");
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
        var pointer = this.input.activePointer;
        if(pointer.isDown){
            // UPキーでplayerが地面に接しているとき
            if (pointer.worldY < player.y - 80 && player.body.touching.down){
                player.setVelocityY(-330);
                dialog.setAlpha(0)
                dialog_text.setAlpha(0)
                dialog_2.setAlpha(0)
                dialog_text_2.setAlpha(0)
            }
            if(pointer.worldX < player.x){
                //console.log("Left");
                player.setVelocityX(-50);// 左方向の速度を設定
            }else if(player.x < pointer.worldX){
                //console.log("Right!!");
                player.setVelocityX(50);// 右方向の速度を設定
            }
        }else{
            player.setVelocityX(0);// 横方向の速度を0
        }

        if (player.y < 1150 && !player.body.touching.down){
            player.setVelocityY(10);
            try{
                supporter_1.setVelocityY(20);
            }catch{

            }
        }

        try{
            if(player.x - supporter_1.x < 60 && player.x - supporter_1.x > -60)
            {
                supporter_1.setVelocityX(0);
            }else{
                if(player.y + 50 < supporter_1.y)
                {
                    supporter_1.setVelocityY(-350);
                }
                if(player.x > supporter_1.x)
                {
                    supporter_1.flipX=true;// 画像の回転
                    supporter_1.setVelocityX(60);
                }else if(player.x < supporter_1.x)
                {
                    supporter_1.flipX=false;// 画像の回転
                    supporter_1.setVelocityX(-60);
                }
            }
        }catch{
            console.log("err")
        }
        dialog.setPosition(player.x, player.y - 30);
        dialog_text.setPosition(player.x, player.y - 32);

        dialog_2.setPosition(supporter_1.x, supporter_1.y - 30);
        dialog_text_2.setPosition(supporter_1.x, supporter_1.y - 32);
    }

});

var Gameover = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Gameover ()
    {
        Phaser.Scene.call(this, { key: 'Gameover' });
    },

    preload: function ()
    {
        console.log("preload!!");
    },

    create: function ()
    {
        graphics = this.add.graphics();
        graphics.fillStyle(0X000000, 1).fillRect(0, 0, 2880, 320);
        scoreText = this.add.text(240, 140, reson, { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setOrigin(0.5);
        restartText = this.add.text(240, 200, "→ restart", { fontFamily: 'PixelMplus12', fontSize: 30, color: '#FFF' }).setOrigin(0.5);

        this.input.once('pointerdown', function () {
            graphics.destroy();
            scoreText.destroy();
            restartText.destroy();
            oba_arr = [];
            mochi_arr = [];
            this.scene.resume('sceneA');
        }, this);
    },

    update: function ()
    {
        console.log("update!!");
    }

});

const D_WIDTH = 480;
const D_HEIGHT = 320;

let player;
let platforms;
let cursors;
let score = 0;
let enemy_score = 0;
let gameOver = false;
let scoreText;
let gameOverText;
let restartText;
let graphics;
let ref;
let mainTitle;
let supporter_1;
let supporter_2;
let butterfly_blue;
let butterfly_red;
let butterfly_yellow;
let reson;
let coinGroup;
let oba_arr = [];
let mochi_arr = [];
let health = 100;
let supporter_1_ct = 0;
let subboss_wall;
let enemy_1;

//Phaser3の設定データ
var config = {
	type: Phaser.AUTO,
	width: D_WIDTH,// ゲーム画面の横幅
	height: D_HEIGHT,// ゲーム画面の高さ
    parent: 'phaser-example',
	scene: [ SceneA, Ending, Gameover ],
	fps: {
		target: 24,// フレームレート
		forceSetTimeOut: true
	},
	physics: {
		default: "arcade",
		arcade: {
			debug: false,// スプライトに緑の枠を表示します
			gravity: {y: 1000}// 重力の方向とその強さ
		}
	}
}

var game = new Phaser.Game(config);