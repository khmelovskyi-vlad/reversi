import { Player } from "../../../components/players/player.js";
import { StoneColor } from "../../../components/stoneColors/stoneColor.js";

test('Player must have name and stone color on creating', () => {
  const name = 'Name';
  const stoneColor = StoneColor.black;
  const player = new Player(name, stoneColor, true);
  expect(player.name).toBe(name);
  expect(player.stoneColor).toBe(stoneColor);
});