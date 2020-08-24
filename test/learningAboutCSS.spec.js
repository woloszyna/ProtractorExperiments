describe('Testing JavaScript zoo site', function () {
  
      beforeEach(function () {
        browser.get('https://www.thetestroom.com/jswebapp/');
      });

        it('should be able to test using CSS', function () {
        //css tag (in this case there is no need to use any symbols when locating the element)
        element(by.css('input')).sendKeys('test of the text');
        
        //css class (in this case use the dot symbol when locating the element)
          element(by.css('.ng-binding')).getText().then(function (text) {
            console.log(text);
          });

        //css id (in this case use the hash symbol when locating the element)
          element(by.css('#continue_button')).click();

        //css chaining (in this case you create a chain, so say 'button' tag with a id of 'continue_button'.)
          element(by.css('button#continue_button')).click();

        //css child nodes (in this case use the hash symbol when locating the element)
          element(by.css('table td a')).getText().then(function (text) {
            console.log(text);
          });          
          
        //css attribute (in this case use the square brackets when locating the element)
          element(by.css('[id="title"]')).getText().then(function (text) {
            console.log(text);
      });
    });
  });