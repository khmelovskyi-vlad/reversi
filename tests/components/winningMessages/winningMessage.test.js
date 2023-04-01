import { WinningMessage } from "../../../components/winningMessages/winningMessage.js";

test('winning message must create document with correct classes', () => {
  const winningMessage = new WinningMessage('text');
  WinningMessage.classes.forEach(oneClass => {
    expect(winningMessage.document.classList).toContain(oneClass);
  });
});

test('winning message must create document with correct text', () => {
  const text = 'some text';
  const winningMessage = new WinningMessage(text);
  expect(winningMessage.document.textContent).toBe(text);
});