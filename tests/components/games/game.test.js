const Game = require("../../../components/games/game");

test('Create field on start game', () => {
  const game = new Game();
  expect(game.field).toBe(null);
  game.start();
  expect(game.field).not.toBe(null);
});