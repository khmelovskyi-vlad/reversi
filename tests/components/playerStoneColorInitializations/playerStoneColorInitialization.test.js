import { PlayerStoneColorInitialization } from "../../../components/playerStoneColorInitializations/playerStoneColorInitialization.js";

test('player stone color initialization must create document with correct classes', () => {
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(1);
  PlayerStoneColorInitialization.classes.forEach(oneClass => {
    expect(playerStoneColorInitialization.document.classList).toContain(oneClass);
  });
});

test('player stone color initialization must create label document with correct classes', () => {
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(1);
  PlayerStoneColorInitialization.labelClasses.forEach(oneClass => {
    expect(playerStoneColorInitialization.labelDocument.classList).toContain(oneClass);
  });
});

test('player stone color initialization must create label document with correct for', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  expect(playerStoneColorInitialization.labelDocument
    .getAttribute(PlayerStoneColorInitialization.labelForAttributeName))
    .toBe(PlayerStoneColorInitialization.selectIdFirstPart + playerNumber);
});

test('player stone color initialization must create label document with correct text', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  expect(playerStoneColorInitialization.labelDocument.textContent)
    .toBe(PlayerStoneColorInitialization.labelTextFormat);
});

test('player stone color initialization must create select document with correct classes', () => {
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(1);
  PlayerStoneColorInitialization.selectClasses.forEach(oneClass => {
    expect(playerStoneColorInitialization.selectDocument.classList).toContain(oneClass);
  });
});

test('player stone color initialization must create select document with correct id', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  expect(playerStoneColorInitialization.selectDocument
    .getAttribute(PlayerStoneColorInitialization.selectIdAttributeName))
    .toBe(PlayerStoneColorInitialization.selectIdFirstPart + playerNumber);
});

test('player stone color initialization must create select document with required attribute', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  expect(playerStoneColorInitialization.selectDocument
    .getAttribute(PlayerStoneColorInitialization.selectRequiredAttributeName))
    .toBe(PlayerStoneColorInitialization.selectRequiredAttribute);
});