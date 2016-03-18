/* global module */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '.',
        singleRun: false,
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        files: [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'node_modules/es6-promise/dist/es6-promise.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/typescript/lib/typescript.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/testing.dev.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
            'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js',
            'test/test-main.js',
            {pattern: 'src/**/*.ts', included: false, served: true},
            {pattern: 'test/**/*.ts', included: false, served: true}
        ]
    });
};