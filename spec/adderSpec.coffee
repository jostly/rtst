describe "adder", ->
	Adder = require('../src/adder.coffee')

	it "should add 1 and 2", ->

		expect(new Adder().add(1,2)).toBe 3