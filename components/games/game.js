const Field = require("../fields/field");

class Game {
  field = null;
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
  }
  addPlayers(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }
}

module.exports = Game;