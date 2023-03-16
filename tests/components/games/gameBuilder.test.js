import { GameBuilder } from "../../../components/games/gameBuilder.js";
import { Player } from "../../../components/players/player.js";
import { StoneColor } from "../../../components/stoneColors/stoneColor.js";


test('Game builder with players and start game must build correct game', () => {
  const player1 = new Player('Player 1', StoneColor.black, true);
  const player2 = new Player('Player 2', StoneColor.white, false);
  const game = new GameBuilder().withPlayers(player1, player2).withStart().build(); 
  expect(game.player1).toBe(player1);
  expect(game.player2).toBe(player2);
  expect(game.currentPlayer).toBe(player1);
  expect(game.gameWasStarted).toBe(true);
});