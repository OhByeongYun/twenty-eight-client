'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            all: {
                files: [
                    'src/**/*',
                    'test/**/*'
                ],
                options: {
                    livereload: 35729
                },
                tasks: ['jshint', 'clean', 'concat', 'less', 'copy', 'karma']
            }
        },
        clean: {
            all: ['dist/**/*']
        },
        concat: {
            all: {
                options: {
                    separator: '\n\n'
                },
                src: [
                    'src/app/intro.js',
                    'src/app/twenty-eight.js',

                    // adding local module
                    'src/app/component/**/*.js',
                    'src/app/common/**/*.js',

                    'src/app/outro.js'
                ],
                dest: 'dist/js/twenty-eight.all.js'
            }
        },
        less: {
            all: {
                files: {
                    'dist/css/twenty-eight.all.css': 'src/app/twenty-eight.less'
                }
            }
        },
        copy: {
            all: {
                files: [
                    {
                        expand: false,
                        src: ['src/index.html'],
                        dest: 'dist/index.html'
                    },
                    {
                        expand: true,
                        src: ['vendor/**/*'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        jshint: {
            all: {
                options: {
                    force: true,
                    reporter: require('jshint-html-reporter'),
                    reporterOutput: 'reports/jshint/jshint.html',
                    ignores: [
                        'src/app/intro.js',
                        'src/app/twenty-eight.js',
                        'src/app/outro.js'
                    ]
                },
                files: {
                    src: [
                        'src/app/**/*.js',
                        'test/app/**/*.js'
                    ]
                }
            }
        },
        karma: {
            all: {
                port: 9876,
                singleRun: true,
                frameworks: ['jasmine'],
                browsers: ['PhantomJS'],
                reporters: ['progress', 'kjhtml'],
                files: {
                    src: [
                        'vendor/angularJS/angular.min.1.5.3.js',
                        'vendor/angularJS/angular-route.min.1.5.3.js',
                        'test/vendor/angularJS/angular-mocks.1.5.3.js',
                        'dist/js/twenty-eight.all.js',

                        'test/app/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('server', 'running tasks', function() {
        var server = require('./app.js');
    });
    grunt.registerTask('dev', ['server', 'jshint', 'clean', 'concat', 'less', 'copy', 'karma', 'watch']);
};