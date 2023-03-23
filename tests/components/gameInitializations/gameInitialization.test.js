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

test('on sumbit button must validate is players stone colors different, if no show warning message', () => {
  const gameInitialization = new GameInitialization();
  const selectedOption = gameInitialization.player1Initialization.stoneColorInitialization.getSelectedOption();
  selectedOption.removeAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName);
  for (const option of gameInitialization.player1Initialization.stoneColorInitialization.selectDocument.children) {
    if (option.textContent !== selectedOption.textContent) {
      option.setAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName, '');
      break;
    }
  }
  gameInitialization.onSubmitClick();
  expect(gameInitialization.warningMessage).not.toBe(null);
});

test('on sumbit button must validate is players stone colors different, if yes create game with players', () => {
  const gameInitialization = new GameInitialization();
  gameInitialization.onSubmitClick();
  expect(gameInitialization.game).not.toBe(null);
  expect(gameInitialization.game.player1).not.toBe(null);
  expect(gameInitialization.game.player2).not.toBe(null);
});