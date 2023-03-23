export class StoneColor {
  static blackValue = 'black';
  static whiteValue = 'white';
  static black = new StoneColor(this.blackValue);
  static white = new StoneColor(this.whiteValue);

  constructor(value){
    this.value = value;
  }

  static getByValue(value){
    for (const stoneColor of StoneColor.availableColors()) {
      if (stoneColor.value === value) {
        return stoneColor;
      }
    }

    throw new Error('Color is not available');
  }

  static availableColors(){
    return [StoneColor.black, StoneColor.white];
  }
}