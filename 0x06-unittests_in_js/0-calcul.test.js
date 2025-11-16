const assert = require('assert'); // Importing nodes assert library for testing
const calculateNumber = require('./0-calcul'); // Importing the function to be tested


describe('CalculateNumber Test Cases', () => {
	
	it('Sum of 1.5 and 0.5 is 3', () => {
		assert.equal(calculateNumber(1.5, 0.5), 3);
	});

	it('Sum of 1 and 2.5 is 4', () => {
		assert.equal(calculateNumber(1, 2.5), 4);
	});

	it('Sum of 7.7 and 2.3 is 10', () => {
		assert.equal(calculateNumber(7.7, 2.3), 10);
	});

	it('Sum of -5.3 and 2.5 is -2', () => {
		assert.strictEqual(calculateNumber(-5.3, 2.5), -2);
	});
});
