const Field = require("../fields/field");

class Game {
  field = null;
  start(){
    this.field = new Field();
  }
}

module.exports = Game;