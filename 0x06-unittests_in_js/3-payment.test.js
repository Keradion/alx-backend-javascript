const sinon  = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi  = require('./3-payment.js');
const Utils = require('./utils.js');

// Verify the arguments passed to sendPaymentRequestToApi is 
// similar to what is passed to Utils.calculateNumber function 

describe('testing the arguments passed to calculateNumber', () => {
	it('SUM 100 200', () => {
	
		const spy = sinon.spy(Utils, 'calculateNumber');
		
		// Call sendPaymentToApi which in returns calls calculateNumber

		sendPaymentRequestToApi(100, 20);
		
		// Now confirm the arguments passed to calculateNumber are correct and valid
		// spy.calledWith returns a boolean true | false so we need to assert 
		
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;


		// remove the wrapper function from the orginal created by the spy
		spy.restore();
});
});
