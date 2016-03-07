'use strict';

// jshint expr: true

var chai = require('chai');
var expect = chai.expect;

chai.should();

function isEven(num) {
	return num % 2 === 0;
}

function add(a,b) {
	return a + b;
}

describe('number tests', function () {

	describe('isEven', function () {
		it('should return true when number is even', function () {
			isEven(4).should.be.true;
		});

		it('should return false when the number is odd', function () {
			isEven(3).should.be.false;
		});

		it('should return false when the number is odd (2)', function () {
			expect(isEven(3)).to.be.false;
		});

	});

	describe('some other tests', function () {
		it('should be undefined', function () {
			var house;
			expect(house).to.equal(undefined);
		});
	});

	describe('testing add', function () {
		var num;

		beforeEach(function () {
			num = 5;
		});

		afterEach(function () {
			// ...
		});

		it('should 13 adding 8 to 5', function () {});

		it('should be ten adding 5 to 5', function () {
			add(num,5).should.equal(10);
		});

		it('should be 12 adding 7 to 5', function () {
			add(num,7).should.equal(12);
		});

		it('should be 14 adding 9 to 5', function () {
			expect(add(num,9)).to.equal(14);
		});
	});	
});

