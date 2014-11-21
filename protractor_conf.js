// An example configuration file.
var protractorDemoConfig = require('./resource/config');

var setting = protractorDemoConfig.protractorDemoEnvironmentSetting;

//Knowledgebase config file for protractor
exports.config = {
  // Do not start a Selenium Standalone sever - only run this using chrome.
  chromeOnly: setting.chromeOnly,
  // chromeDriver: 'C:\Users\aieng\AppData\Roaming\npm\node_modules\protractor\selenium\chromedriver',

  seleniumAddress: setting.seleniumAddress,
  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: setting.multiCapabilities,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['test/login.test.js'],
  specs: setting.specs,
  // specs: ['test/main.spec.js'],
  baseUrl: setting.baseUrl,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
};
