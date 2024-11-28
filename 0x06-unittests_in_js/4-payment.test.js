const sinon = require('sinon')
const Utils = require('./utils.js');
const sendPaymentRequestApi = require('./3-payment.js')
const expect = require('chai').expect

describe('Test a function arguments', () => {
	it('Test the correctness of the arguments passed', () => {
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const spy = sinon.spy(console, 'log');
		const argument1 = 100;
		const argument2 = 20;
		
		sendPaymentRequestApi(argument1, argument2); // this invokes calculateNumber
		
		sinon.assert.calledOnce(stub);
                sinon.assert.calledWith(stub, 'SUM', argument1, argument2);

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, 'The total is: 10');
		
		spy.restore();
	});
});
