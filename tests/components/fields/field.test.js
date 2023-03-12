const Field = require('../../../components/fields/field');

test('field must create 64 cells', () => {
  const field = new Field();
  expect(field.cells.length).toBe(0);
  field.create();
  expect(field.cells.length).toBe(64);
});

test('field must create cells with correct indexes', () => {
  const field = new Field();
  field.create();
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