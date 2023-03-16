export class WarningMessage {
  static classes = ['warning-message', 'text-danger'];
  document = null;
  
  constructor(text){
    this.text = text;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('span');
    WarningMessage.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.textContent = this.text;
  }
}