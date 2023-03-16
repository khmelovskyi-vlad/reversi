import { Player } from "../../../components/players/player.js";
import { StoneColor } from "../../../components/stoneColors/stoneColor.js";
import { StringTestFactory } from "./stringTestFactiry.js";

export class PlayerTestFactory{
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