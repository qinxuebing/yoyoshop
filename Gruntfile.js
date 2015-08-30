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
        // running `grunt watch` will watch for changes
        watch: {
            files: "./css/*.less",
            tasks: ["less","copy"]
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true,flatten: true, src: ['src/images/*'], dest: 'disc/images/'},
                    {expand: true, flatten: true, cwd: 'src/', src: ['index.html'], dest: 'disc/', filter: 'isFile'}
                ],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat']);

};