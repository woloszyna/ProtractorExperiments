  describe('Customer Landing Page', function () {

    beforeAll(function () {
        browser.get('https://uat-parking-front.azurewebsites.net/home'); 
    });
      
      beforeEach(function () {
        var loginLink = element(by.css('a > span'));
        loginLink.click();
        
        var emailAddress = element(by.css('input#logonIdentifier'));
        var password = element(by.css('input#password'));
        var signInBtn = element(by.css('button#next'));

        emailAddress.sendKeys('testuser01@eazypark.onmicrosoft.com');
        password.sendKeys('flumps1!');
        signInBtn.click();

          //log in as Customer
      })

    it('Customer can see a welcome screen with EazyPark logo', function () {
      var eazyParkLogo = element(by.css('div.page-header > h1'));

      expect(eazyParkLogo.isDisplayed()).toBe(true);
    });

    it('Customer can see a welcome screen with link to logon', function () {
      var loginLink = element(by.css('a > span'));

      expect(loginLink.isDisplayed()).toBe(true);
      expect(loginLink.getText()).toEqual('Login');
    });

      afterEach(function () {
        
          //Delete what was done
          //logOut
    })
      
      afterAll(function () {
        
      browser.close();
    });

  });
