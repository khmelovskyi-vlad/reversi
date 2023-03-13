const Cell = require("../cells/cell");

class Field {
    cells = [];

    constructor(currentPlayer, anotherPlayer){
        this.create(currentPlayer, anotherPlayer);
    }

    create(currentPlayer, anotherPlayer){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.cells.push(new Cell(i, j));
            }
        }
        this.initCenterSquare(currentPlayer, anotherPlayer);
    }

    initCenterSquare(currentPlayer, anotherPlayer){
        this.cells.find(cell => cell.x === 4 && cell.y === 3).fill(currentPlayer);
        this.cells.find(cell => cell.x === 3 && cell.y === 4).fill(currentPlayer);
        this.cells.find(cell => cell.x === 3 && cell.y === 3).fill(anotherPlayer);
        this.cells.find(cell => cell.x === 4 && cell.y === 4).fill(anotherPlayer);
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