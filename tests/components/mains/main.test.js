import { Main } from "../../../components/mains/main";
import { StringExtentions } from "../../../extentions/stringExtentions";

beforeEach(() => {
  StringExtentions.run();
});

test('main should contain game initialization after creating', () => {
  const main = new Main();
  
  expect(main.gameInitialization).not.toBe(null);
});

test('main must create document with correct classes', () => {
  const main = new Main();
  Main.classes.forEach(oneClass => {
    expect(main.document.classList).toContain(oneClass);
  });
});