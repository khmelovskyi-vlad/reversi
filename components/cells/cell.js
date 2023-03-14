class Cell {
  player = null;

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.document = document.createElement("div");
    this.document.setAttribute('x', this.x);
    this.document.setAttribute('y', this.y);
  }

  get isEmpty(){
    return !this.player;
  };

  fill(player){
    if (!player) {
      throw new Error('Cannot fill null player');
    }
    if (this.player === player) {
      throw new Error('Cannot fill cell with same player');
    }

    this.player = player;
  }
}

module.exports = Cell;