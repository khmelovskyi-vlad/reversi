import { PlayerStoneInitialization } from "../../../components/playerStoneColorInitializations/playerStoneColorInitialization.js";

test('player name initialization must create document with correct classes', () => {
  const playerStoneInitialization = new PlayerStoneInitialization(1);
  PlayerStoneInitialization.classes.forEach(oneClass => {
    expect(playerStoneInitialization.document.classList).toContain(oneClass);
  });
});

test('player name initialization must create label document with correct classes', () => {
  const playerStoneInitialization = new PlayerStoneInitialization(1);
  PlayerStoneInitialization.labelClasses.forEach(oneClass => {
    expect(playerStoneInitialization.labelDocument.classList).toContain(oneClass);
  });
});

test('player name initialization must create label document with correct for', () => {
  const playerNumber = 1;
  const playerStoneInitialization = new PlayerStoneInitialization(playerNumber);
  expect(playerStoneInitialization.labelDocument
    .getAttribute(PlayerStoneInitialization.labelForAttributeName))
    .toBe(PlayerStoneInitialization.selectIdFirstPart + playerNumber);
});

test('player name initialization must create label document with correct text', () => {
  const playerNumber = 1;
  const playerStoneInitialization = new PlayerStoneInitialization(playerNumber);
  expect(playerStoneInitialization.labelDocument.textContent)
    .toBe(PlayerStoneInitialization.labelTextFormat);
});

test('player name initialization must create select document with correct classes', () => {
  const playerStoneInitialization = new PlayerStoneInitialization(1);
  PlayerStoneInitialization.selectClasses.forEach(oneClass => {
    expect(playerStoneInitialization.selectDocument.classList).toContain(oneClass);
  });
});

test('player name initialization must create select document with correct id', () => {
  const playerNumber = 1;
  const playerStoneInitialization = new PlayerStoneInitialization(playerNumber);
  expect(playerStoneInitialization.selectDocument
    .getAttribute(PlayerStoneInitialization.selectIdAttributeName))
    .toBe(PlayerStoneInitialization.selectIdFirstPart + playerNumber);
});

test('player name initialization must create select document with required attribute', () => {
  const playerNumber = 1;
  const playerStoneInitialization = new PlayerStoneInitialization(playerNumber);
  expect(playerStoneInitialization.selectDocument
    .getAttribute(PlayerStoneInitialization.selectRequiredAttributeName))
    .toBe(PlayerStoneInitialization.selectRequiredAttribute);
});