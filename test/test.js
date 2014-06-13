var chai = require('chai'),
	should = chai.should();

var functions = require('../js/app.js');

describe("add", function () {
	it("should add the two numbers", function () {
	functions.add(1, 2).should.equal(3);
	});

	it("should subtract the two numbers", function () {
	functions.subtract(3, 1).should.equal(2);
	});

	it("should multiply the two numbers", function () {
	functions.multiply(2, 2).should.equal(4);
	});

	it("should divide the two numbers", function () {
	functions.divide(4, 2).should.equal(2);
	});

});

