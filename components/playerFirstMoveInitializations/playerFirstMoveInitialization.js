export class PlayerFirstMoveInitialization {
  static classes = ['col'];
  static labelClasses = ['form-check-label'];
  static inputClasses = ['form-check-input'];
  static inputIdFirstPart = 'playerFirstMove';
  static labelForAttributeName = 'for';
  static inputIdAttributeName = 'id';
  static inputTypeAttributeName = 'type';
  static inputTypeAttribute = 'radio';
  static labelTextFormat = 'Have first move';
  static inputNameAttributeName = 'name';
  static inputNameAttribute = 'firstMove';
  static inputRequiredAttributeName = 'required';
  static inputRequiredAttribute = '';
  static inputCheckedAttributeName = 'checked';
  static inputCheckedAttribute = '';
  document = null;
  labelDocument = null;
  inputDocument = null;
  
  constructor(playerNumber, onClick){
    this.playerNumber = playerNumber;
    if(this.playerNumber === 1){
      this.checked = true;
    }
    this.initDocument(onClick);
    this.initLabel();
    this.initInput();
  }

  initDocument(onClick){
    this.document = document.createElement('div');
    PlayerFirstMoveInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    if (onClick) {
      this.document.addEventListener('click', () => onClick(this.playerNumber));
    }
  }

  initLabel(){
    this.labelDocument = document.createElement('label');
    PlayerFirstMoveInitialization.labelClasses.forEach(oneClass => {
      this.labelDocument.classList.add(oneClass);
    });
    this.labelDocument.setAttribute(
      PlayerFirstMoveInitialization.labelForAttributeName,
      PlayerFirstMoveInitialization.inputIdFirstPart + this.playerNumber);
    this.labelDocument.textContent = PlayerFirstMoveInitialization.labelTextFormat;
    this.document.appendChild(this.labelDocument);
  }

  initInput(){
    this.inputDocument = document.createElement('input');
    PlayerFirstMoveInitialization.inputClasses.forEach(oneClass => {
      this.inputDocument.classList.add(oneClass);
    });
    this.inputDocument.setAttribute(
      PlayerFirstMoveInitialization.inputIdAttributeName,
      PlayerFirstMoveInitialization.inputIdFirstPart + this.playerNumber);
    this.inputDocument.setAttribute(
      PlayerFirstMoveInitialization.inputTypeAttributeName,
      PlayerFirstMoveInitialization.inputTypeAttribute);
    this.inputDocument.setAttribute(
      PlayerFirstMoveInitialization.inputRequiredAttributeName,
      PlayerFirstMoveInitialization.inputRequiredAttribute);
    this.inputDocument.setAttribute(
      PlayerFirstMoveInitialization.inputNameAttributeName,
      PlayerFirstMoveInitialization.inputNameAttribute);
    if (this.checked) {
      this.inputDocument.setAttribute(
        PlayerFirstMoveInitialization.inputCheckedAttributeName,
        PlayerFirstMoveInitialization.inputCheckedAttribute);
    }
    this.document.appendChild(this.inputDocument);
  }

  makeChecked(){
    if (!this.checked) {
      this.checked = true;
      this.inputDocument.setAttribute(
        PlayerFirstMoveInitialization.inputCheckedAttributeName,
        PlayerFirstMoveInitialization.inputCheckedAttribute);
    }
  }

  removeChecked(){
    if (this.checked) {
      this.checked = false;
      this.inputDocument.removeAttribute(
        PlayerFirstMoveInitialization.inputCheckedAttributeName);
    }
  }

  getValue(){
    return this.inputDocument.getAttribute(PlayerFirstMoveInitialization.inputCheckedAttributeName) == PlayerFirstMoveInitialization.inputCheckedAttribute;
  }
}