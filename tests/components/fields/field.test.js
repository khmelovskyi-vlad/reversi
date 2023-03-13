const Field = require('../../../components/fields/field');
const PlayerTestFactory = require('../factories/playerTestFactory');

test('field must create 64 cells', () => {
  const field = new Field();
  expect(field.cells.length).toBe(64);
});

test('field must create cells with correct indexes', () => {
  const field = new Field();
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

test('field must create empty cells', () => {
  const field = new Field();
  expect(field.cells.some(cell => !cell.isEmpty)).toBe(false);
});

test('field must create cells without players', () => {
  const field = new Field();
  expect(field.cells.some(cell => cell.player !== null)).toBe(false);
});

test('On fill cell if cell with selected coordinates is not exist throw exception', () => {
  const field = new Field();
  expect(() => field.fillCell(0, 9, PlayerTestFactory.create(true))).toThrow(Error);
});

test('If cell with selected coordinates was filled current player throw exception', () => {
  const field = new Field();
  const x = 0;
  const y = 0;
  const player = PlayerTestFactory.create(true);
  field.fillCell(x, y, player);
  expect(() => field.fillCell(x, y, player)).toThrow(Error);
});