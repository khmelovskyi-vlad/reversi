const Player = require("../../../components/players/player");
const StoneColor = require("../../../components/stoneColors/stoneColor");
const StringTestFactory = require("./stringTestFactiry");

class PlayerTestFactory{
  static create(isPlayerFirstMove = false, name = null){
    return new Player(PlayerTestFactory.createName(name), PlayerTestFactory.createColor(isPlayerFirstMove), isPlayerFirstMove);
  }

  static createName(name){
    if (!name) {
      name = StringTestFactory.createRandom();
    }

    return name;
  }

  static createColor(isPlayerFirstMove){
    if (isPlayerFirstMove) {
      return StoneColor.black;
    }

    return StoneColor.white;
  }
}

module.exports = PlayerTestFactory;