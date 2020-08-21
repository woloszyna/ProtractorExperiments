  describe('Customer Landing Page', function () {

    beforeAll(function () {
      browser.get('https://uat-parking-front.azurewebsites.net/home');
    });

    it('Customer can see a welcome screen with EazyPark logo', function () {
      var eazyParkLogo = element(by.css('div.page-header > h1'));

      expect(eazyParkLogo.isDisplayed()).toBe(true);
    });

    it('Customer can see a welcome screen with link to logon', function () {
      var loginLink = element(by.css('a > span'));

      expect(loginLink.isDisplayed()).toBe(true);
      expect(loginLink.getText()).toEqual('Login');
    });

    afterAll(function () {
      browser.close();
    });

  });
