describe('Learnign about Page Object Model with Protractor', function () {
   
    var home_page = require('../page/home_base.js');

    beforeEach(function () {
       browser.get('https://www.thetestroom.com/jswebapp/');
    });

    it('should be able to adopt an animal by Page Object Model', function () {
        home_page.enterFieldValue('I am subscribed!');
        var getHomePageText = home_page.getDynamicTest();
        expect(getHomePageText).toBe('I am subscribed!');
        var animal_page = home_page.clickContinue();
        animal_page.selectAnimal(2);
        var confirm_page = animal_page.clickContinue();
        confirm_page.getTitle();
        expect(confirm_page.getTitle()).toBe('Thank you');
        console.log('Test Ran');
    });
});