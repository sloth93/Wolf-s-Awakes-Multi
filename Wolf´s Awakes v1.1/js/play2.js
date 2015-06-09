var play2State = {
    
  
    
    //obtenemos una variable random
   //var x = game.world.randomX;
   //var y = game.world.randomY;
    
    
    
    


	 create: function() { 
     
    
         
         
         
       
       
         //game.stage.backgroundColor = '#3498db';
        
    
          this.music2 = game.add.audio('lobo');
              //labels
         
      //  game.add.tileSprite(0, 0, 24000, 600, 'fondo');
        this.manaBar = this.add.sprite(183, 26, 'manaBar');
        this.manaBar.cropEnabled = true;
        this.manaBar.fixedToCamera = true;
        this.healthBar = this.add.sprite(199, 59, 'manaBar2');
        this.healthBar.cropEnabled = true;
        this.healthBar.fixedToCamera = true;
         
         
          
         
         
         
        this.manaBar2 = this.add.sprite(623, 26, 'manaBar');
        this.manaBar2.cropEnabled = true;
        this.manaBar2.fixedToCamera = true;
        this.healthBar2 = this.add.sprite(636, 59, 'manaBar2_2');
        this.healthBar2.cropEnabled = true;
        this.healthBar2.fixedToCamera = true;
         

         
        this.healthBar2.bringToTop();
        this.manaBar2.bringToTop();
       
       
       
         
         
  
        
    //array de enemigos :) para matar un rato
    
         
         
         
             var posicion; 
             var pociones;
    
   
    
 
      this.createWorld(); 
    
        
    enemigosTotales = 30;
    enemigosVivos = 30;
        
    
    
    
		this.cursor = game.input.keyboard.createCursorKeys();
		game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]);
		this.wasd = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: game.input.keyboard.addKey(Phaser.Keyboard.D)
		};

		game.global.score = 0;
		game.global.score2 = 0;
         
        
        this.stateScore = false;
        
		this.player = game.add.sprite(370,1432, 'player');
		game.physics.arcade.enable(this.player); 
		this.player.anchor.setTo(0.5, 0.5);
        this.player.scale.setTo(1.5, 1.5);
		this.player.body.gravity.y = 500;
		this.player.animations.add('right', [6, 8, 9, 10, 11, 12, 13], 14, true);
		this.player.animations.add('left',  [5, 4, 3, 2, 1, 0], 14, true);
        game.camera.follow(this.player);
         
         
         
         
       this.player2 = game.add.sprite(360,1432, 'jugador2');
		game.physics.arcade.enable(this.player2); 
		this.player2.anchor.setTo(0.5, 0.5);
        this.player2.scale.setTo(1.5, 1.5);
		this.player2.body.gravity.y = 500;
		this.player2.animations.add('right', [6, 8, 9, 10, 11, 12, 13], 14, true);
		this.player2.animations.add('left',  [5, 4, 3, 2, 1, 0], 14, true);
        
         
         
         
        
        this.follower = game.add.sprite(-800, 400, 'follower');
        game.physics.arcade.enable(this.follower);
        this.follower.enableBody = true;
        this.follower.scale.setTo(2, 2);
        this.player.anchor.setTo(0.5, 0.5);
        this.follower.body.velocity.x = 235;
  
         
        this.mana_que_tinc = 100;
        this.mana_possible = 200;
        this.time = 500;
         
        this.mana_que_tinc2 = 100;
        this.mana_possible2 = 200;
         
   
        
        //array de pociones
        this.pociones = game.add.group();
         this.ArrayPociones = [];
         this.pocion = null;
         this.powerUp();
        
         
        
        //array de monedas
        this.monedas = game.add.group();
        this.ArrayMonedas = [];
        this.moneda = null;
        this.pillarMonedita();
         
         
         //trofeo
         this.trofeo =game.add.sprite(15100,1200, 'trofeo');
        game.physics.arcade.enable(this.trofeo);
        this.trofeo.enableBody = true;
        this.trofeo.anchor.setTo(0.5, 0.5);

        
        this.tecla = game.input.keyboard.addKey(Phaser.Keyboard.X);
        this.tecla2 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.tecla3 =  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
      
         
          
         
         /*
          this.game.world.bringToTop(this.healthBar);
          this.game.world.bringToTop(this.manaBar);
         
          game.world.bringToTop(this.healthBar2);
          game.world.bringToTop(this.manaBar2);
        
         */
		 this.scoreLabel = game.add.text(100, 500, 'score: 0', { font: '18px Arial', fill: '#ffffff' });	
         this.scoreLabel.fixedToCamera = true;
         
        this.scoreLabel2 = game.add.text(100, 400, 'score2: 0', { font: '18px Arial', fill: '#ffffff' });	
         this.scoreLabel2.fixedToCamera = true;
         //Vidas
                    
        
        //Generador de vidas	
		             
 
                 
                      


    //crea los enemigos cada 2 segundos
        this.createWorld();
		
        
        

//for (var i = 0; i < 40; i++)
  //{
    //   enemies.create(game.world.randomX, game.world.randomY, 'loop');
  //}
//    }
        
        
        
		this.emitter = game.add.emitter(0, 0, 15);
		this.emitter.makeParticles('pixel');
		this.emitter.setYSpeed(-150, 150);
		this.emitter.setXSpeed(-150, 150);
		this.emitter.gravity = 0;

		this.jumpSound = game.add.audio('jump');
		this.coinSound = game.add.audio('coin');
		//this.deadSound = game.add.audio('dead');	
		
		
        
      
        this.music = game.add.audio('music');
        this.music.loop = true;
        this.music.play();
         
        
      
 
	},
    
   

    
    follow: function(){
        
   
        
        
        
        
    },
    
    
    

	update: function() {
        
        
        
        
               
         //game.debug.inputInfo(32, 32);
         
       
          //solo me pilla la primera pocion
        
		game.physics.arcade.overlap(this.player, this.ArrayPociones, this.takePowerUp, null, this);
        game.physics.arcade.overlap(this.player, this.ArrayMonedas, this.MonedaPillada, null, this);
        game.physics.arcade.overlap(this.player, this.trofeo, this.playerWin, null, this);
        game.physics.arcade.overlap(this.player, this.follower, this.playerDie, null, this);
        
        game.physics.arcade.overlap(this.player2, this.ArrayPociones, this.takePowerUp2, null, this);
        game.physics.arcade.overlap(this.player2, this.ArrayMonedas, this.MonedaPillada2, null, this);
        game.physics.arcade.overlap(this.player2, this.trofeo, this.playerWin, null, this);
        game.physics.arcade.overlap(this.player2, this.follower, this.playerDie, null, this);
       
    
        game.physics.arcade.collide(this.player2, this.layer2);
        game.physics.arcade.collide(this.player, this.layer2);
       // game.physics.arcade.collide(this.follower, this.player, null, this);
      //  game.physics.arcade.collide(this.follower, this.player2, null, this);
     
        
        
        
        
        
         //mana bar
         this.healthBar.width = (this.mana_que_tinc / this.mana_possible) * 167;
         this.healthBar2.width = (this.mana_que_tinc2 / this.mana_possible2) * 167;
        
 
		if (!this.player.inWorld) {
	    this.playerDie();
            this.music.stop();
	  	}
        
        	if (!this.player2.inWorld) {
	    this.playerDie();
        this.music.stop();
	  	}
        
   

		this.movePlayer();
        this.movePlayer2();
        this.follow();

	},
    
    

    movePlayer2: function(){
        
        
             
        if (this.wasd.left.isDown) {
			this.player2.body.velocity.x = -200;
			this.player2.animations.play('left');
            
                   if (this.tecla2.isDown){
            if(this.mana_que_tinc2 > 0){
                
                this.player2.body.velocity.x = -400;
                this.mana_que_tinc2-=1;
            }
            }
            
   
            
		}
		
		   else if (this.wasd.right.isDown) {
			this.player2.body.velocity.x = 200;
			this.player2.animations.play('right');
     
            if (this.tecla2.isDown){
            if(this.mana_que_tinc2 > 0){
                
                    this.player2.body.velocity.x = 400;
                   this.mana_que_tinc2-=1;
                  
                
            }
            }
		}else {
			this.player2.body.velocity.x = 0;
 			this.player2.animations.stop(); 
	        this.player2.frame = 6; 
		}
        
        
		if (this.wasd.up.isDown){
            if (this.player2.body.onFloor()) {
			this.jumpSound.play();
            this.player2.body.velocity.y = -320;
            
      }
            
            
            
		}
        
       
    
        
        //    else {
        //     this.player.body.velocity.x = 200;
        //    }
        
        
	},

        

    
    

	movePlayer: function(manabars){
        
        
    
          
        if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -200;
			this.player.animations.play('left');
            
            if (this.tecla3.isDown){
            if(this.mana_que_tinc > 0){
                
                this.player.body.velocity.x = -400;
                this.mana_que_tinc-=1;
            }
            }
            
   
            
		}
		
		   else if (this.cursor.right.isDown) {
			this.player.body.velocity.x = 200;
			this.player.animations.play('right');
     
            if (this.tecla3.isDown){
            if(this.mana_que_tinc > 0){
                
                    this.player.body.velocity.x = 400;
                   this.mana_que_tinc-=1;
                  
                
            }
            }
		}else {
			this.player.body.velocity.x = 0;
 			this.player.animations.stop(); 
	        this.player.frame = 6; 
		}
        
        
		if (this.cursor.up.isDown){
            if (this.player.body.onFloor()) {
			this.jumpSound.play();
            this.player.body.velocity.y = -320;
            
       }
            
            
            
		}
        
       
    
        
        //    else {
        //     this.player.body.velocity.x = 200;
        //    }
        
        
	},


	
    
    
    
    killsuperarLabel: function(){
               game.world.remove(this.superarLabel);
    
        
    },
    
    
    MonedaPillada: function(player, moneda){
        
    
                 this.coinSound.play();
                 game.global.score += 5;
		         this.scoreLabel.text = 'score: ' + game.global.score;
                 moneda.kill();
        

        
        
    },
    
     MonedaPillada2: function(player, moneda){
        
    
                 this.coinSound.play();
                 game.global.score2 += 5;
		         this.scoreLabel2.text = 'score2: ' + game.global.score2;
                 moneda.kill();
        

        
        
    },
    
    
    
    
    
    pillarMonedita: function(){
        
        
 var Monedita_x =      [640,680,720,760,800,840,880,920,960,1000,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1580,1620,1660,1700,1740,1780,1820,1860,1900,1940,1980,2080,2120,2160,2200,2240,2280,2320,2360,2400,2440,2630,2670,2710,2750,2790,
                          2810,2850,2890,2930,2970,3010,3050, ,2965,3005,3045,2910,2950,2990,3030,3070,3110,3150,3190,3230,3270,3310,3350,3390,3430,3470,3510,3550,3590,3630,3670,3710,3750,3790,3830,3870,3910,3950,3990,4030,4070,4275,4315,4355,4395,4435,4475,4515,4555,4595,4635,4675,4715,4755,4795,4835,4875,4915,
                         4365,4405,4445,4485,4525,4565,4605,4645,4685,4725,4765,4805,4845,4885,
                         4465,4505,4545,4585,4625,4665,4705,4745,4785,
                         4520,4560,4600,4640,4680,4720,
                         5120,5160,5200,5240,5280,5320,5360,
                         5520,5560,5600,5640,5680,5720,5760,5800,5840,5880,5920,5960,6000,6040,6080,
                         6120,6160,6200,6240,6280,6320,6360,6400,6440,6480,
                         6620,6660,6700,6740,6780,6820,6860,6900,6940,6980,7020,7060,7100,7140,7180,7220,7260,7300,7340,7380,7420,7460,7500,7540,7580,7620,7660,7700,7740,  7780,
                         8220,8260,8300,8340,8380,
                         6770,6810,6850,6890,6930,
                         8760,8800,8840,8880,8920,8920,8960,9000,9040,9080,
                         9320,9360,9400,9440,9480,9520,9560,9600,9640,9680,9720,9760,9800,9840,
                         //escaleras
                         9910,9960,10015,10070,10120,10170,10220,10270,10320,
                         9900,9940,9980,10020,10060,10100,10140,10180,10220,10260,10300,10340,10380,10420,
                         10515, 10555,
                         10610,10650,10690,10730,10770,
                         10820,10860,
                         10360, 10400, 10460, 10520,10570,10630,10670,10730,10770,10810,10870,
                         10960,11000,11040,11080,11120,11160,
                         11220,11260,11300,11340,11380,11420,11460,11500,
                         11540,11580,11610,11650,11690,11730,11770,
                         11810,11850,11890,11930,11970,12010,12050,12090,12130,12170,12210,12250,12290,12330,12370,12410,12450,12490,12530,12570,12610,12650,12690,
                         12710,12770,12820,
                         12860,12900,12940,
                         13010,13050,13090,
                         12910,12950,12990,13030,13070,13110,13150,13190,13230,13270,13310,13350,13390,13430,13470,
                         ];
 var Monedita_y = [1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1400,1385,1375,1430,1430,1430,1430,1430,1430,1430,1430,1430,1405,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1333,1333,1333,1333,1333,
                          1230,1230,1230,1230,1230,1230,1230, ,1135,1135,1135,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,
                         1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,
                         1130,1130,1130,1130,1130,1130,1130,1130,1130,
                         1030,1030,1030,1030,1030,1030,
                         1230,1230,1230,1230,1230,1230,1230,
                         1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,
                         1330,1330,1330,1330,1330,1330,1330,1330,1330,1330,
                         1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,  1430,
                         1130,1130,1130,1130,1130,
                         1230,1230,1230,1230,1230,
                         1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,
                         1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,1130,
                         //escaleras
                         1030,980,930,880,830,780,730,680,630,
                         1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,1230,
                         1130,1130,
                         1070,1070,1070,1070,1070,
                         1130,1130,
                         580,580,530,480,530,580,580,530,480,480,530,
                         1080,1080,1080,1080,1080,1080,
                         980,980,980,980,980,980,980,980,
                         880,880,880,880,880,880,880,
                         1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,
                         1330,1330,1330,
                         1230,1230,1230,
                         1330,1330,1330,
                         1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,
                         ]; 
        
        
        for (var i = 0; i <= Monedita_x.length; i++) {
                   
                  
                    
                    this.moneda = this.monedas.create(Monedita_x[i],Monedita_y[i],'moneda');    
                    //game.add.tween(this.moneda).to({angle: 360}, 5000).loop().start();
                    this.game.physics.arcade.enable(this.ArrayMonedas);
                
                    this.ArrayMonedas.push(this.moneda);
        
			  
        
        
        
        }
        
    },
    
    

    

	
	powerUp: function() {
        
        
 
        
var powerUp_x = [1420,2430,2700,4600,3320,3323,6750,7000,8450,9200,10370,10630,11900,12000,];
var powerUp_y = [1320,1350,1270,890,930,1350,1080,1350,1030,1050,1160,430,1060,1060,];
      
     
		for (var i = 0; i <= powerUp_x.length; i++) {
                   
               
                    
                    this.pocion = this.pociones.create(powerUp_x[i],powerUp_y[i],'coin');    
                    
                    this.game.physics.arcade.enable(this.ArrayPociones);
                
                    this.ArrayPociones.push(this.pocion);
        
			  
            
    
        }
        
      
            
		},

		
		
	 takePowerUp: function(player, pocion) {
        
    
     
       
        this.music2.play();
     
  
        pocion.kill();
           
			this.player.body.velocity.x +=50;
          if(this.mana_que_tinc < this.mana_possible){
            this.mana_que_tinc += 100; 
              if(this.mana_que_tinc > this.mana_possible){
                  this.mana_que_tinc = this.mana_possible;
            }
          
	      }
    },
    
                
takePowerUp2: function(player2, pocion) {
        
     this.music2.play();
  
        pocion.kill();
           
			this.player.body.velocity.x +=50;
          if(this.mana_que_tinc2 < this.mana_possible2){
            this.mana_que_tinc2 += 100; 
              if(this.mana_que_tinc2 > this.mana_possible2){
                  this.mana_que_tinc2 = this.mana_possible2;
            }
          
	      }
    },   



	playerDie: function() {
        
        
        
        
        
	     
        
        
          this.game.world.setBounds(0,0,1000,600);
        
		
        game.time.events.add(2000, this.startMenu, this);
        this.muerteLabel = game.add.text(350, 200, 'Has Muerto!', { font: '60px Arial', fill: '#ffffff' });
        this.music.stop();
		
		this.emitter.x = this.player.x;
		this.emitter.y = this.player.y;
		this.emitter.start(true, 600, null, 15);

		
	},
    
     playerWin: function() {
     
        
        game.state.start('menu');
         this.music.stop();
        
    },

	startMenu: function() {
        
		game.state.start('menu');
         this.music.stop();
	},

	createWorld: function() {
        
      
        
        this.map = this.game.add.tilemap('Runner');
        this.map.addTilesetImage('muevete','muevete');
        this.map.addTilesetImage('salta','salta');
        this.map.addTilesetImage('terrain','terreno');
        this.map.addTilesetImage('Ugly_cropped_lava_flow_make_a_better_1','lava');
        this.map.addTilesetImage('CaveBackground','cave1');
        this.map.addTilesetImage('CaveBaseForeground','cave2');
        this.map.addTilesetImage('CaveEntrance','cave3');
        this.map.addTilesetImage('CaveEntranceD','cave4');
        this.map.addTilesetImage('platshrooms','setas');
        this.map.addTilesetImage('Jungle_terrainwater','selva');
        this.map.addTilesetImage('Hierva','hierva2');
        this.map.addTilesetImage('1background', 'tierras');
        this.map.addTilesetImage('Tierra','tierra');
        this.map.addTilesetImage('fondomenu','fons');
        this.map.addTilesetImage('cielo','cielor');
        this.map.addTilesetImage('caja','caja');
        this.map.addTilesetImage('tierrabaja','bajo');
                             
         
        
        //this.layer = this.map.createLayer('Capa de Imagen 1');
       
        
        
        this.layer2 = this.map.createLayer('Capa de Patrones 1');
        this.layer2.resizeWorld();
       
        this.map.setCollisionByExclusion([],true,this.layer2); //collides on every tile
        this.map.setCollisionBetween(1,10000,true,'Capa de Patrones 1');
        this.map.setCollision(this.layer2,true,'Capa de Patrones 1');  
       
        
        this.layer1 = this.map.createLayer('Capa de patrones 2');
        this.layer1.resizeWorld();
        this.layer1.scrollFactorX = 1.5;
        
        this.layer3 = this.map.createLayer('Capa de patrones 3');
        this.layer3.resizeWorld();
        this.layer3.scrollFactorX = 1.2;
        
        
      
     
        
       
        game.world.sendToBack(this.layer1);
        game.world.sendToBack(this.layer3);
         
        
       
       
      
        
        
       
        
        
        
        
        
        
        //this.game.add.sprite(0, 0, 'fondo'); 
    
	}
        

    
};