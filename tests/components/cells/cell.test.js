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
  cell.player = "Player"
  expect(cell.isEmpty).toBe(false);
});