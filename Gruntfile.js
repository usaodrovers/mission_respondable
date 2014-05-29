/*!
 * Mission Repondable Theme Gruntfile
 * http://usao.edu
 * @author Cody Dracars
 */

'use strict';

/*
 * Grunt Module
 */
module.exports = function(grunt) {
 
  /*
   * Configuration
   */
  grunt.initConfig({

    /*
     * Get package meta data.
     */
    pkg: grunt.file.readJSON('package.json'),

    /*
     * Set project object.
     */
    project: {
      src: [
        '/var/www/drupal/profiles/d7_usao_edu/themes/mission_respondable'
      ],
      css: [
        '<%= project.src %>/sass/mission_respondable.scss'
      ],
      js: [
        '<%= project.src%>/js/*.js'
      ]
    },

    /*
     * jshint
     */
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['<%= project.js %>']
    },
    
    /*
     * sass-lint
     */
     scsslint: {
       allFiles: [
         '<%= project.src %>/sass/mission_respondable.scss',
         '<%= project.src %>/sass/partials/*.scss',
       ],
       options: {
         bundleExec: false,
         config: '.scss-lint.yml',
         reporterOutput: 'scss-lint-report.xml',
         colorizeOutput: true
       },
     },

     /**
     * Compass
     */
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    }, 

    /**
     * Watch
     */
    watch: {
      css: {
        files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['compass']
      }
    }
  });

  /**
   * Load Grunt plugins
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'compass',
    'watch'
  ]);
};
