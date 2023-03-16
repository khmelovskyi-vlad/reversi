import { StoneColor } from "../../../components/stoneColors/stoneColor";

test('available colors must return correct values', () => {
  const colors = StoneColor.availableColors();
  expect(colors).toContain(StoneColor.black);
  expect(colors).toContain(StoneColor.white);
});