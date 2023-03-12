const Field = require('../../../components/fields/field');

test('field must create 64 cells', () => {
  const field = new Field();
  expect(field.cells.length).toBe(0);
  field.create();
  expect(field.cells.length).toBe(64);
});