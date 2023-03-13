const Field = require('../../../components/fields/field');
const FieldTestFactory = require('../factories/fieldTestFactory');
const PlayerTestFactory = require('../factories/playerTestFactory');

test('field must create 64 cells', () => {
  const field = FieldTestFactory.create();
  expect(field.cells.length).toBe(64);
});

test('field must create cells with correct indexes', () => {
  const field = FieldTestFactory.create();
  let includesAll = true;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if(!field.cells.some(cell => cell.x === i && cell.y === j)){
            includesAll = false;
        }
    }
  }
  expect(includesAll).toBe(true);
});

test('field must create empty cells but not in center', () => {
  const field = FieldTestFactory.create();
  const cellsWithoutCenter = field.cells.filter(cell => 
    !(cell.x === 4 && cell.y === 3)
    && !(cell.x === 3 && cell.y === 4)
    && !(cell.x === 3 && cell.y === 3)
    && !(cell.x === 4 && cell.y === 4));
  expect(cellsWithoutCenter.some(cell => !cell.isEmpty)).toBe(false);
});

test('On fill cell if cell with selected coordinates is not exist throw exception', () => {
  const field = FieldTestFactory.create();
  expect(() => field.fillCell(0, 9, PlayerTestFactory.create(true))).toThrow(Error);
});

test('If cell with selected coordinates was filled current player throw exception', () => {
  const field = FieldTestFactory.create();
  const x = 0;
  const y = 0;
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
  expect(player1Cells.some(cell => cell.x === 4 && cell.y === 3));
  expect(player1Cells.some(cell => cell.x === 3 && cell.y === 4));
  expect(player2Cells.some(cell => cell.x === 3 && cell.y === 3));
  expect(player2Cells.some(cell => cell.x === 4 && cell.y === 4));
});