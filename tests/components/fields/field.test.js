import { Field } from "../../../components/fields/field.js";
import { FieldTestFactory } from "../factories/fieldTestFactory.js";
import { PlayerTestFactory } from "../factories/playerTestFactory.js";

test('field must create correct count of cells', () => {
  const field = FieldTestFactory.create();
  expect(field.cells.length).toBe(Field.cellsInColumn * Field.cellsInRow);
});

test('field must create cells with correct indexes', () => {
  const field = FieldTestFactory.create();
  let includesAll = true;
  for (let i = 1; i <= Field.cellsInColumn; i++) {
    for (let j = 1; j <= Field.cellsInRow; j++) {
        if(!field.isExistCell(i, j)){
            includesAll = false;
        }
    }
  }
  expect(includesAll).toBe(true);
});

test('field must create empty cells but not in center', () => {
  const field = FieldTestFactory.create();
  const cellsWithoutCenter = field.cells.filter(cell => 
    !(cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow + 1)
    && !(cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow)
    && !(cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1)
    && !(cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow));
  expect(cellsWithoutCenter.some(cell => !cell.isEmpty)).toBe(false);
});

test('On fill cell if cell with selected coordinates is not exist throw exception', () => {
  const field = FieldTestFactory.create();
  expect(() => field.fillCell(Field.cellsInColumn + 1, 1, PlayerTestFactory.create(true))).toThrow(Error);
  expect(() => field.fillCell(1, Field.cellsInRow + 1, PlayerTestFactory.create(true))).toThrow(Error);
});

test('If cell with selected coordinates was filled current player throw exception', () => {
  const field = FieldTestFactory.create();
  const x = 1;
  const y = 1;
  const player = PlayerTestFactory.create(true);
  field.fillCell(x, y, player);
  expect(() => field.fillCell(x, y, player)).toThrow(Error);
});

test('Field must create four fill cells in the middle and other empty cells', () => {
  const player1 = PlayerTestFactory.create(true);
  const player2 = PlayerTestFactory.create(false);
  const field = new Field(player1, player2);
  const player1Cells = field.cells.filter(cell => cell.player === player1);
  const player2Cells = field.cells.filter(cell => cell.player === player2);
  expect(player1Cells.some(cell => cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow + 1));
  expect(player1Cells.some(cell => cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow));
  expect(player2Cells.some(cell => cell.x === Field.halfCellsInColumn + 1 && cell.y === Field.halfCellsInRow + 1));
  expect(player2Cells.some(cell => cell.x === Field.halfCellsInColumn && cell.y === Field.halfCellsInRow));
});

test('field without players cannot be created', () => {
  expect(() => new Field()).toThrow(Error);
  expect(() => new Field(PlayerTestFactory.create())).toThrow(Error);
  expect(() => new Field(null, PlayerTestFactory.create())).toThrow(Error);
});

test('isExistCell return true if cell with coordinates exists', () => {
  const field = FieldTestFactory.create();
  expect(field.isExistCell(1, 1)).toBe(true);
});

test('isExistCell return true if cell with coordinates not exists', () => {
  const field = FieldTestFactory.create();
  expect(field.isExistCell(Field.cellsInColumn + 1, 1)).toBe(false);
  expect(field.isExistCell(1, Field.cellsInRow + 1)).toBe(false);
});

test('findCell return cell with coordinates if cell exists', () => {
  const field = FieldTestFactory.create();
  const x = 1;
  const y = 1;
  expect(field.findCell(x, y)).toBe(field.findCell(x, y));
});

test('findCell return undefined with coordinates if cell not exists', () => {
  const field = FieldTestFactory.create();
  const x = Field.cellsInColumn + 1;
  const y = Field.cellsInRow + 1;
  expect(field.findCell(x, y)).toBe(undefined);
});

test('field must create document with correct classes', () => {
  const field = FieldTestFactory.create();
  Field.classes.forEach(oneClass => {
    expect(field.document.classList).toContain(oneClass);
  });
});

test('field must create document with cells in row count of children elements', () => {
  const field = FieldTestFactory.create();
  expect(field.document.children.length).toBe(Field.cellsInColumn);
});

test('field must create document with children elements with correct classes', () => {
  const field = FieldTestFactory.create();
  for (const fieldChildDocument of field.document.children) {
    Field.childClasses.forEach(oneClass => {
      expect(fieldChildDocument.classList).toContain(oneClass);
    });
  }
});

test('field must create document with children elements with cells count equals cells in row', () => {
  const field = FieldTestFactory.create();
  for (const fieldChildDocument of field.document.children) {
    expect(fieldChildDocument.children.length).toBe(Field.cellsInColumn);
  }
});

test('getEmptyCells return not filled cells', () => {
  const field = FieldTestFactory.create();
  const emptyCells = field.getEmptyCells(); 
  expect(emptyCells.length).toBe(Field.cellsInColumn * Field.cellsInRow - 4);
  expect(emptyCells).not.toContain(field.findCell(Field.halfCellsInColumn, Field.halfCellsInRow + 1));
  expect(emptyCells).not.toContain(field.findCell(Field.halfCellsInColumn + 1, Field.halfCellsInRow));
  expect(emptyCells).not.toContain(field.findCell(Field.halfCellsInColumn + 1, Field.halfCellsInRow + 1));
  expect(emptyCells).not.toContain(field.findCell(Field.halfCellsInColumn, Field.halfCellsInRow));
});