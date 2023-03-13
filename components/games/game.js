const Field = require("../fields/field");

class Game {
  field = null;
  currentPlayer = null;
  player1 = null;
  player2 = null;
  gameWasStarted = false;

  start(){
    if (!this.player1 || !this.player2) {
      throw new Error('Can not start game without players initialization');
    }
    if (this.player1.stoneColor === this.player2.stoneColor) {
      throw new Error('Can not start game if players have the same stone colors');
    }
    
    this.currentPlayer = this.selectFirstPlayer();
    this.field = new Field(this.currentPlayer, this.nextPlayer);
    this.gameWasStarted = true;
  }

  addPlayers(player1, player2){
    if (!player1 || !player2) {
      throw new Error('Can not add null players');
    }
    this.player1 = player1;
    this.player2 = player2;
  }

  selectFirstPlayer(){
    if (this.player1.stoneColor.isPlayerFirstMove) {
      return this.player1;
    }
    else if(this.player2.stoneColor.isPlayerFirstMove){
      return this.player2;
    }
    
    throw new Error('No players is with first move');
  }

  move(x, y){
    if (!this.gameWasStarted) {
      throw new Error('Cannot move if game was not started');
    }
    this.field.fillCell(x, y, this.currentPlayer);
    this.changeCurrentPlayer();
  }

  changeCurrentPlayer(){
    this.currentPlayer = this.nextPlayer;
  }

  get nextPlayer(){
    if (this.currentPlayer === this.player1) {
      return this.player2;
    }
    else if (this.currentPlayer === this.player2) {
      return this.player1;
    }
    
    throw new Error('Cannot get next player because existing players is not the same');
  }
}

module.exports = Game;