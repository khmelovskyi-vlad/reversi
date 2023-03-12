class StoneColor {
  static blackValue = 'black';
  static whiteValue = 'white';
  static black = new StoneColor(this.blackValue);
  static white = new StoneColor(this.whiteValue);

  constructor(value){
    this.value = value;
  }

  get isPlayerFirstMove(){
    switch (this.value) {
      case StoneColor.blackValue:
        return true;
      case StoneColor.whiteValue:
        return false;
      default:
        throw new Error('Not implemented color');
    }
  }
}

module.exports = StoneColor;