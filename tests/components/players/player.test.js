const Player = require("../../../components/players/player");

test('Player must have name on creating', () => {
  const name = 'Name';
  const player = new Player(name);
  expect(player.name).toBe(name);
});