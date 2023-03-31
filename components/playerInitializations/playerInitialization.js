import { PlayerFirstMoveInitialization } from "../playerFirstMoveInitializations/playerFirstMoveInitialization.js";
import { PlayerNameInitialization } from "../playerNameInitializations/playerNameInitialization.js";
import { Player } from "../players/player.js";
import { PlayerStoneColorInitialization } from "../playerStoneColorInitializations/playerStoneColorInitialization.js";

export class PlayerInitialization {
  static classes = ['row', 'm-3'];
  document = null;

  constructor(playerNumber){
    this.playerNumber = playerNumber;
    this.initDocument();
    this.nameInitialization = new PlayerNameInitialization(this.playerNumber);
    this.document.appendChild(this.nameInitialization.document);
    this.stoneColorInitialization = new PlayerStoneColorInitialization(this.playerNumber);
    this.document.appendChild(this.stoneColorInitialization.document);
    this.firstMoveInitialization = new PlayerFirstMoveInitialization(this.playerNumber);
    this.document.appendChild(this.firstMoveInitialization.document);
  }

  initDocument(){
    this.document = document.createElement('div');
    PlayerInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  getValue(){
    return new Player(this.nameInitialization.getValue(), this.stoneColorInitialization.getValue(), this.firstMoveInitialization.getValue());
  }
}