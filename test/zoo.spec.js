describe('adopt the animal on the zoo site', function () {

  beforeEach(function () {
    browser.get('https://www.thetestroom.com/jswebapp/');
  });

  afterEach(function () {
    console.log('I am a success!')
  });

  it('URL should be correct', function () {
    expect(browser.getCurrentUrl()).toEqual('https://www.thetestroom.com/jswebapp/');
  });

  it('URL should not be incorrect', function () {
    expect(browser.getCurrentUrl()).not.toEqual('https://www.thetestroom.com/jswebappx/');
  });

  describe('Validation of text input', function () {
    var textMessage;
  
  beforeEach(function () {
    textMessage = 'This is some string that will perform some action on this cool looking page.';
  })
      it('should generate correct text', function () {  
        element(by.model('person.name')).sendKeys(textMessage);
        element(by.binding('person.name')).getText().then(function (text) {
          expect(text).toEqual('This is some string that will perform some action on this cool looking page.');
        });
      });

      it('should not generate incorrect text', function () {  
        element(by.model('person.name')).sendKeys(textMessage);
        element(by.binding('person.name')).getText().then(function (text) {
          expect(text).not.toEqual('I am the incorrect string generated');
        });
      });
    
  });
  
  describe('dropdown validation', function () {
    var itemsInDropdown;
  
    beforeEach(function () {
      itemsInDropdown = 4;
    });
      it('should check correct number of options in the dropdown', function () {
        element(by.buttonText('CONTINUE')).click();
        element(by.model('animal')).$('[value="1"]').click();
        element.all(by.css('.ng-pristine option')).then(function (items) {
          expect(items.length).toBe(itemsInDropdown);
          expect(items[1].getText()).toBe('George the Turtle');
        });
      });
      
      it('should check correct option from the dropdown is selected', function () {
        element(by.buttonText('CONTINUE')).click();
        element(by.model('animal')).$('[value="1"]').click();
        element.all(by.css('.ng-pristine option')).then(function (items) {
          expect(items[1].getText()).toBe('George the Turtle');
        });
      });
  });

  describe('User is on the Thank you Page', function () {
    var correctURL;

    beforeEach(function () {
      correctURL = 'https://www.thetestroom.com/jswebapp/confirm.html';
    });
  
    it('should check user is on the thank you page', function () {
    element(by.buttonText('CONTINUE')).click();
    element(by.buttonText('CONTINUE')).click();
    expect(browser.getCurrentUrl()).toContain('confirm');
    });

    it('should check user is not on the incorrect page', function () {
    element(by.buttonText('CONTINUE')).click();
    element(by.buttonText('CONTINUE')).click();
    expect(browser.getCurrentUrl()).not.toContain('confirmx');
    });
  });
});