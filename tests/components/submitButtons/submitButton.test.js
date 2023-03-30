import { SubmitButton } from "../../../components/submitButtons/submitButton.js";

test('submit button must create document with correct classes', () => {
  const submitButton = new SubmitButton();
  SubmitButton.classes.forEach(oneClass => {
    expect(submitButton.document.classList).toContain(oneClass);
  });
});

test('submit button must create document with correct text', () => {
  const text = 'some text';
  const submitButton = new SubmitButton(text);
  expect(submitButton.document.textContent)
    .toBe(text);
});

//TODO find how to get event listeners
// test('submit button must create document with correct event listeners', () => {
// });