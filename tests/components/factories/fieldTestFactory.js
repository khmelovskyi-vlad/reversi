const Field = require("../../../components/fields/field");
const PlayerTestFactory = require("./playerTestFactory");

class FieldTestFactory{
  static create(){
    return new Field(
        PlayerTestFactory.create(true),
        PlayerTestFactory.create(false));
  }
}

module.exports = FieldTestFactory;