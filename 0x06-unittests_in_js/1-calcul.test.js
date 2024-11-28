const assert = require('assert')
const func = require('./1-calcul.js')

describe('Test Add Functionality', () => {
	it('Test sum of 2 digits and their round', () => {
		result = func('SUM', 1.3, 4.5); // expected result 6
		assert.equal(result, 6)
	});

	it('Test sum of 2 digits', () => {
		result = func('SUM', 1, 5.9); // expected result 7
		assert.equal(result, 7);
	});

	it('Test sum of 2 digits', () => {
		reult = func('SUM', 2.4, 5); // expected result 7
	});
});
