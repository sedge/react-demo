module.exports = function(grunt) {
  // Make grunt auto-load 3rd party tasks
  // and show the elapsed time of each task when
  // it runs
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    browserify: {
      example1: {
        files: {
          'dist/app.js': ['js/first/firstExample.js']
        },
        options: {
          transform: ['reactify']
        }
      },
      example2: {
        files: {
          'dist/app.js': ['js/second/secondExample.js']
        },
        options: {
          transform: ['reactify']
        }
      },
      example3: {
        files: {
          'dist/app.js': ['js/third/thirdExample.js']
        },
        options: {
          transform: ['reactify']
        }
      }
    },
    clean: ['dist/app.js']
  });

  // Simple multi-tasks
  grunt.registerTask( "example1", [ "clean", "browserify:example1" ] );
  grunt.registerTask( "example2", [ "clean", "browserify:example2" ] );
  grunt.registerTask( "example3", [ "clean", "browserify:example3" ] );
  grunt.registerTask( "default", [ "build" ] );
};
