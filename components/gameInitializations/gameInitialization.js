const PlayerInitialization = require("../playerInitializations/playerInitialization");
const SubmitButton = require("../submitButtons/submitButton");

class GameInitialization {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  document = null;
  
  constructor(){
    this.initDocument();
    this.player1Initialization = new PlayerInitialization();
    this.player2Initialization = new PlayerInitialization();
    this.submitButton = new SubmitButton();
  }

  initDocument(){
    this.document = document.createElement('form');
    GameInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }
}

module.exports = GameInitialization;