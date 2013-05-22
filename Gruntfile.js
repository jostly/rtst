module.exports = function(grunt) {
	var settings = {
		projectName: 'rtst',
		dist: 'dist/',
		build: 'build/',
		requireJsMainConfig: 'main.js',
		app: 'cs!app'
	};

	settings.distFile = settings.dist + settings.projectName + ".min.js";
	settings.testFile = settings.build + "test/" + settings.projectName + ".js";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					almond: true,
					name: settings.app,
					optimize: 'uglify2',
					generateSourceMaps: true,
					preserveLicenseComments: false,
					useSourceUrl: true,
					mainConfigFile: settings.requireJsMainConfig,
					out: settings.distFile
				}
			},
			test: {
				options: {
					almond: false,
					name: settings.app,
					optimize: 'none',
					generateSourceMaps: true,
					preserveLicenseComments: false,
					useSourceUrl: true,
					mainConfigFile: settings.requireJsMainConfig,
					out: settings.testFile
				}				
			}
		},
		coffee: {
			compile: {
				options: {
					bare: true
				},
				expand: true,
				flatten: false,
				cwd: './',
				src: ['spec/**/*.coffee'],
				dest: settings.build,
				ext: '.js'
			},
		},
		jasmine: {
			taskName: {
				src: settings.testFile,
				options: {
					specs: settings.build + "spec/**/*Spec.js",
					template: require('grunt-template-jasmine-requirejs'),
					templateOptions: {
						requireConfigFile: settings.requireJsMainConfig,
						requireConfig: {
							baseUrl: './'
						}
					}
				}
			}
		},
		watch: {
			files: ['./src/**/*.js', './src/**/*.coffee', './spec/**/*.js', './spec/**/*.coffee'],
			tasks: ['requirejs:test', 'coffee', 'jasmine']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	// Default task(s).
	grunt.registerTask('test', ['requirejs:test', 'coffee', 'jasmine']);
	grunt.registerTask('default', ['requirejs:test', 'coffee', 'jasmine', 'requirejs:compile']);

}