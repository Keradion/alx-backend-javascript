const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');


describe('Test Type SUM', () => {
	
	it('sum of 1 and 2 is 3', () => {
		expect(calculateNumber(1, 2, 'SUM')).to.equal(3);
	});


        it('sum of -1 and -2 is -3', () => {
		expect(calculateNumber(-1, -2, 'SUM')).to.equal(-3);
        });


        it('sum of 5.1 and 2.8 is 8', () => {
                expect(calculateNumber(5.1, 2.8, 'SUM')).to.equal(8);
        });

});

describe('Test Type SUBTRACT', () => {


        it('Subtraction of 10 and 2 is 8', () => {
                expect(calculateNumber(10, 2, 'SUBTRACT')).to.equal(8);
        });


        it('Subtraction of 1 and -2 is 3', () => {
                expect(calculateNumber(1, -2, 'SUBTRACT')).to.equal(3);
        });


        it('Subtraction of 5.5 and 2.8 is 3', () => {
                expect(calculateNumber(5.5, 2.8, 'SUBTRACT')).to.equal(3);
        });
});

describe('Test Type DIVIDE', () => {


        it('Division of 1 and 2 is 0.5', () => {
                expect(calculateNumber(1, 2, 'DIVIDE')).to.equal(0.5);
        });

	it('Division of 4 and 2 is 2', () => {
                expect(calculateNumber(4, 2, 'DIVIDE')).to.equal(2);
        });

	it('Division of 1 and 0 is Error', () => {
                expect(calculateNumber(1, 0, 'DIVIDE')).to.equal('Error');
        });
});
