//Стандартный экспорт модуля в nodejs
module.exports = function(grunt) {
  // Инициализация конфига GruntJS
  grunt.initConfig({

    //Склеивание JS файлов
    concat: {
        dist: {
            src: [
            	'js/vendor/jquery-2.1.1.min.js',
            	'js/vendor/modernizr-2.6.2.min.js',
            	'js/jquery.mousewheel.min.js',
                'js/jquery.bxslider.min.js',
                'js/plugins/jquery.easing.1.3.js',
                'js/plugins/jquery.fitvids.js',
                'js/jquery.fancybox.pack.js',
                'js/main.js',
                'js/plugins.js'
            ],
            dest: 'js/build/production.js'
        }
    },

    // Сжатие общего JS файла
    uglify: {
        build: {
            src: 'js/build/production.js',
            dest: 'js/build/production.min.js'
        }
    },

    // SASS
    sass: {
      dist: {
        files: [{
		   expand: true,
		   cwd: 'src/css',
		   src: ['*.scss'],
		   dest: 'src/sass',
		   ext: 'main.css'
        }]
      }
    },
    
    // CSS Min
    cssmin: {
          combine: {
            files: {
              'css/production.min.css': [
                'css/production.css',
                'css/normalize.css',
                'css/jquery.bxslider.css',
                'css/jquery.fancybox.css'
                ]
            }
          }
        },

    watch: {
        options: {
        livereload: true,
      },
      scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
                spawn: false
            }
        },
     css:{
	         files: ['src/css/*.scss'],
			 tasks: ['sass'],
			 options: {
            spawn: false,
        },
	   }
    }

  });

  // Загрузка модулей, которые предварительно установлены
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};