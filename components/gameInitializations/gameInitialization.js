import { Game } from "../games/game.js";
import { PlayerInitialization } from "../playerInitializations/playerInitialization.js";
import { SubmitButton } from "../submitButtons/submitButton.js";
import { WarningMessage } from "../warningMessages/warningMessage.js";

export class GameInitialization {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  document = null;
  warningMessage = null;
  game = null;
  
  constructor(){
    this.initDocument();
    this.player1Initialization = new PlayerInitialization(1);
    this.document.appendChild(this.player1Initialization.document);
    this.player2Initialization = new PlayerInitialization(2);
    this.document.appendChild(this.player2Initialization.document);
    this.submitButton = new SubmitButton();
    this.document.appendChild(this.submitButton.document);
  }

  initDocument(){
    this.document = document.createElement('form');
    GameInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  onSubmitClick(){
    if (this.player1Initialization.stoneColorInitialization.getSelectedOption().textContent == this.player2Initialization.stoneColorInitialization.getSelectedOption().textContent) {
      this.warningMessage = new WarningMessage('');
    }
    else{
      this.game = new Game();
    }
  }
}