import { PlayerStoneColorInitialization } from "../../../components/playerStoneColorInitializations/playerStoneColorInitialization.js";
import { StoneColor } from "../../../components/stoneColors/stoneColor.js";

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

test('player stone color initialization select document should have all available colors option', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const colors = StoneColor.availableColors();
  const selectOptionTexts = [];
  for (const child of playerStoneColorInitialization.selectDocument.children) {
    selectOptionTexts.push(child.textContent);
  }
  colors.forEach(color => {
    expect(selectOptionTexts).toContain(color.value);
  });
});

test('player number is 1, stone color initialization select document should have black color option selected', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  let blackOption = null;
  for (const child of playerStoneColorInitialization.selectDocument.children) {
    if (child.textContent === StoneColor.blackValue) {
      blackOption = child;
      break;
    }
  }
  expect(blackOption.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName)).toBe('');
});

test('player number no 1, stone color initialization select document should have white color option selected', () => {
  const playerNumber = 2;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  let whiteOption = null;
  for (const child of playerStoneColorInitialization.selectDocument.children) {
    if (child.textContent === StoneColor.whiteValue) {
      whiteOption = child;
      break;
    }
  }
  expect(whiteOption.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName)).toBe('');
});