class Cell {
  constructor(){
    this.x = 1;
    this.y = 2;
  }

  get isEmpty(){
    return !this.player;
  };

  player = null;
}

module.exports = Cell;