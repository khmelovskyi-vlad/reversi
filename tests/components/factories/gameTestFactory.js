const GameBuilder = require("../../../components/games/gameBuilder");
const PlayerTestFactory = require("./playerTestFactory");

class GameTestFactory{
  static create(){
    return new GameBuilder()
      .withPlayers(
        PlayerTestFactory.create(true),
        PlayerTestFactory.create(false))
      .withStart()
      .build();
  }

  static createWithoutStart(){
    return new GameBuilder()
      .withPlayers(
        PlayerTestFactory.create(true),
        PlayerTestFactory.create(false))
      .build();
  }
}

module.exports = GameTestFactory;