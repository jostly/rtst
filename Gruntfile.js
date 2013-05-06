module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine_node: {
			specNameMatcher: "spec", // load only specs containing specNameMatcher
			projectRoot: ".",
			requirejs: false,
			forceExit: true,
			useCoffee: true,
			extensions: "coffee|js",
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

	// Default task(s).
	grunt.registerTask('default', ['jasmine_node', 'coffeeify', 'uglify']);	

}