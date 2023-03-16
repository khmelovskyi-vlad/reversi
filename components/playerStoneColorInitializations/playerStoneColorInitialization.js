export class PlayerStoneInitialization {
  static classes = ['col'];
  static labelClasses = ['form-label'];
  static selectClasses = ['form-control'];
  static selectIdFirstPart = 'playerStoneColor';
  static labelForAttributeName = 'for';
  static selectIdAttributeName = 'id';
  static labelTextFormat = 'Stone color';
  static selectRequiredAttributeName = 'required';
  static selectRequiredAttribute = '';
  document = null;
  labelDocument = null;
  selectDocument = null;
  
  constructor(playerNumber){
    this.playerNumber = playerNumber;
    this.initDocument();
    this.initLabel();
    this.initSelect();
  }

  initDocument(){
    this.document = document.createElement('div');
    PlayerStoneInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  initLabel(){
    this.labelDocument = document.createElement('label');
    PlayerStoneInitialization.labelClasses.forEach(oneClass => {
      this.labelDocument.classList.add(oneClass);
    });
    this.labelDocument.setAttribute(
      PlayerStoneInitialization.labelForAttributeName,
      PlayerStoneInitialization.selectIdFirstPart + this.playerNumber);
    this.labelDocument.textContent = PlayerStoneInitialization.labelTextFormat;
    this.document.appendChild(this.labelDocument);
  }

  initSelect(){
    this.selectDocument = document.createElement('select');
    PlayerStoneInitialization.selectClasses.forEach(oneClass => {
      this.selectDocument.classList.add(oneClass);
    });
    this.selectDocument.setAttribute(
      PlayerStoneInitialization.selectIdAttributeName,
      PlayerStoneInitialization.selectIdFirstPart + this.playerNumber);
    this.selectDocument.setAttribute(
      PlayerStoneInitialization.selectRequiredAttributeName,
      PlayerStoneInitialization.selectRequiredAttribute);
    this.selectDocument.setAttribute(
      PlayerStoneInitialization.selectRequiredAttributeName,
      PlayerStoneInitialization.selectRequiredAttribute);
    this.document.appendChild(this.selectDocument);
  }
}