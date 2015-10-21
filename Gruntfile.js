module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        clean: ["disc/**/*"],

        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    paths: ["src/stylesheets"]
                },
                files: {
                    "./disc/css/<%= pkg.name %>.css": "./src/stylesheets/**/*.less"
                }
            }
        },

        watch: {
            scripts: {
                files: ['./src/**/*'],
                tasks: ['package'],
                options: {
                    livereload: true,
                },
            },
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, flatten: true, src: ['src/images/*'], dest: 'disc/images/'},
                    {expand: true, flatten: true, cwd: 'src/', src: ['index.html'], dest: 'disc/', filter: 'isFile'}
                ],
            },
        },

        requirejs: {
            compile: {
                options: {
                    appDir: "./src/javascript",
                    baseUrl: ".",
                    dir: "disc",
                    mainConfigFile: './src/javascript/config.js',
                    removeCombined: true,
                    modules: [
                        {
                            name: "main"
                        }
                    ],
                    paths: {
                        angular: 'empty:',
                        jquery: 'empty:',
                        ngGrid: 'empty:',
                        uiBootstrap: 'empty:',
                        q: 'empty:',
                        text: '../../node_modules/requirejs-text/text',
                        template: '../template'
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('package', ['clean','requirejs', 'less', 'copy']);

    grunt.registerTask('start',function(){
        grunt.util.spawn({
            cmd:'node',
            args:['bin/www']
        });
        grunt.task.run('watch');
    });

    grunt.registerTask('default',['package','start']);

};