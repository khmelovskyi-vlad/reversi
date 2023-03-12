const Game = require("../../../components/games/game");
const Player = require("../../../components/players/player");

test('Create field on start game', () => {
  const game = new Game();
  expect(game.field).toBe(null);
  const player1 = new Player();
  const player2 = new Player(); 
  game.addPlayers(player1, player2);
  game.start();
  expect(game.field).not.toBe(null);
});

test('Add max two players to game', () => {
  const game = new Game();
  expect(game.player1).toBe(null);
  expect(game.player2).toBe(null);
  const player1 = new Player();
  const player2 = new Player(); 
  game.addPlayers(player1, player2);
  expect(game.player1).toBe(player1);
  expect(game.player2).toBe(player2);
});

test('Cannot start game (throw exception) when any player is not selected', () => {
  const game = new Game();
  expect(() => game.start()).toThrow(Error);
});

// test('Select current player on start game', () => {
//   const game = new Game();
//   expect(game.currentPlayer).toBe(null);
//   game.start();
//   expect(game.currentPlayer).not.toBe(null);
// });