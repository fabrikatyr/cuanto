// Karma configuration

// base path, that will be used to resolve files and exclude
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'public/lib/jquery/jquery.js',
      'public/lib/angular/angular.js',
      'public/lib/angular-bootstrap/ui-bootstrap.js',
      'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/lib/angular-ui-utils/modules/route/route.js',
      'public/lib/angular-cookies/angular-cookies.js',
      'public/lib/angular-resource/angular-resource.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/js/*.js',
      'public/js/**/*.js',
      'test/frontend/unit/*.js'
    ],

    // all the following scripts has errors
    exclude: [
      'public/js/services/activities.js',
      'public/js/services/projectsService*.js',
      'public/js/controllers/salesfcastController.js'
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

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

