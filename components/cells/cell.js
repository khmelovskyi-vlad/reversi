class Cell {
  player = null;

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  get isEmpty(){
    return !this.player;
  };

  fill(player){
    if (this.player === player) {
      throw new Error('Cannot fill cell with same player');
    }

    this.player = player;
  }
}

module.exports = Cell;