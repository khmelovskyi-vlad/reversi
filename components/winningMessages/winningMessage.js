export class WinningMessage {
  static classes = ['winning-message', 'text-success'];
  document = null;
  
  constructor(text){
    this.text = text;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('span');
    WinningMessage.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.textContent = this.text;
  }
}