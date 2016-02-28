// Generated on 2016-02-08 using
// generator-webapp 1.1.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

process.env.NODE_PATH = __dirname;
module.exports = function(grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        browserify: 'grunt-browserify'
    });

    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        browserify: {
            options: {
                transform: [
                    ['babelify', {
                    presets: ['es2015', 'react']
                }]
                ],
                browserifyOptions: {
                    standalone: 'component'
                },
                // these are handled by browserify-shim in package.json
                exclude: ['react', 'react-dom', 'react-addons-css-transition-group', 'react-bootstrap']
            },
            frontend: {
                options: {
                    watch: true
                },
                files: [{
                        expand: true,
                        cwd: 'app/frontend/pages/',
                        src: ['**/*-index.{jsx,js}'],
                        dest: 'app/public/jsx/',
                        ext: '.js',
                        rename: function(dest, src) {
                            return dest + src.replace(/-index/, '');
                        }
                }]
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },

            express: {
                files:  ['server.js', '<%= yeoman.app %>/routing.js', '<%=yeoman.app %>/backend/**/*.js'],
                tasks:  ['express:dev'],
                options: {
                    // Without this option specified express won't be reloaded
                    spawn: false
                }
            }
        },


        //SERVER
        express: {
            options: {
                port: grunt.option('port') || 9000
            },
            dev: {
                options: {
                    script: 'server.js',
                    'node_env': 'development'
                }
            },
            livereload: {
                options: {
                    open: true,
                    base: ['<%= yeoman.app %>']
                }
            }
        }
    });


    // server task used for local development
    grunt.registerTask('serve', function() {
        var tasks = [];
        tasks.push('browserify:frontend');
        tasks.push('express:dev');
        tasks.push('watch');
        grunt.task.run(tasks);
    });

    // build task used by all environments
    grunt.registerTask('build', ['browserify:frontend']);

    grunt.registerTask('default', ['build']);
};
