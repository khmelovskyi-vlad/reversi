const Field = require("../fields/field");

class Game {
  field = null;
  currentPlayer = null;
  player1 = null;
  player2 = null;

  start(){
    if (!this.player1 || !this.player2) {
      throw new Error('Can not start game without players initialization');
    }
    if (this.player1.stoneColor === this.player2.stoneColor) {
      throw new Error('Can not start game if players have the same stone colors');
    }
    
    this.field = new Field();
    this.currentPlayer = this.selectFirstPlayer();
  }

  addPlayers(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }

  selectFirstPlayer(){
    if (this.player1.stoneColor === 'Black') {
      return this.player1;
    }
    else if(this.player1.stoneColor === 'Black'){
      return this.player2;
    }
    
    throw new Error('No players have black stone color');
  }
}

module.exports = Game;