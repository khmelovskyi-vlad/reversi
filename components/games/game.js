import { Field } from "../fields/field.js";

export class Game {
  static classes = ['game'];
  field = null;
  currentPlayer = null;
  document = null;
  player1 = null;
  player2 = null;
  winnerPlayer = null;
  gameWasStarted = false;
  isGameFinished = false;

  start(){
    this.startGameValidation();
    this.currentPlayer = this.selectFirstPlayer();
    this.field = new Field(this.currentPlayer, this.nextPlayer, (x, y) => this.onMove(x, y));
    this.gameWasStarted = true;
    this.createDocument();
  }

  createDocument(){
    this.document = document.createElement('div');
    Game.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.appendChild(this.field.document);
  }

  startGameValidation(){
    if (!this.player1 || !this.player2) {
      throw new Error('Can not start game without players initialization');
    }
    if (this.player1.stoneColor === this.player2.stoneColor) {
      throw new Error('Can not start game if players have the same stone colors');
    }
    if (this.player1.isPlayerFirstMove === true && this.player2.isPlayerFirstMove === true) {
      throw new Error('Can not start game if all players have first move');
    }
    if (this.player1.isPlayerFirstMove === false && this.player2.isPlayerFirstMove === false) {
      throw new Error('Can not start game if all players not have first move');
    }
  }

  addPlayers(player1, player2){
    if (!player1 || !player2) {
      throw new Error('Can not add null players');
    }
    this.player1 = player1;
    this.player2 = player2;
  }

  selectFirstPlayer(){
    if (this.player1.isPlayerFirstMove) {
      return this.player1;
    }
    else if(this.player2.isPlayerFirstMove){
      return this.player2;
    }
    
    throw new Error('No players is with first move');
  }
  
  onMove(x, y){
    try {
      this.move(x, y);
    } catch (error) {
      console.error(error);
    }
  }

  move(x, y){
    if (!this.gameWasStarted) {
      throw new Error('Cannot move if game was not started');
    }

    if (x <= 0 || x > Field.cellsInColumn || y <= 0 || y > Field.cellsInRow) {
      throw new Error('Cannot move if coordinates is out of range');
    }

    if (!this.field.findCell(x, y).isEmpty) {
      throw new Error('Cannot move on filled cell');
    }

    const cells = this.turnOverStones(x, y);
    if (cells.length === 0) {
      throw new Error('Cannot move without turn over any stone');
    }

    this.turnOverCells(cells);
    this.field.fillCell(x, y, this.currentPlayer);
    if (this.detectFinishGame()) {
      return;
    }
    this.changeCurrentPlayer();
    if (!this.haveMove()) {
      this.changeCurrentPlayer();
    }
  }

  detectFinishGame(){
    if (!this.pleyerHaveCells(this.nextPlayer)) {
      this.isGameFinished = true;
      this.winnerPlayer = this.currentPlayer;
    }

    return this.isGameFinished;
  }

  pleyerHaveCells(player){
    for (let i = 0; i < this.field.cells.length; i++) {
      const cell = this.field.cells[i];
      if (cell.player === player) {
        return true;
      }
    }

    return false;
  }

  haveMove(){
    const emptyCells = this.field.getEmptyCells();
    for (let i = 0; i < emptyCells.length; i++) {
      const emptyCell = emptyCells[i];
      const turnOverCells = this.turnOverStones(emptyCell.x, emptyCell.y);

      if (turnOverCells.length > 0) {
        return true;
      }
    }

    return false;
  }

  turnOverCells(cells){
    cells.forEach(cell => {
      cell.fill(this.currentPlayer);
    });
  }

  turnOverStones(x, y){
    const turnOverCells = [];
    this.turnOverHorizontalStones(x, y, turnOverCells);
    this.turnOverVerticalStones(x, y, turnOverCells);
    this.turnOverDiagonalStones(x, y, turnOverCells);
    return turnOverCells;
  }

  tryTurnOverStone(cell, tempCells, turnOverCells){
    if (cell.player === this.nextPlayer) {
      tempCells.push(cell);
      return false;
    }
    else if(cell.player === this.currentPlayer){
      if (tempCells.length > 0) {
        tempCells.forEach(cell => {
          turnOverCells.push(cell);
        });
      }
    }

    return true;
  }

  turnOverHorizontalStones(x, y, turnOverCells){
    if (y !== 1) {
      const tempCells = [];
      for (let i = y - 1; i >= 1; i--) {
        const cell = this.field.findCell(x, i);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
      }
    }
    if (y !== Field.cellsInColumn) {
      const tempCells = [];
      for (let i = y + 1; i <= Field.cellsInColumn; i++) {
        const cell = this.field.findCell(x, i);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
      }
    }
  }

  turnOverVerticalStones(x, y, turnOverCells){
    if (x !== 1) {
      const tempCells = [];
      for (let i = x - 1; i >= 1; i--) {
        const cell = this.field.findCell(i, y);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
      }
    }
    if (x !== Field.cellsInRow) {
      const tempCells = [];
      for (let i = x + 1; i <= Field.cellsInRow; i++) {
        const cell = this.field.findCell(i, y);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
      }
    }
  }

  turnOverDiagonalStones(x, y, turnOverCells){
    if (x !== 1 && y !== 1) {
      const tempCells = [];
      let i = x - 1;
      let j = y - 1;
      while (i >= 1 && j >= 1) {
        const cell = this.field.findCell(i, j);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
        i--;
        j--;
      }
    }
    if (x !== Field.cellsInColumn && y !== Field.cellsInRow) {
      const tempCells = [];
      let i = x + 1;
      let j = y + 1;
      while (i <= Field.cellsInColumn && j <= Field.cellsInRow) {
        const cell = this.field.findCell(i, j);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
        i++;
        j++;
      }
    }
    if (x !== Field.cellsInColumn && y !== 1) {
      const tempCells = [];
      let i = x + 1;
      let j = y - 1;
      while (i <= Field.cellsInColumn && j >= 1) {
        const cell = this.field.findCell(i, j);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
        i++;
        j--;
      }
    }
    if (x !== 1 && y !== Field.cellsInRow) {
      const tempCells = [];
      let i = x - 1;
      let j = y + 1;
      while (i >= 1 && j <= Field.cellsInRow) {
        const cell = this.field.findCell(i, j);
        if (this.tryTurnOverStone(cell, tempCells, turnOverCells)) {
          break;
        }
        i--;
        j++;
      }
    }
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