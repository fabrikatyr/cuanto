// Karma configuration

// base path, that will be used to resolve files and exclude
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['ng-scenario'],
    // list of files / patterns to load in the browser
    files: [
      'test/frontend/scenario/*.js'
    ],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['dots'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    proxies: {
      '/': 'http://localhost:3000/'
    },
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    urlRoot: '/__karma/'
  });
};

