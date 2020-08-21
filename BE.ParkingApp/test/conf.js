// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['2748_CustomerLandingPage.spec.js'],
  specs: ['2761_NewParkingPermit.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
    }
};
