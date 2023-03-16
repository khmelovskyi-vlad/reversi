class SubmitButton {
  static classes = ['game-initialization', 'd-flex', 'flex-column'];
  document = null;
  
  constructor(){
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('button');
    SubmitButton.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }
}

module.exports = SubmitButton;