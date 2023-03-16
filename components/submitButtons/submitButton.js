export class SubmitButton {
  static classes = ['btn', 'btn-primary'];
  document = null;
  
  constructor(text){
    this.text = text;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('button');
    SubmitButton.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.textContent = this.text;
  }
}