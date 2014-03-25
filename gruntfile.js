module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            connect: {
                server: {
                    options: {
                        port: 8000,
                        base: './'
                    }
                }
            },
            sass: {
                dist: {
                    files: {
                        'assets/css/screen-style.css' : 'assets/scss/screen-style.scss',
                        'assets/css/print-style.css' : 'assets/scss/print-style.scss'
                    }
                }
            },
            watch: {
                scss: {
                    files: ['./assets/scss/*.scss'],
                    options: {
                        livereload: true
                    },
                    tasks: ['sass']
                },
                html: {
                    options: {
                        livereload: true
                    },
                    files: ['./**/*.html']
                }

            }
        }
    );
};