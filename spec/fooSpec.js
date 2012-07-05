
/**
 * 
 * A spec file - if running the tests in PhantomJS or Node, make sure to use requirejs not require
 * If using the jsTestDriver coverage plugin, make sure that the test is excluded from the coverage reporting,
 * it will break things! 	
 *
 */

requirejs(["src/foo"], function(Foo) {

	"use strict";
	
	describe('Foo bar spec', function() {

		it("should return Foo Bar", function() {
			expect(Foo.bar).toEqual("Foo Bar");
		});

	});
	

});