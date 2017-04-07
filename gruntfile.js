module.exports = function(grunt) {

  grunt.initConfig({
      /*sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },*/
    imagemin: {                          // Task 
        dynamic: {                         // Another target 
          files: [{
            expand: true,                  // Enable dynamic expansion 
            cwd: 'images/',                   // miejsce gdzie sa obrazki
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
            dest: 'images/zoptymalizowane/'                  // miejsce gdzie maja sie zapisywac zoptymalizowane
          }]
        }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release',
          src: ['*.css', '!*.min.css'],
          dest: 'release',
          ext: '.min.css'
        }]
      }
    }
    /*watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        } 
    }*/
  });

  /*grunt.loadNpmTasks('grunt-sass');*/
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  /*grunt.loadNpmTasks('grunt-contrib-watch');
*/
  grunt.registerTask('default', ['imagemin', 'cssmin']);

};