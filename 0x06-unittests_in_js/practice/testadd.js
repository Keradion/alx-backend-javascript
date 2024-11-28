const add = require('./add.js')
const assert = require('assert')

describe('Test for add function', () => {
	it('add 2 numbers', () => {
		result = add(1,0);
		assert.equal(result, 1);
	});
	
	it('return None if string passes', () => {
		result = add('f', 1);
		assert.equal(result, 'None');
	});
});
