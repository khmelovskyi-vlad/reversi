const Cell = require("../cells/cell");

class Field {
    cells = [];

    constructor(){
        this.create();
    }

    create(){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells.push(new Cell(i, j));
            }
        }
    }
    
    fillCell(x, y, player){
        const cell = this.cells.find(cell => cell.x === x && cell.y === y);
        if (!cell) {
            throw new Error(`Cell with coordinate x: ${x}, y: ${y} is not found`);
        }
        cell.fill(player);
    }
}

module.exports = Field;