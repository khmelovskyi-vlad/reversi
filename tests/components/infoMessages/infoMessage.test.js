import { InfoMessage } from "../../../components/infoMessages/infoMessage.js";

test('info message must create document with correct classes', () => {
  const infoMessage = new InfoMessage('text');
  InfoMessage.classes.forEach(oneClass => {
    expect(infoMessage.document.classList).toContain(oneClass);
  });
});

test('info message must create document with correct text', () => {
  const text = 'some text';
  const infoMessage = new InfoMessage(text);
  expect(infoMessage.document.textContent).toBe(text);
});