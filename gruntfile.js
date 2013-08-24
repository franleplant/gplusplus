module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({

        path: {
            css: './src/css/',
            sass:'./src/sass/'
        },


        sass: {                              
            dist: {                            
                options: {                       
                    style: 'expanded'
                },
                files: {                        
                    '<%= path.css %>style.css': '<%= path.sass %>style.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '<%= path.sass %>*.scss'
                ],
                tasks: ['sass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

};