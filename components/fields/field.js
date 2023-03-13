const Cell = require("../cells/cell");

class Field {
    static cellsInRow = 8;
    static cellsInColumn = 8;
    static halfCellsInRow = this.cellsInRow / 2;
    static halfCellsInColumn = this.cellsInColumn / 2;

    cells = [];

    constructor(currentPlayer, anotherPlayer){
        this.create(currentPlayer, anotherPlayer);
    }

    create(currentPlayer, anotherPlayer){
        if (!currentPlayer || !anotherPlayer) {
            throw new Error('Field without players cannot be created');
        }
        for (let i = 0; i < Field.cellsInRow; i++) {
            for (let j = 0; j < Field.cellsInColumn; j++) {
                this.cells.push(new Cell(i, j));
            }
        }
        this.initCenterSquare(currentPlayer, anotherPlayer);
    }

    initCenterSquare(currentPlayer, anotherPlayer){
        this.cells
            .find(cell => cell.x === Field.halfCellsInRow && cell.y === Field.halfCellsInColumn - 1)
            .fill(currentPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInRow - 1 && cell.y === Field.halfCellsInColumn)
            .fill(currentPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInRow - 1 && cell.y === Field.halfCellsInColumn - 1)
            .fill(anotherPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInRow && cell.y === Field.halfCellsInColumn)
            .fill(anotherPlayer);
    }
    
    fillCell(x, y, player){
        const cell = this.cells.find(cell => cell.x === x && cell.y === y);
        if (!cell) {
            throw new Error(`Cell with coordinate x: ${x}, y: ${y} is not found`);
        }
        cell.fill(player);
    }

    isExistCell(x, y){
        return this.cells.some(cell => cell.x === x && cell.y === y);
    }

    findCell(x, y){
        return this.cells.find(cell => cell.x === x && cell.y === y);
    }
}

module.exports = Field;