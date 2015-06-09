var menuState = {

	create: function() { 
        
        
        
        
        
       game.add.tileSprite(0, 0, 1000, 600, 'fons');
		this.game.world.setBounds(0,0,1000,600); 

		var nameLabel = game.add.text(game.world.centerX, -50, 'Wolf´s Awakes', { font: '70px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		if (!localStorage.getItem('bestScore')) {
			localStorage.setItem('bestScore', 0);
		}
				
		if (game.global.score > localStorage.getItem('bestScore')) {
			localStorage.setItem('bestScore', game.global.score);	
		}
        
        
        this.button1 =  game.add.button(game.world.centerX-250,game.world.centerY + 170, 'boton1', this.start);
        this.button1.anchor.setTo(0.5, 0.5);

        this.button2 = game.add.button(game.world.centerX+250,game.world.centerY + 170, 'boton2', this.start2);
        this.button2.anchor.setTo(0.5, 0.5);

		var text = 'score: ' + game.global.score + '\nbest score: ' + localStorage.getItem('bestScore');
		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, text, { font: '25px Arial', fill: '#ffffff', align: 'center' });
		scoreLabel.anchor.setTo(0.5, 0.5);

        

	
        
        if(!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', 0);
        }
        
        if(game.global.score > localStorage.getItem('bestScore')){
            localStorage.setItem('bestScore' , game.global.score);
        
        }
        
      
        
        
        
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
        
        var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        downKey.onDown.addOnce(this.start2, this);
        
        
        
        
	},
    
 

	toggleSound: function() {
		game.sound.mute = ! game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;		
	},

	start: function() {
		game.state.start('play');	
       
	},
    
    start2: function() {
 
    game.state.start('play2');
},
    
    
};