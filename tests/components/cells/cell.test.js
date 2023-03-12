const Cell = require('../../../components/cells/cell');

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
  cell.player = "Player";
  expect(cell.isEmpty).toBe(false);
});

test('empty cell must have some indexes', () => {
  const x = 1;
  const y = 2;
  const cell = new Cell(x, y);
  expect(cell.x).toBe(x);
  expect(cell.y).toBe(y);
});