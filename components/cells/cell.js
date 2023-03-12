class Cell {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  get isEmpty(){
    return !this.player;
  };

  player = null;
}

module.exports = Cell;