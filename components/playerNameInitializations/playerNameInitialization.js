export class PlayerNameInitialization {
  static classes = ['col-6'];
  static labelClasses = ['form-label'];
  static inputClasses = ['form-control'];
  static inputIdFirstPart = 'playerName';
  static labelForAttributeName = 'for';
  static inputIdAttributeName = 'id';
  static inputTypeAttributeName = 'type';
  static inputTypeAttribute = 'text';
  static labelTextFormat = 'Player {0} name';
  static inputRequiredAttributeName = 'required';
  static inputRequiredAttribute = '';
  document = null;
  labelDocument = null;
  inputDocument = null;
  
  constructor(playerNumber){
    this.playerNumber = playerNumber;
    this.initDocument();
    this.initLabel();
    this.initInput();
  }

  initDocument(){
    this.document = document.createElement('div');
    PlayerNameInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  initLabel(){
    this.labelDocument = document.createElement('label');
    PlayerNameInitialization.labelClasses.forEach(oneClass => {
      this.labelDocument.classList.add(oneClass);
    });
    this.labelDocument.setAttribute(
      PlayerNameInitialization.labelForAttributeName,
      PlayerNameInitialization.inputIdFirstPart + this.playerNumber);
    this.labelDocument.textContent = PlayerNameInitialization.labelTextFormat.format(this.playerNumber);
    this.document.appendChild(this.labelDocument);
  }

  initInput(){
    this.inputDocument = document.createElement('input');
    PlayerNameInitialization.inputClasses.forEach(oneClass => {
      this.inputDocument.classList.add(oneClass);
    });
    this.inputDocument.setAttribute(
      PlayerNameInitialization.inputIdAttributeName,
      PlayerNameInitialization.inputIdFirstPart + this.playerNumber);
    this.inputDocument.setAttribute(
      PlayerNameInitialization.inputTypeAttributeName,
      PlayerNameInitialization.inputTypeAttribute);
    this.inputDocument.setAttribute(
      PlayerNameInitialization.inputRequiredAttributeName,
      PlayerNameInitialization.inputRequiredAttribute);
    this.document.appendChild(this.inputDocument);
  }
}