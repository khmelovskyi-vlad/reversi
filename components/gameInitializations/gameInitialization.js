import { Game } from "../games/game.js";
import { Player } from "../players/player.js";
import { PlayerInitialization } from "../playerInitializations/playerInitialization.js";
import { SubmitButton } from "../submitButtons/submitButton.js";
import { WarningMessage } from "../warningMessages/warningMessage.js";

export class GameInitialization {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  document = null;
  warningMessage = null;
  
  constructor(onInitializeGame){
    this.initDocument();
    this.player1Initialization = new PlayerInitialization(1);
    this.document.appendChild(this.player1Initialization.document);
    this.player2Initialization = new PlayerInitialization(2);
    this.document.appendChild(this.player2Initialization.document);
    this.submitButton = new SubmitButton('');
    this.submitButton.addClickEventListeners([onInitializeGame]);
    this.document.appendChild(this.submitButton.document);
  }

  initDocument(){
    this.document = document.createElement('form');
    GameInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  tryGetValue(){
    if (this.player1Initialization.stoneColorInitialization.getSelectedOption().textContent == this.player2Initialization.stoneColorInitialization.getSelectedOption().textContent) {
      this.warningMessage = new WarningMessage('');
      return null;
    }
    else{
      const player1 = this.player1Initialization.getValue();
      const player2 = this.player2Initialization.getValue();
      const game = new Game();
      game.addPlayers(player1, player2);
      return game;
    }
  }
}