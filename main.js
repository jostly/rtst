require.config({
	baseUrl: "src",
	paths: {
		'cs': '../lib/cs',
    	'coffee-script': '../lib/coffee-script'
	},
	shim: {
	}
});

require(['cs!app'], function(App) {
	console.log("Loaded main");
});
