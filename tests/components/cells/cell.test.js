const Cell = require('../../../components/cells/cell');
const PlayerTestFactory = require('../factories/playerTestFactory');

test('new cell must be empty', () => {
  const cell = new Cell();
  expect(cell.isEmpty).toBe(true);
});

test('new cell must be without player', () => {
  const cell = new Cell();
  expect(cell.player).toBe(null);
});

test('empty cell can not have player', () => {
  const cell = new Cell();
  cell.player = PlayerTestFactory.create(true);
  expect(cell.isEmpty).toBe(false);
});

test('Throw error on fill cell with null player', () => {
  const cell = new Cell();
  expect(() => cell.fill(null)).toThrow(Error);
});

test('Throw error on fill cell with no player', () => {
  const cell = new Cell();
  expect(() => cell.fill()).toThrow(Error);
});

test('empty cell must have some indexes', () => {
  const x = 1;
  const y = 2;
  const cell = new Cell(x, y);
  const x2 = 3;
  const y2 = 4;
  const cell2 = new Cell(x2, y2);
  expect(cell.x).toBe(x);
  expect(cell.y).toBe(y);
  expect(cell2.x).toBe(x2);
  expect(cell2.y).toBe(y2);
});