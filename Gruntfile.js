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
					name: 'cs!app',
					baseUrl: 'src',
					optimize: 'uglify2',
					generateSourceMaps: true,
					preserveLicenseComments: false,
					useSourceUrl: true,
					mainConfigFile: "main.js",
					out: "build/rtst.js"
				}
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
		watch: {
			files: ['./src/**/*.js', './src/**/*.coffee', './spec/**/*.js', './spec/**/*.coffee'],
			tasks: ['jasmine_node']
		}
	});

	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-requirejs');

	// Default task(s).
	grunt.registerTask('default', ['jasmine_node', 'requirejs']);	

}