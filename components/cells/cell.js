class Cell {
  get isEmpty(){
    return !this.player;
  };

  player = null;
}

module.exports = Cell;