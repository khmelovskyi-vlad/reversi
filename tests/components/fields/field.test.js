const Field = require('../../../components/fields/field');

test('field must create 64 cells', () => {
  field = new Field();
  field.create();
  expect(field.cells.length).toBe(64);
});