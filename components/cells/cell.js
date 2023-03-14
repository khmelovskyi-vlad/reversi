class Cell {
  player = null;
  document = null;

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement("div");
    this.document.setAttribute('x', this.x);
    this.document.setAttribute('y', this.y);
    this.document.classList.add('col');
    this.document.classList.add('cell');
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