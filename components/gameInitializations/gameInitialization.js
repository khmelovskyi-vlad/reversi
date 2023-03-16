import { PlayerInitialization } from "../playerInitializations/playerInitialization.js";
import { SubmitButton } from "../submitButtons/submitButton.js";

export class GameInitialization {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  document = null;
  
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
}