import { PlayerNameInitialization } from "../../../components/playerNameInitializations/playerNameInitialization.js";
import { StringExtentions } from "../../../extentions/stringExtentions.js";

beforeEach(() => {
  StringExtentions.run();
});

test('player name initialization must create document with correct classes', () => {
  const playerNameInitialization = new PlayerNameInitialization(1);
  PlayerNameInitialization.classes.forEach(oneClass => {
    expect(playerNameInitialization.document.classList).toContain(oneClass);
  });
});

test('player name initialization must create label document with correct classes', () => {
  const playerNameInitialization = new PlayerNameInitialization(1);
  PlayerNameInitialization.labelClasses.forEach(oneClass => {
    expect(playerNameInitialization.labelDocument.classList).toContain(oneClass);
  });
});

test('player name initialization must create label document with correct for', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.labelDocument
    .getAttribute(PlayerNameInitialization.labelForAttributeName))
    .toBe(PlayerNameInitialization.inputIdFirstPart + playerNumber);
});

test('player name initialization must create label document with correct text', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.labelDocument.textContent)
    .toBe(PlayerNameInitialization.labelTextFormat.format(playerNumber));
});

test('player name initialization must create input document with correct classes', () => {
  const playerNameInitialization = new PlayerNameInitialization(1);
  PlayerNameInitialization.inputClasses.forEach(oneClass => {
    expect(playerNameInitialization.inputDocument.classList).toContain(oneClass);
  });
});

test('player name initialization must create input document with correct id', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.inputDocument
    .getAttribute(PlayerNameInitialization.inputIdAttributeName))
    .toBe(PlayerNameInitialization.inputIdFirstPart + playerNumber);
});

test('player name initialization must create input document with correct type', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.inputDocument
    .getAttribute(PlayerNameInitialization.inputTypeAttributeName))
    .toBe(PlayerNameInitialization.inputTypeAttribute);
});

test('player name initialization must create input document with required attribute', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.inputDocument
    .getAttribute(PlayerNameInitialization.inputRequiredAttributeName))
    .toBe(PlayerNameInitialization.inputRequiredAttribute);
});

test('getValue must return current player name', () => {
  const playerNumber = 1;
  const playerNameInitialization = new PlayerNameInitialization(playerNumber);
  expect(playerNameInitialization.getValue()).toBe(playerNameInitialization.inputDocument.textContent);
});