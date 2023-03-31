import { StoneColor } from "../stoneColors/stoneColor.js";

export class PlayerStoneColorInitialization {
  static classes = ['col'];
  static labelClasses = ['form-label'];
  static selectClasses = ['form-control'];
  static selectIdFirstPart = 'playerStoneColor';
  static labelForAttributeName = 'for';
  static selectIdAttributeName = 'id';
  static labelTextFormat = 'Stone color';
  static selectRequiredAttributeName = 'required';
  static selectRequiredAttribute = '';
  static optionSelectedAttributeName = 'selected';
  document = null;
  labelDocument = null;
  selectDocument = null;
  
  constructor(playerNumber){
    this.playerNumber = playerNumber;
    this.initDocument();
    this.initLabel();
    this.initSelect();
    this.initOptions();
  }

  initDocument(){
    this.document = document.createElement('div');
    PlayerStoneColorInitialization.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
  }

  initLabel(){
    this.labelDocument = document.createElement('label');
    PlayerStoneColorInitialization.labelClasses.forEach(oneClass => {
      this.labelDocument.classList.add(oneClass);
    });
    this.labelDocument.setAttribute(
      PlayerStoneColorInitialization.labelForAttributeName,
      PlayerStoneColorInitialization.selectIdFirstPart + this.playerNumber);
    this.labelDocument.textContent = PlayerStoneColorInitialization.labelTextFormat;
    this.document.appendChild(this.labelDocument);
  }

  initSelect(){
    this.selectDocument = document.createElement('select');
    PlayerStoneColorInitialization.selectClasses.forEach(oneClass => {
      this.selectDocument.classList.add(oneClass);
    });
    this.selectDocument.setAttribute(
      PlayerStoneColorInitialization.selectIdAttributeName,
      PlayerStoneColorInitialization.selectIdFirstPart + this.playerNumber);
    this.selectDocument.setAttribute(
      PlayerStoneColorInitialization.selectRequiredAttributeName,
      PlayerStoneColorInitialization.selectRequiredAttribute);
    this.selectDocument.setAttribute(
      PlayerStoneColorInitialization.selectRequiredAttributeName,
      PlayerStoneColorInitialization.selectRequiredAttribute);
    this.document.appendChild(this.selectDocument);
  }

  initOptions(){
    const colors = StoneColor.availableColors();
    colors.forEach(color => {
      const option = document.createElement('option');
      if (this.playerNumber === 1 && color === StoneColor.black) {
        option.setAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName, '');
      }
      else if (this.playerNumber !== 1 && color === StoneColor.white) {
        option.setAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName, '');
      }
      option.textContent = color.value;
      this.selectDocument.appendChild(option);
    });
  }

  getSelectedOption(){
    for (const option of this.selectDocument.children) {
      if (option.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName) === '') {
        return option;
      }
    }
  }

  getValue(){
    return StoneColor.getByValue(this.getSelectedOption().textContent);
  }
}