import { GameInitialization } from "../../../components/gameInitializations/gameInitialization.js";
import { PlayerStoneColorInitialization } from "../../../components/playerStoneColorInitializations/playerStoneColorInitialization.js";
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

test('tryGetValue must validate is players stone colors different, if no show warning message add it to document and return null', () => {
  const gameInitialization = new GameInitialization();
  const selectedOption = gameInitialization.player1Initialization.stoneColorInitialization.getSelectedOption();
  selectedOption.removeAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName);
  for (const option of gameInitialization.player1Initialization.stoneColorInitialization.selectDocument.children) {
    if (option.textContent !== selectedOption.textContent) {
      option.setAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName, '');
      break;
    }
  }
  const game = gameInitialization.tryGetValue();
  let contains = false;
  for (const child of gameInitialization.document.children) {
    if (child === gameInitialization.warningMessage.document) {
      contains = true;
    }
  }
  expect(gameInitialization.warningMessage).not.toBe(null);
  expect(game).toBe(null);
  expect(contains).toBe(true);
});

test('tryGetValue must validate is players stone colors different, if yes return game with players', () => {
  const gameInitialization = new GameInitialization();
  const game = gameInitialization.tryGetValue();
  expect(game).not.toBe(null);
  expect(game.player1).not.toBe(null);
  expect(game.player2).not.toBe(null);
});

test('onFirstMoveClick change first move to need player', () => {
  const gameInitialization = new GameInitialization();
  gameInitialization.player1Initialization.firstMoveInitialization.document.click();
  expect(gameInitialization.player1Initialization.firstMoveInitialization.getValue()).toBe(true);
  expect(gameInitialization.player2Initialization.firstMoveInitialization.getValue()).toBe(false);
  gameInitialization.player2Initialization.firstMoveInitialization.document.click();
  expect(gameInitialization.player2Initialization.firstMoveInitialization.getValue()).toBe(true);
  expect(gameInitialization.player1Initialization.firstMoveInitialization.getValue()).toBe(false);
});