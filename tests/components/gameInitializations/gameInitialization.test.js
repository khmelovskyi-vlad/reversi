const GameInitialization = require("../../../components/gameInitializations/gameInitialization");

test('game initialization must create document with correct classes', () => {
  const gameInitialization = new GameInitialization();
  GameInitialization.classes.forEach(oneClass => {
    expect(gameInitialization.document.classList).toContain(oneClass);
  });
});

test('game initialization must create player 1 document with correct classes', () => {
  const gameInitialization = new GameInitialization();
  GameInitialization.playerClasses.forEach(oneClass => {
    expect(gameInitialization.player1Document.classList).toContain(oneClass);
  });
});

test('game initialization must create player 2 document with correct classes', () => {
  const gameInitialization = new GameInitialization();
  GameInitialization.playerClasses.forEach(oneClass => {
    expect(gameInitialization.player2Document.classList).toContain(oneClass);
  });
});

test('game initialization must create submit document with correct classes', () => {
  const gameInitialization = new GameInitialization();
  GameInitialization.submitClasses.forEach(oneClass => {
    expect(gameInitialization.submitDocument.classList).toContain(oneClass);
  });
});