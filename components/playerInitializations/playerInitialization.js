class PlayerInitialization {
  static classes = ['row', 'm-3'];
  document = null;

  constructor(){
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('div');
    PlayerInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }
}

module.exports = PlayerInitialization;