const assert = require('node:assert'); // Importing nodes assert library for testing
const calculateNumber = require('./0-calcul'); // Importing the function to be tested



describe("calculateNumber", () => {
  
  it('The sum of 2.5 and 3 is 6', () => {
    assert.strictEqual(calculateNumber(2.5, 3), 6);
  });

  it('The sum of 1.75 and 8.56 is 11', () => {
    assert.strictEqual(calculateNumber(1.75, 8.56), 11);
  });

  it('The sum of 3.45 and 1 is 4 ', () => {
    assert.strictEqual(calculateNumber(3.45, 1), 4);
  });

});


