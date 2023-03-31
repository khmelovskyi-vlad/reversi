export class Cell {
  static classes = ['col', 'cell'];
  static xAttributeName = 'x';
  static yAttributeName = 'y';
  player = null;
  document = null;

  constructor(x, y, onMove){
    this.x = x;
    this.y = y;
    this.initDocument(onMove);
  }

  initDocument(onMove){
    this.document = document.createElement('div');
    this.document.setAttribute(Cell.xAttributeName, this.x);
    this.document.setAttribute(Cell.yAttributeName, this.y);
    Cell.classes.forEach(oneClass => {
      this.document.classList.add(oneClass);
    });
    this.document.addEventListener('click', () => {
      const x = Number(this.document.getAttribute(Cell.xAttributeName));
      const y = Number(this.document.getAttribute(Cell.yAttributeName));
      onMove(x, y);
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
    this.document.classList.add(this.player.stoneColor.value);
  }
}