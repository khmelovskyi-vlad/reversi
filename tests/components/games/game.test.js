const Game = require("../../../components/games/game");
const Player = require("../../../components/players/player");
const StoneColor = require("../../../components/stoneColors/stoneColor");

test('Create field on start game', () => {
  const game = new Game();
  expect(game.field).toBe(null);
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2);
  game.start();
  expect(game.field).not.toBe(null);
});

test('Add max two players to game', () => {
  const game = new Game();
  expect(game.player1).toBe(null);
  expect(game.player2).toBe(null);
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2);
  expect(game.player1).toBe(player1);
  expect(game.player2).toBe(player2);
});

test('Cannot start game (throw exception) when any player is not selected', () => {
  const game = new Game();
  expect(() => game.start()).toThrow(Error);
});

test('Cannot start game (throw exception) when players have same stone color', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.black);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Select current player on start game', () => {
  const game = new Game();
  expect(game.currentPlayer).toBe(null);
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2);
  game.start();
  expect(game.currentPlayer).toBe(player1);
});

test('Cannot start game (throw exception) when any players not have first move', () => {
  const game = new Game();
  const player1 = new Player('Player 1', new StoneColor('red'));
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2);
  expect(() => game.start()).toThrow(Error);
});

test('Cannot move (throw exception) if game was not started', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2); 
  expect(() => game.move()).toThrow(Error);
});

test('Change current player after move', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2);
  game.start();
  game.move(0, 0);
  expect(game.currentPlayer).toBe(player2);
});

test('Cell with selected coordinates must fill current user', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2); 
  game.start();
  const x = 0;
  const y = 0;
  game.move(x, y);
  const cell = game.field.cells.find(cell => cell.x === x && cell.y === y);
  expect(cell).not.toBe(null);
  expect(cell.player).toBe(player1);
});

test('Change current player must change player to another', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2); 
  game.start();
  game.changeCurrentPlayer();
  expect(game.currentPlayer).toBe(player2);
});

test('Change current player without players must throw exception', () => {
  const game = new Game();
  const player1 = new Player('Player 1', StoneColor.black);
  const player2 = new Player('Player 2', StoneColor.white);
  game.addPlayers(player1, player2); 
  game.start();
  game.player1 = new Player('Player 3', StoneColor.black);
  expect(() => game.changeCurrentPlayer()).toThrow(Error);
});