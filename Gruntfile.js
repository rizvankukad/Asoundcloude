module.exports = function(grunt) {

	/* Project configuration. */
	grunt.initConfig({

		resmap: grunt.file.readJSON('static/resourceMap.json'),

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
			},
			all: ['Gruntfile.js', 'static/js/**/*.js'],
			ignores : ['static/js/lib/**/*.js']
		}

	});

	/* Load all plugins. */
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	/* Default task(s). */
	grunt.registerTask('default', ['jshint','uglify', 'sass']);

};