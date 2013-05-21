define [
	'cs!adder/adder'
], (Adder) ->
	console.log "Adding 2 to 3 gets us #{new Adder().add(2,3)}"