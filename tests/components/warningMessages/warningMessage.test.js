import { WarningMessage } from "../../../components/warningMessages/warningMessage.js";

test('warning message must create document with correct classes', () => {
  const warningMessage = new WarningMessage('text');
  WarningMessage.classes.forEach(oneClass => {
    expect(warningMessage.document.classList).toContain(oneClass);
  });
});

test('warning message must create document with correct text', () => {
  const text = 'some text';
  const warningMessage = new WarningMessage(text);
  expect(warningMessage.document.textContent).toBe(text);
});