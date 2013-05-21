require ['cs!../src/adder/adder'], (Adder) ->
	describe "adder", ->

		it "should add 1 and 2", ->

			expect(new Adder().add(1,2)).toBe 3