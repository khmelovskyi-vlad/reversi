const Player = require("../../../components/players/player");

test('Player must have name and stone color on creating', () => {
  const name = 'Name';
  const stoneColor = 'Black';
  const player = new Player(name, stoneColor);
  expect(player.name).toBe(name);
  expect(player.stoneColor).toBe(stoneColor);
});