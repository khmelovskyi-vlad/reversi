import { GameInitialization } from "../gameInitializations/gameInitialization";

export class Main {
  static classes = ['main', 'd-flex', 'justify-content-center'];
  document = null;
  game = null;

  constructor(){
    this.initDocument();
    this.gameInitialization = new GameInitialization(() => this.onInitializeGame());
    this.document.appendChild(this.gameInitialization.document);
  }

  onInitializeGame(){
    try {
      this.game = this.gameInitialization.tryGetValue();
      this.document.removeChild(this.gameInitialization.document);
    } catch (error) {
      console.error(error);
    }
  }
  
  initDocument(){
    this.document = document.createElement('div');
    Main.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }
}