/**
 * @param {number} a - Numerical value
 * @param {number} b - Numerical value
 * @returns {number} Sum of a and b after rounding each numbers to the nearest integer.
 */

const calculateNumber = (a, b) => {
  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;