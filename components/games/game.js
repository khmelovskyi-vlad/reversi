const Field = require("../fields/field");

class Game {
  field = null;
  player1 = null;
  player2 = null;
  start(){
    this.field = new Field();
  }
  addPlayers(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }
}

module.exports = Game;