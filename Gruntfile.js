"use strict";
//var pkg     = require('../../package.json'),   // импортируем package.json
  //  bundler = require('./helpers/bundler');    // импортируем хелпер для созлания бандлов


/* Настраиваем пути */

//var _src    = './src/',     // путь до исходников
  //  _dist   = './dist/',    // куда будем сохранять дистрибутив будущей библиотеки
    //_public = './public/';  // куда будем сохранять сайт или примеры использования библиотеки

//var _js     = 'js/',        // папка с javascript файлами
  //  _css    = 'css/',       // папка с css
    //_img    = 'img/',       // папка с картинками
    //_html   = 'html/';      // папка с html
	/* 
 * Настраиваем js / css бандлы 
 *
 * Пример: app.js, app.css     - сайт
 *         admin.js, admin.css - админка
 *
 * Пример: your-lib.js        - модуль без зависимостей
 *         your-lib.jquery.js - модуль в формате jquery-плагина
 *
 */

/*var bundles = [
  {
    name        : 'app', // название бандла
    global      : 'app', // если пишем модуль, это имя объекта, экспортируемого в глобальное пространство имён
    compress    : true,  // минифицируем?
    saveToDist  : true   // сохраняем в папку `/dist`? (true - если пишем модуль, false - если делаем сайт)
  }
];

*/
module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
 require('time-grunt')(grunt);
//require('load-grunt-config')(grunt);

//var autoprefixer = require('autoprefixer-core');
  
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	uglify: {
        dist:{
		        src: ['src/dist/file.main.js'],
				dest: 'src/dist/file.main.min.js'
		     }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'src/dist/file.main.js'
      }
    },
	jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	/*(sass: {
  dev: {
    options: {
      style: 'expanded',
      compass: true
    },
    files: {
      'dev/css/style.css': 'style.scss'
    }
  },
  prod: {
    options: {
      style: 'compressed',
      compass: true
    },
    files: {
      'prod/css/style.css': 'style.scss'
    }
  }
},*/
	/* postcss: {
        options: {
          processors: [
            autoprefixer({
              browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            }).postcss
          ]
        },
        dist: {
                files: {
                    'dist/': 'css/*.css'
                }
        }
      },*/
    /*uglify: {
      dist: {
        files: {
          'dist/build.min.js': ['dist/build.js']
        }
      }
    },*/
	
    imagemin: {
      options: {
        cache: false
      }},
	  
    
/*connect: {
  test: {
    options: {
      port: 8000,
      base: '.'
    }
  }
},*/
 /*less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['less.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
         // src: ['.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }*/
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-newer');
 // grunt.loadNpmTasks('grunt-notify');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  //grunt.loadNpmTasks('grunt-contrib-less');
 // grunt.loadNpmTasks('grunt-contrib-stylus');
 // grunt.registerTask('default', ['less', 'watch']);
  //grunt.registerTask('default', ['postcss']);
  //grunt.loadNpmTasks('grunt-contrib-sass');
//grunt.registerTask('default', ['sass']);
//grunt.registerTask('default', [
  //'sass:dev',
  //'watch'
//]);
  //grunt.registerTask('default', ['concat', 'uglify']);
   grunt.registerTask('default', ['jshint']);
   grunt.registerTask('default', ['concat','uglify']);
  //grunt.registerTask('dev', ['concat', 'uglify', 'imagemin']);

};