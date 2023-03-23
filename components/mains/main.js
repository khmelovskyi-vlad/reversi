import { GameInitialization } from "../gameInitializations/gameInitialization";

export class Main {
  static classes = ['main', 'd-flex', 'justify-content-center'];

  constructor(){
    this.initDocument();
    this.gameInitialization = new GameInitialization();
  }
  
  initDocument(){
    this.document = document.createElement('div');
    Main.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }
}