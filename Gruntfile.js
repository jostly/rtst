module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					almond: true,
					replaceRequireScript: [{
						files: ['build/index.html'],
						module: 'main'
					}],
					modules: [{name: 'main'}],
					dir: 'build',
					appDir: 'src',
					baseUrl: 'js',
					optimize: "none"
					//mainConfigFile: "main.js",
					//out: "build/rtst.js"
				}
			}
		},
		coffee: {
			compile: {
				expand: true,
				flatten: false,
				options: {
					bare: true,	
				},
				cwd: 'src',
				src: ['**/*.coffee'],
				dest: 'build/cjs/src/',
				ext: '.js'
			}
		},
		jasmine_node: {
			specNameMatcher: "spec", // load only specs containing specNameMatcher
			projectRoot: ".",
			requirejs: false,
			forceExit: true,
			useCoffee: true,
			extensions: "coffe|js",
			jUnit: {
				report: false,
				savePath : "./build/reports/jasmine/",
				useDotNotation: true,
				consolidate: true
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '<%= coffeeify.files.dest %>',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		coffeeify: {
			options: {
				debug: true
			},
			files: 
				{
					src:['./src/**/*.coffee'], 
					dest:'build/<%= pkg.name %>.js'
				}
			
		},	
		watch: {
			files: ['./src/**/*.js', './src/**/*.coffee', './spec/**/*.js', './spec/**/*.coffee'],
			tasks: ['jasmine_node']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-coffeeify');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-requirejs');

	// Default task(s).
	grunt.registerTask('default', ['jasmine_node', 'coffeeify', 'uglify']);	

}