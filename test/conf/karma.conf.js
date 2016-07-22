'use strict';

module.exports = function(config) {
    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: [
            'vendor/angularJS/angular.min.1.5.3.js',
            'vendor/angularJS/angular-route.min.1.5.3.js',
            'test/vendor/angularJS/angular-mocks.1.5.3.js',
            'dist/js/twenty-eight.all.js',

            'test/app/**/*.js'
        ],
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],
        singleRun: false
    });
};