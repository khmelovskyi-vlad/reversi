import { Game } from "./game.js";

export class GameBuilder {
  startGame = false;
  player1 = null;
  player2 = null;

  withPlayers(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    return this;
  }

  withStart(){
    this.startGame = true;
    return this;
  }

  build(){
    const game = new Game();
    game.addPlayers(this.player1, this.player2);
    if(this.startGame){
      game.start();
    }
    return game;
  }
}