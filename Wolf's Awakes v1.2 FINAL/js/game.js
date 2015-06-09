var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'gameDiv');


game.global = {
	score: 0
    
};

game.global = {
	score2: 0
    
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('play2', play2State);
//game.state.add('dead', deadState);
//game.state.add('victory', victoryState);


game.state.start('boot');