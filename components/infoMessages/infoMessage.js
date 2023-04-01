export class InfoMessage {
  static classes = ['info-message', 'text-primary'];
  document = null;
  
  constructor(text){
    this.text = text;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('span');
    InfoMessage.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.textContent = this.text;
  }
}