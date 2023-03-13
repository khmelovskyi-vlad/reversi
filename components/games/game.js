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

    const turnOverStones = this.turnOverStones(x, y);
    if (turnOverStones === 0) {
      throw new Error('Cannot move without turn over any stone');
    }

    this.field.fillCell(x, y, this.currentPlayer);
    this.changeCurrentPlayer();
  }

  turnOverStones(x, y){
    let count = 0;
    count += this.turnOverHorizontalStones(x, y);
    count += this.turnOverVerticalStones(x, y);
    count += this.turnOverDiagonalStones(x, y);
    return count;
  }

  turnOverHorizontalStones(x, y){
    let count = 0;
    if (x !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        if (this.tryTurnOverStone(i, y)) {
          count++;
          continue;
        }
        break;
      }
    }
    if (x !== Field.cellsInRow) {
      for (let i = x + 1; i < Field.cellsInRow; i++) {
        if (this.tryTurnOverStone(i, y)) {
          count++;
          continue;
        }
        break;
      }
    }
    return count;
  }

  turnOverVerticalStones(x, y){
    let count = 0;
    if (y !== 0) {
      for (let i = y - 1; i >= 0; i--) {
        if (this.tryTurnOverStone(x, i)) {
          count++;
          continue;
        }
        break;
      }
    }
    if (y !== Field.cellsInColumn) {
      for (let i = y + 1; i < Field.cellsInColumn; i++) {
        if (this.tryTurnOverStone(x, i)) {
          count++;
          continue;
        }
        break;
      }
    }
    return count;
  }

  turnOverDiagonalStones(x, y){
    let count = 0;
    if (x !== 0 && y !== 0) {
      for (let i = x - 1; i >= 0; i--) {
        for (let j = y - 1; j >= 0; j--) {
          if (this.tryTurnOverStone(i, j)) {
            count++;
            continue;
          }
          break;
        }
      }
    }
    if (x !== Field.cellsInRow && x !== Field.cellsInColumn) {
      for (let i = x + 1; i < Field.cellsInRow; i++) {
        for (let j = y + 1; j < Field.cellsInColumn; j++) {
          if (this.tryTurnOverStone(i, j)) {
            count++;
            continue;
          }
          break;
        }
      }
    }
    return count;
  }

  tryTurnOverStone(x, y){
    const cell = this.field.findCell(x, y);
    if (cell.player === this.nextPlayer) {
      cell.player = this.currentPlayer;
      return true;
    }
    return false;
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