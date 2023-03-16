import { GameBuilder } from "../../../components/games/gameBuilder.js";
import { PlayerTestFactory } from "./playerTestFactory.js";

export class GameTestFactory{
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