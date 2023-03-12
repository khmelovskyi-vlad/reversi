const Cell = require('../../../components/cells/cell');

test('new cell must be empty', () => {
  const cell = new Cell();
  expect(cell.isEmpty).toBe(true);
});