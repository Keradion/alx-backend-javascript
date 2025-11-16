const assert = require('assert');
const calculateNumber = require('./1-calcul.js');


describe('Test Type SUM', () => {
	
	it('sum of 1 and 2 is 3', () => {
		assert.strictEqual(calculateNumber(1, 2, 'SUM'), 3);
	});


        it('sum of -1 and -2 is -3', () => {
                assert.strictEqual(calculateNumber(-1, -2, 'SUM'), -3);
        });


        it('sum of 5.1 and 2.8 is 8', () => {
                assert.strictEqual(calculateNumber(5.1, 2.8, 'SUM'), 8);
        });

});

describe('Test Type SUBTRACT', () => {


        it('Subtraction of 10 and 2 is 8', () => {
                assert.strictEqual(calculateNumber(10, 2, 'SUBTRACT'), 8);
        });


        it('Subtraction of 1 and -2 is 3', () => {
                assert.strictEqual(calculateNumber(1, -2, 'SUBTRACT'), 3);
        });


        it('Subtraction of 5.5 and 2.8 is 3', () => {
                assert.strictEqual(calculateNumber(5.5, 2.8, 'SUBTRACT'), 3);
        });
});

describe('Test Type DIVIDE', () => {


        it('Division of 1 and 2 is 0.5', () => {
                assert.strictEqual(calculateNumber(1, 2, 'DIVIDE'), 0.5);
        });

	it('Division of 4 and 2 is 2', () => {
                assert.strictEqual(calculateNumber(4, 2, 'DIVIDE'), 2);
        });

	it('Division of 1 and 0 is Error', () => {
                assert.strictEqual(calculateNumber(1, 0, 'DIVIDE'), 'Error');
        });
});
