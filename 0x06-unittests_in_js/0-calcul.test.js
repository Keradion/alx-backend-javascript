const assert = require('assert')
const calculateNumber = require('./0-calcul.js')

describe('Testing calculateNumber function', () => {
	it('Test if the function rounds and return correct sum of 2 digits', () => {
		result = calculateNumber(1.5, 2.5); // The expected sum result is 5 here.
		assert.equal(result, 5);
	});

	it('Test if the function rounds and return correct sum of 2 digits', () => {
		result = calculateNumber(1, 2.3); // The expected sum result is 3 here.
		assert.equal(result, 3);
	});
	
	it('Test if the function rounds and return correct sum of 2 digits', () => {
		result = calculateNumber(2.3, 2.3); // The expected sum result is 4 here.
		assert.equal(result, 4);
	});
});

