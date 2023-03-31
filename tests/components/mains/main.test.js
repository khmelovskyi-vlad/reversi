import { Main } from "../../../components/mains/main.js";
import { StringExtentions } from "../../../extentions/stringExtentions.js";

beforeEach(() => {
  StringExtentions.run();
});

test('main should contain game initialization after creating', () => {
  const main = new Main();
  
  expect(main.gameInitialization).not.toBe(null);
});

test('main should contains game initialization document in own document after creating', () => {
  const main = new Main();
  let contains = false;
  for (const child of main.document.children) {
    if (child === main.gameInitialization.document) {
      contains = true;
      break;
    }
  }    
  expect(contains).toBe(true);
});

test('main must create document with correct classes', () => {
  const main = new Main();
  Main.classes.forEach(oneClass => {
    expect(main.document.classList).toContain(oneClass);
  });
});

test('gameInitialization submitButton document must create game on click', () => {
  const main = new Main();
  main.gameInitialization.submitButton.document.click();
  expect(main.game).not.toBe(null);
});

test('gameInitialization submitButton document must remove gameInitialization document', () => {
  const main = new Main();
  main.gameInitialization.submitButton.document.click();
  for (const child of main.document.children) {
    expect(child).not.toBe(main.gameInitialization.document);
  }
});

test('gameInitialization submitButton document must add game document', () => {
  const main = new Main();
  main.gameInitialization.submitButton.document.click();
  let contains = false;
  for (const child of main.document.children) {
    if (child === main.game.document) {
      contains = true;
      break;
    }
  }    
  expect(contains).toBe(true);
});