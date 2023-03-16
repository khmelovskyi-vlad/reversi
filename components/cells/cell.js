export class Cell {
  static classes = ['col', 'cell'];
  static xAttributeName = 'x';
  static yAttributeName = 'y';
  player = null;
  document = null;

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.initDocument();
  }

  initDocument(){
    this.document = document.createElement('div');
    this.document.setAttribute(Cell.xAttributeName, this.x);
    this.document.setAttribute(Cell.yAttributeName, this.y);
    Cell.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
      this.document.classList.add(oneClass);
    });
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