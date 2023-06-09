export class SubmitButton {
  static classes = ['btn', 'btn-primary'];
  document = null;
  static type = 'button';
  
  constructor(text){
    this.text = text;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('button');
    SubmitButton.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.type = SubmitButton.type;
    this.document.textContent = this.text;
  }

  addClickEventListeners(clickEventListeners){
    if (clickEventListeners) {
      clickEventListeners.forEach(clickEventListener => {
        this.document.addEventListener("click", clickEventListener);
      });
    }
  }
}