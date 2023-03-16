import { PlayerInitialization } from "../../../components/playerInitializations/playerInitialization.js";

test('player initialization must create document with correct classes', () => {
  const playerInitialization = new PlayerInitialization();
  PlayerInitialization.classes.forEach(oneClass => {
    expect(playerInitialization.document.classList).toContain(oneClass);
  });
});