import { Cell } from "../../../components/cells/cell.js";
import { PlayerTestFactory } from "../factories/playerTestFactory.js";

test('new cell must be empty', () => {
  const cell = new Cell();
  expect(cell.isEmpty).toBe(true);
});

test('new cell must be without player', () => {
  const cell = new Cell();
  expect(cell.player).toBe(null);
});

test('empty cell can not have player', () => {
  const cell = new Cell();
  cell.player = PlayerTestFactory.create(true);
  expect(cell.isEmpty).toBe(false);
});

test('Throw error on fill cell with null player', () => {
  const cell = new Cell();
  expect(() => cell.fill(null)).toThrow(Error);
});

test('Throw error on fill cell with no player', () => {
  const cell = new Cell();
  expect(() => cell.fill()).toThrow(Error);
});

test('empty cell must have some indexes', () => {
  const x = 1;
  const y = 2;
  const cell = new Cell(x, y);
  const x2 = 3;
  const y2 = 4;
  const cell2 = new Cell(x2, y2);
  expect(cell.x).toBe(x);
  expect(cell.y).toBe(y);
  expect(cell2.x).toBe(x2);
  expect(cell2.y).toBe(y2);
});

test('new cell must create html document with correct coordinates', () => {
  const cell = new Cell(0, 0);
  expect(Number(cell.document.getAttribute(Cell.xAttributeName))).toBe(cell.x);
  expect(Number(cell.document.getAttribute(Cell.yAttributeName))).toBe(cell.y);
});

test('new cell must create html document with correct classes', () => {
  const cell = new Cell(0, 0);
  Cell.classes.forEach(oneClass => {
    expect(cell.document.classList).toContain(oneClass);
  });
});

test('Add stone color as class to document on fill', () => {
  const cell = new Cell();
  const player = PlayerTestFactory.create();
  cell.fill(player);
  expect(cell.document.classList).toContain(cell.player.stoneColor.value);
});

test('Change stone color as class to document on fill', () => {
  const cell = new Cell();
  const player1 = PlayerTestFactory.create(true);
  cell.fill(player1);
  const player2 = PlayerTestFactory.create(false);
  cell.fill(player2);
  expect(cell.document.classList).not.toContain(player1.stoneColor.value);
  expect(cell.document.classList).toContain(player2.stoneColor.value);
});