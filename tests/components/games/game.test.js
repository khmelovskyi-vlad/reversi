const Field = require("../../../components/fields/field");
const Game = require("../../../components/games/game");
const Player = require("../../../components/players/player");
const StoneColor = require("../../../components/stoneColors/stoneColor");
const GameTestFactory = require("../factories/gameTestFactory");
const PlayerTestFactory = require("../factories/playerTestFactory");

test('Create field on start game', () => {
  const game = GameTestFactory.createWithoutStart();
  expect(game.field).toBe(null);
  game.start();
  expect(game.field).not.toBe(null);
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

test('Change current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow + 1;
  const y = Field.halfCellsInColumn;
  game.move(x, y);
  expect(game.currentPlayer).toBe(game.player2);
});

test('Cell with selected coordinates must fill current user after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow + 1;
  const y = Field.halfCellsInColumn;
  game.move(x, y);
  const cell = game.field.findCell(x, y);
  expect(cell).not.toBe(null);
  expect(cell.player).toBe(game.player1);
});

test('Can move only on coordinates where can turn over any stone', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow + 1;
  const y = Field.halfCellsInColumn;
  game.move(x, y);
  expect(true).toBe(true);
});

test('Cannot move (throw error) coordinates where can not turn over any stone', () => {
  const game = GameTestFactory.create();
  const x = 0;
  const y = 0;
  expect(() => game.move(x, y)).toThrow(Error);
});

test('Cells horizontally for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow + 1;
  const y = Field.halfCellsInColumn;
  game.move(x, y);
  const cells = game.field.cells.filter(cell => 
    cell.x === x - 1 && cell.y === y);
  expect(cells.every(cell => cell.player === game.player1)).toBe(true);
});

test('Cells vertically for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow;
  const y = Field.halfCellsInColumn + 1;
  game.move(x, y);
  const cells = game.field.cells.filter(cell => 
    cell.x === x && cell.y === y - 1);
  expect(cells.every(cell => cell.player === game.player1)).toBe(true);
});

test('Cells diagonally for current player cell must fill current player after move', () => {
  const game = GameTestFactory.create();
  const x = Field.halfCellsInRow + 1;
  const y = Field.halfCellsInColumn;
  game.field.findCell(x, y).player = game.nextPlayer;
  game.move(x + 1, y + 1);
  const cells = game.field.cells.filter(cell => 
    cell.x === x && cell.y === y);
  expect(cells.every(cell => cell.player === game.player1)).toBe(true);
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