import { Cell } from "../cells/cell.js";

export class Field {
    static classes = ['field'];
    static childClasses = ['row', 'field-child'];
    static cellsInRow = 8;
    static cellsInColumn = 8;
    static halfCellsInRow = this.cellsInRow / 2;
    static halfCellsInColumn = this.cellsInColumn / 2;

    cells = [];
    document = null;

    constructor(currentPlayer, anotherPlayer, onMove){
        this.create(currentPlayer, anotherPlayer, onMove);
    }

    create(currentPlayer, anotherPlayer, onMove){
        if (!currentPlayer || !anotherPlayer) {
            throw new Error('Field without players cannot be created');
        }
        this.initDocument();
        for (let i = 1; i < Field.cellsInColumn + 1; i++) {
            const childDocument = this.initChildDocument();
            for (let j = 1; j < Field.cellsInRow + 1; j++) {
                const cell = new Cell(i, j, onMove);
                this.addCell(cell, childDocument);
            }
        }
        this.initCenterSquare(currentPlayer, anotherPlayer);
    }

    addCell(cell, childDocument){
        this.cells.push(cell);
        childDocument.appendChild(cell.document);
    }

    initDocument(){
        this.document = document.createElement('div');
        Field.classes.forEach(oneClass => {
          this.document.classList.add(oneClass);
        });
    }

    initChildDocument(){
        const fieldChild = document.createElement('div');
        Field.childClasses.forEach(oneClass => {
            fieldChild.classList.add(oneClass);
        });
        this.document.appendChild(fieldChild);
        return fieldChild;
    }

    initCenterSquare(currentPlayer, anotherPlayer){
        this.cells
            .find(cell => cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow + 1)
            .fill(currentPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow)
            .fill(currentPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1)
            .fill(anotherPlayer);
        this.cells
            .find(cell => cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow)
            .fill(anotherPlayer);
    }
    
    fillCell(x, y, player){
        const cell = this.findCell(x, y);
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

    getEmptyCells(){
        return this.cells.filter(cell => cell.isEmpty);
    }
}