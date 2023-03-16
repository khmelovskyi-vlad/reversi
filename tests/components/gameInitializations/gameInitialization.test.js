import { GameInitialization } from "../../../components/gameInitializations/gameInitialization.js";
import { StringExtentions } from "../../../extentions/stringExtentions.js";

beforeEach(() => {
  StringExtentions.run();
});

test('game initialization must create document with correct classes', () => {
  const gameInitialization = new GameInitialization();
  GameInitialization.classes.forEach(oneClass => {
    expect(gameInitialization.document.classList).toContain(oneClass);
  });
});

test('game initialization must create player 1 initialization', () => {
  const gameInitialization = new GameInitialization();
  expect(gameInitialization.player1Initialization).not.toBe(null);
});

test('game initialization must create player 2 initialization', () => {
  const gameInitialization = new GameInitialization();
  expect(gameInitialization.player2Initialization).not.toBe(null);
});

test('game initialization must create submit button', () => {
  const gameInitialization = new GameInitialization();
  expect(gameInitialization.submitButton).not.toBe(null);
});

test('game initialization document must contain 2 players, sumbit button initializations documents', () => {
  const gameInitialization = new GameInitialization();
  expect(gameInitialization.document.children).toContain(gameInitialization.player1Initialization.document);
  expect(gameInitialization.document.children).toContain(gameInitialization.player2Initialization.document);
  expect(gameInitialization.document.children).toContain(gameInitialization.submitButton.document);
});