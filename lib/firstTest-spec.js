describe('opening google', function() {
  it('should add a todo', function() {
    browser.get('https://google.com');

    element(by.css('input[name="q"]')).sendKeys('I am writing automation test in protractor');
    element(by.css('form#tsf div.FPdoLc.tfB0Bf > center > input[name="btnK"]')).click();

  });
});