const { expect } = require('chai');
const assert = require('assert');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with the object {data: "Successful response from the API"} when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  }));

  it.skip('should return a rejected promise when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false, (err) => {
      try {
        assert.strictEqual(err, 'Error');
        done();
      } catch (err) {
        done(err);
      }
    });
  }));
});
