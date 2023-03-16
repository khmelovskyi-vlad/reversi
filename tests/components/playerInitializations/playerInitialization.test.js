import { PlayerInitialization } from "../../../components/playerInitializations/playerInitialization.js";
import { StringExtentions } from "../../../extentions/stringExtentions.js";

beforeEach(() => {
  StringExtentions.run();
});

test('player initialization must create document with correct classes', () => {
  const playerInitialization = new PlayerInitialization(1);
  PlayerInitialization.classes.forEach(oneClass => {
    expect(playerInitialization.document.classList).toContain(oneClass);
  });
});

test('player initialization must create name, stone color, first move initializations', () => {
  const playerInitialization = new PlayerInitialization(1);
  expect(playerInitialization.nameInitialization).not.toBe(null);
  expect(playerInitialization.stoneColorInitialization).not.toBe(null);
  expect(playerInitialization.firstMoveInitialization).not.toBe(null);
});

test('player initialization document must contain name, stone color, first move initializations documents', () => {
  const playerInitialization = new PlayerInitialization(1);
  expect(playerInitialization.document.children).toContain(playerInitialization.nameInitialization.document);
  expect(playerInitialization.document.children).toContain(playerInitialization.stoneColorInitialization.document);
  expect(playerInitialization.document.children).toContain(playerInitialization.firstMoveInitialization.document);
});