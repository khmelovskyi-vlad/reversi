import { StoneColor } from "../../../components/stoneColors/stoneColor";

test('available colors must return correct values', () => {
  const colors = StoneColor.availableColors();
  expect(colors).toContain(StoneColor.black);
  expect(colors).toContain(StoneColor.white);
});

test('getByValue must return available color if exist', () => {
  const colorText = StoneColor.blackValue;
  const stoneColor = StoneColor.getByValue(colorText);
  expect(stoneColor).toBe(StoneColor.black);
});

test('getByValue must throw if not exist', () => {
  const colorText = 'my color';
  expect(() => StoneColor.getByValue(colorText)).toThrow(Error);
});