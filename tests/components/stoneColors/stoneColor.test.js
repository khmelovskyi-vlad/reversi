const StoneColor = require("../../../components/stoneColors/stoneColor");

test('Stone color must have color and player first move', () => {
  const stoneColor = StoneColor.black;
  expect(stoneColor.value).toBe(StoneColor.blackValue);
  expect(stoneColor.isPlayerFirstMove).toBe(true);
});

test('Stone color player first move must have only specific colors', () => {
  const stoneColor = new StoneColor('red');
  expect(() => stoneColor.isPlayerFirstMove).toThrow(Error);
});