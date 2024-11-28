const assert = require('assert')
const calculateNumber = require('./0-calcul.js')

describe('Testing calculateNumber function', () => {
	it('Test if the function rounds and return correct sum of 2 digits', () => {
		result = calculateNumber(1.5, 2.5); // The expected sum result is 5 here.
		assert.equal(result, 5);
	});
});
