import { Field } from "../../../components/fields/field.js";
import { Game } from "../../../components/games/game.js";
import { Player } from "../../../components/players/player.js";
import { StoneColor } from "../../../components/stoneColors/stoneColor.js";
import { GameTestFactory } from "../factories/gameTestFactory.js";
import { PlayerTestFactory } from "../factories/playerTestFactory.js";

test('Create field on start game', () => {
  const game = GameTestFactory.createWithoutStart();
  expect(game.field).toBe(null);
  game.start();
  expect(game.field).not.toBe(null);
});

test('game must create document on start game with correct classes', () => {
  const game = GameTestFactory.createWithoutStart();
  expect(game.field).toBe(null);
  game.start();
  Game.classes.forEach(oneClass => {
    expect(game.document.classList).toContain(oneClass);
  });
});

test('game must add field document on start', () => {
  const game = GameTestFactory.createWithoutStart();
  expect(game.field).toBe(null);
  game.start();
  let contains = false;
  for (const child of game.document.children) {
    if (child === game.field.document) {
      contains = true;
      break;
    }
  }    
  expect(contains).toBe(true);
});

test('Add two players to game', () => {
  const game = new Game();
  expect(game.player1).toBe(null);
  expect(game.player2).toBe(null);
  const player1 = new Player('Player 1', StoneColor.black, true);
  const player2 = new Player('Player 2', StoneColor.white, false);
  game.addPlayers(player1, player2);
  expect(game.player1).toBe(player1);
  expect(game.player2).toBe(player2);
});

test('Cannot add null players (throw error)', () => {
  const game = new Game();
  expect(() => game.addPlayers()).toThrow(Error);
  expect(() => game.addPlayers(PlayerTestFactory.create())).toThrow(Error);
  expect(() => game.addPlayers(null, PlayerTestFactory.create())).toThrow(Error);
});

test('Cannot start game (throw exception) when any player is not selected', () => {
  const game = new Game();
  expect(() => game.start()).toThrow(Error);
});

test('Cannot start game (throw exception) when players have same stone color', () => {
  const game = new Game();
  const player1 = PlayerTestFactory.create(true);
  const player2 = PlayerTestFactory.create(true);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Cannot start game (throw exception) when all players have first move', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black, true);
  const player2 = new Player('Player 1', StoneColor.white, true);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Cannot start game (throw exception) when all players not have first move', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black, false);
  const player2 = new Player('Player 1', StoneColor.white, false);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Select current player on start game', () => {
  const game = GameTestFactory.create();
  expect(game.currentPlayer).toBe(game.player1);
});

test('Cannot start game (throw exception) when any players not have first move', () => {
  const game = new Game();
  const player1 = new Player('Player 1', new StoneColor('red'), false);
  const player2 = PlayerTestFactory.create(false);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Cannot move (throw exception) if game was not started', () => {
  const game = GameTestFactory.createWithoutStart();
  expect(() => game.move()).toThrow(Error);
});

test('Cannot move (throw exception) if coordinate is out of range', () => {
  const game = GameTestFactory.create();
  expect(() => game.move(Field.cellsInColumn + 1, 1)).toThrow();
  expect(() => game.move(1, Field.cellsInRow + 1)).toThrow();
  expect(() => game.move(0, 1)).toThrow();
  expect(() => game.move(1, 0)).toThrow();
});

test('Change current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow - 1;
  game.move(x, y);
  expect(game.currentPlayer).toBe(game.player2);
});

test('Cell with selected coordinates must fill current user after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow - 1;
  game.move(x, y);
  const cell = game.field.findCell(x, y);
  expect(cell).not.toBe(null);
  expect(cell.player).toBe(game.player1);
});

test('Can move only on coordinates where can turn over any stone', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow - 1;
  expect(() => game.move(x, y)).not.toThrow();
});

test('Cannot move (throw error) coordinates where can not turn over any stone', () => {
  const game = GameTestFactory.create();
  const x = 0;
  const y = 0;
  expect(() => game.move(x, y)).toThrow(Error);
});

test('Can not move to filled cell', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn - 1;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  expect(() => game.move(x + 2, y)).toThrow();
});

test('If next player does not have move current player does not change', () => {
  const game = GameTestFactory.create();
  const currentPlayer = game.currentPlayer;
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.field.findCell(x + 4, y + 4).player = game.currentPlayer;
  game.move(x + 2, y + 2);
  expect(game.currentPlayer).toBe(currentPlayer);
});

test('Cells horizontally for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow - 1;
  game.move(x, y);
  const player1Cells = game.field.cells.filter(cell => 
    (cell.x === x && cell.y === y)
    || (cell.x === x && cell.y === y + 1)
    || (cell.x === x && cell.y === y + 2)
    || (cell.x === x + 1 && cell.y === y + 1));
  const player2Cells = game.field.cells.filter(cell => 
    cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1);
  expect(player1Cells.every(cell => cell.player === game.player1)).toBe(true);
  expect(player2Cells.every(cell => cell.player === game.player2)).toBe(true);
});

test('Cells vertically for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn - 1;
  const y = Field.halfCellsInRow;
  game.move(x, y);
  const player1Cells = game.field.cells.filter(cell => 
    (cell.x === x && cell.y === y)
    || (cell.x === x + 1 && cell.y === y)
    || (cell.x === x + 2 && cell.y === y)
    || (cell.x === x + 1 && cell.y === y + 1));
  const player2Cells = game.field.cells.filter(cell => 
    cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1);
  expect(player1Cells.every(cell => cell.player === game.player1)).toBe(true);
  expect(player2Cells.every(cell => cell.player === game.player2)).toBe(true);
});

test('Cells diagonally for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn + 1;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.nextPlayer;
  game.move(x + 1, y - 1);
  const player1Cells = game.field.cells.filter(cell => 
    (cell.x === x && cell.y === y)
    || (cell.x === x - 1 && cell.y === y + 1)
    || (cell.x === x + 1 && cell.y === y - 1));
  const player2Cells = game.field.cells.filter(cell => 
    (cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1)
    || (cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow));
  expect(player1Cells.every(cell => cell.player === game.player1)).toBe(true);
  expect(player2Cells.every(cell => cell.player === game.player2)).toBe(true);
});

test('Change current player must change player to another', () => {
  const game = GameTestFactory.create();
  game.changeCurrentPlayer();
  expect(game.currentPlayer).toBe(game.player2);
});

test('Change current player without players must throw exception', () => {
  const game = GameTestFactory.create();
  game.player1 = PlayerTestFactory.create();
  expect(() => game.changeCurrentPlayer()).toThrow(Error);
});

test('Next player must get next player', () => {
  const game = GameTestFactory.create();
  expect(game.nextPlayer).toBe(game.player2);
});

test('Next player without players must throw exception', () => {
  const game = GameTestFactory.create();
  game.player1 = PlayerTestFactory.create();
  expect(() => game.nextPlayer).toThrow(Error);
});

test('On correct move call move', () => {
  const game = GameTestFactory.create();
  const currentPlayerColor = game.currentPlayer.stoneColor;
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow - 1;
  game.field.findCell(x, y).document.click();
  expect(game.currentPlayer.stoneColor).not.toBe(currentPlayerColor);
});

test('isGameFinished is true when game is finished', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.move(x + 2, y + 2);
  expect(game.isGameFinished).toBe(true);
});

test('winnerPlayer must be correct on finishing game', () => {
  const game = GameTestFactory.create();
  const currentPlayer = game.currentPlayer;
  expect(game.winnerPlayer).toBe(null);
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.move(x + 2, y + 2);
  expect(game.winnerPlayer).toBe(currentPlayer);
});

test('winningMessage must be not null on finishing game', () => {
  const game = GameTestFactory.create();
  expect(game.winningMessage).toBe(null);
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.move(x + 2, y + 2);
  expect(game.winningMessage).not.toBe(null);
});

test('winningMessage must be in document on finish game', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.onMove(x + 2, y + 2);
  let contains = false;
  for (const child of game.document.children) {
    if (child === game.winningMessage.document) {
      contains = true;
    }
  }
  expect(contains).toBe(true);
});

test('winningMessage must be before field in document on finish game', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.field.findCell(x, y).player = game.currentPlayer;
  game.onMove(x + 2, y + 2);
  let elementFound = 0;
  for (const child of game.document.children) {
    if (child === game.winningMessage.document) {
      elementFound++;
    }
    else if (elementFound === 1 && child === game.field.document) {
      elementFound++;
    }
  }
  expect(elementFound).toBe(2);
});

test('warningMessage must not be null on error', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.onMove(x + 2, y + 2);
  expect(game.wanringMessage).not.toBe(null);
});

test('warningMessage must be in document on error', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.onMove(x + 2, y + 2);
  let contains = false;
  for (const child of game.document.children) {
    if (child === game.wanringMessage.document) {
      contains = true;
    }
  }
  expect(contains).toBe(true);
});

test('warningMessage must be before field in document on error', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInColumn;
  const y = Field.halfCellsInRow;
  game.onMove(x + 2, y + 2);
  let elementFound = 0;
  for (const child of game.document.children) {
    if (child === game.wanringMessage.document) {
      elementFound++;
    }
    else if (elementFound === 1 && child === game.field.document) {
      elementFound++;
    }
  }
  expect(elementFound).toBe(2);
});