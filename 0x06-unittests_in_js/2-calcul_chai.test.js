const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('Test Type SUM', () => {

  it('sum of 1 and 2 is 3', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('sum of -1 and -2 is -3', () => {
    expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
  });

  it('sum of 5.1 and 2.8 is 8', () => {
    expect(calculateNumber('SUM', 5.1, 2.8)).to.equal(8);
  });

});

describe('Test Type SUBTRACT', () => {

  it('Subtraction of 10 and 2 is 8', () => {
    expect(calculateNumber('SUBTRACT', 10, 2)).to.equal(8);
  });

  it('Subtraction of 1 and -2 is 3', () => {
    expect(calculateNumber('SUBTRACT', 1, -2)).to.equal(3);
  });

  it('Subtraction of 5.5 and 2.8 is 3', () => {
    expect(calculateNumber('SUBTRACT', 5.5, 2.8)).to.equal(3);
  });

});

describe('Test Type DIVIDE', () => {

  it('Division of 1 and 2 is 0.5', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
  });

  it('Division of 4 and 2 is 2', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('Division of 1 and 0 is Error', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });

});

