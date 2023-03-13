const Player = require("../../../components/players/player");
const StoneColor = require("../../../components/stoneColors/stoneColor");
const StringTestFactory = require("./stringTestFactiry");

class PlayerTestFactory{
  static create(isPlayerFirstMove = false, name = null){
    if (isPlayerFirstMove) {
      if (name) {
        return new Player(name, StoneColor.black);
      }
      return new Player(StringTestFactory.createRandom(), StoneColor.black);
    }
    else{
      if (name) {
        return new Player(name, StoneColor.white);
      }
      return new Player(StringTestFactory.createRandom(), StoneColor.white);
    }
  }
}

module.exports = PlayerTestFactory;