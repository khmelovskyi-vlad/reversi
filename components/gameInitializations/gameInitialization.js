class GameInitialization {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  static playerClasses = ['row', 'm-3'];
  static submitClasses = ['btn', 'btn-primary'];
  document = null;
  player1Document = null;
  player2Document = null;
  submitDocument = null;

  constructor(){
    this.initDocument();
    this.initPlayer1Document();
    this.initPlayer2Document();
    this.initSubmitDocument();
  }

  initDocument(){
    this.document = document.createElement('form');
    GameInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  initPlayer1Document(){
      this.player1Document = document.createElement('div');
      GameInitialization.playerClasses.forEach(oneClass => {
        this.player1Document.classList.add(oneClass);
      });
      this.document.appendChild(this.player1Document);
  }

  initPlayer2Document(){
      this.player2Document = document.createElement('div');
      GameInitialization.playerClasses.forEach(oneClass => {
        this.player2Document.classList.add(oneClass);
      });
      this.document.appendChild(this.player2Document);
  }

  initSubmitDocument(){
      this.submitDocument = document.createElement('button');
      GameInitialization.submitClasses.forEach(oneClass => {
        this.submitDocument.classList.add(oneClass);
      });
      this.document.appendChild(this.submitDocument);
  }

}

module.exports = GameInitialization;