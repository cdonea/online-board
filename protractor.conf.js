// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 110000,

  specs: [
    './src/**/*.e2e-spec.ts'
  ],

  capabilities: {
    'browserName': 'chrome',
  },

  baseUrl: 'http://localhost:4200/',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000,
    print: function() {}
  },

  directConnect: true,

  beforeLaunch: function() {
    require('ts-node').register({
      project: 'src/tsconfig.e2e.json'
    });

  },
  onPrepare() {
    ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true
};
