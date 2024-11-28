const assert = require('assert')
const func = require('./1-calcul.js')

// Test For 'ADD'
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


// Test For 'SUBTRACT'

describe('Test Subtract functionality', () => {
	it('Test difference of 2 digits', () => {
		result = func('SUBTRACT', 1.4, 3.6) // expected result 3
		assert.equal(result, 3)
	});

	it('Test difference of 2 digits', () => {
                result = func('SUBTRACT', 1, 3.6) // expected result 3
                assert.equal(result, 3)
        });

	it('Test difference of 2 digits', () => {
                result = func('SUBTRACT', 1.6, 3.6) // expected result 2
                assert.equal(result, 2)
        });
});

// Test For 'DIVIDE'

describe('Test DIVIDE functionality', () => {
        it('Test division of 2 digits', () => {
                result = func('DIVIDE', 1.4, 3.6) // expected result 4
                assert.equal(result, 0.25)
        });

        it('Test division of 2 digits', () => {
                result = func('DIVIDE', 1, 0) // expected result 'Error'
                assert.equal(result, 'Error')
        });
	
	it('Test division of 2 digits', () => {
                result = func('DIVIDE', 4, 2) // expected result 2
                assert.equal(result, 2)
        });

});

