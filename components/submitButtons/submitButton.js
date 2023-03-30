export class SubmitButton {
  static classes = ['btn', 'btn-primary'];
  document = null;
  
  constructor(text, eventListeners){
    this.text = text;
    this.eventListeners = eventListeners;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('button');
    SubmitButton.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
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