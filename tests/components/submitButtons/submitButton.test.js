const SubmitButton = require("../../../components/submitButtons/submitButton");

test('submit button must create document with correct classes', () => {
  const submitButton = new SubmitButton();
  SubmitButton.classes.forEach(oneClass => {
    expect(submitButton.document.classList).toContain(oneClass);
  });
});