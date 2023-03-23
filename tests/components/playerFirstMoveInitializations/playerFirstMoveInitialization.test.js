import { PlayerFirstMoveInitialization } from "../../../components/playerFirstMoveInitializations/playerFirstMoveInitialization.js";

test('player first move initialization must create document with correct classes', () => {
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(1); 
  PlayerFirstMoveInitialization.classes.forEach(oneClass => {
    expect(playerFirstMoveInitialization.document.classList).toContain(oneClass);
  });
});

test('player first move initialization must create label document with correct classes', () => {
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(1);
  PlayerFirstMoveInitialization.labelClasses.forEach(oneClass => {
    expect(playerFirstMoveInitialization.labelDocument.classList).toContain(oneClass);
  });
});

test('player first move initialization must create label document with correct for', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.labelDocument
    .getAttribute(PlayerFirstMoveInitialization.labelForAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputIdFirstPart + playerNumber);
});

test('player first move initialization must create label document with correct text', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.labelDocument.textContent)
    .toBe(PlayerFirstMoveInitialization.labelTextFormat);
});

test('player first move initialization must create input document with correct classes', () => {
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(1);
  PlayerFirstMoveInitialization.inputClasses.forEach(oneClass => {
    expect(playerFirstMoveInitialization.inputDocument.classList).toContain(oneClass);
  });
});

test('player first move initialization must create input document with correct id', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputIdAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputIdFirstPart + playerNumber);
});

test('player first move initialization must create input document with correct type', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputTypeAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputTypeAttribute);
});

test('player first move initialization must create input document with required attribute', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputRequiredAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputRequiredAttribute);
});

test('player first move initialization must create input document with correct name attribute', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputNameAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputNameAttribute);
});

test('player first move initialization must create input document with checked attribute if player number is 1', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputCheckedAttributeName))
    .toBe(PlayerFirstMoveInitialization.inputCheckedAttribute);
});

test('player first move initialization must create input document without checked attribute if player number is not 1', () => {
  const playerNumber = 20;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.inputDocument
    .getAttribute(PlayerFirstMoveInitialization.inputCheckedAttributeName))
    .toBe(null);
});

test('getValue must return current player first move', () => {
  const playerNumber = 1;
  const playerFirstMoveInitialization = new PlayerFirstMoveInitialization(playerNumber);
  expect(playerFirstMoveInitialization.getValue()).toBe(true);
});