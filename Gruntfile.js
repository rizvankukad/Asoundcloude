module.exports = function(grunt) {

	/* Project configuration. */
	grunt.initConfig({

		resmap: grunt.file.readJSON('static/resourceMap.json'),

		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		nodemon: {
			dev: {
				script: 'bin/www',
				options: {
					cwd: __dirname,
					ignore: ['node_modules/**','static/**','public/**'],
					ext: 'js,coffee',
					delay: 1000,
					legacyWatch: true
				}
			}
		},

		uglify: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'static/js',
					src: '**/*.js',
					dest: 'public/javascripts'
				}]
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'static/css',
					src: ['**/*.scss'],
					dest: 'public/stylesheets',
					ext: '.css'
				}]
			}
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				},
				ignores : ['static/js/lib/**/*.js']
			},
			all: ['Gruntfile.js', 'static/js/**/*.js']
		},

		watch: {
			scripts: {
				files: 'static/js/**/*.js',
				tasks: ['jshint'],
				options: {
					interrupt: true,
				},
			},
			css: {
				files: 'static/css/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			}
		}

	});

	/* Load all plugins. */
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');

	/* Default task(s). */
	grunt.registerTask('default', ['jshint','uglify', 'sass']);
	grunt.registerTask('start', ['concurrent']);

};