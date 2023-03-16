export class StoneColor {
  static blackValue = 'black';
  static whiteValue = 'white';
  static black = new StoneColor(this.blackValue);
  static white = new StoneColor(this.whiteValue);

  constructor(value){
    this.value = value;
  }

  static availableColors(){
    return [StoneColor.black, StoneColor.white];
  }
}