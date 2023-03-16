const PlayerNameInitialization = require("../../../components/playerNameInitializations/playerNameInitialization");

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