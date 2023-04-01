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
  expect(blackOption.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(PlayerStoneColorInitialization.optionSelectedAttribute);
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
  expect(whiteOption.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(PlayerStoneColorInitialization.optionSelectedAttribute);
});

test('get selected option must get selected option', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const selectedOption = playerStoneColorInitialization.getSelectedOption();
  expect(selectedOption.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(PlayerStoneColorInitialization.optionSelectedAttribute);
});

test('getValue must return current stone color', () => {
  const playerNumber = 1;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  expect(playerStoneColorInitialization.getValue()).toBe(StoneColor.black);
});

test('getOptionByColor must get option by color', () => {
  const playerNumber = 1;
  const color1 = StoneColor.white;
  const color2 = StoneColor.black;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const option1 = playerStoneColorInitialization.getOptionByColor(color1);
  const option2 = playerStoneColorInitialization.getOptionByColor(color2);
  expect(option1.value).toBe(color1.value);
  expect(option2.value).toBe(color2.value);
});

test('getOptionByColorValue must get option by color value', () => {
  const playerNumber = 1;
  const color1 = 'white';
  const color2 = 'black';
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const option1 = playerStoneColorInitialization.getOptionByColorValue(color1);
  const option2 = playerStoneColorInitialization.getOptionByColorValue(color2);
  expect(option1.value).toBe(color1);
  expect(option2.value).toBe(color2);
});

test('makeSelected must make option selected', () => {
  const playerNumber = 1;
  const color = StoneColor.white;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const option = playerStoneColorInitialization.getOptionByColor(color);
  expect(option.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(null);
  playerStoneColorInitialization.makeSelected(option);
  expect(option.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(PlayerStoneColorInitialization.optionSelectedAttribute);
});

test('removeSelected must make option selected', () => {
  const playerNumber = 1;
  const color = StoneColor.black;
  const playerStoneColorInitialization = new PlayerStoneColorInitialization(playerNumber);
  const option = playerStoneColorInitialization.getOptionByColor(color);
  expect(option.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(PlayerStoneColorInitialization.optionSelectedAttribute);
  playerStoneColorInitialization.removeSelected(option);
  expect(option.getAttribute(PlayerStoneColorInitialization.optionSelectedAttributeName))
    .toBe(null);
});