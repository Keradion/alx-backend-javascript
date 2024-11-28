const sinon = require('sinon')
const Utils = require('./utils.js');
const sendPaymentRequestApi = require('./3-payment.js')
const expect = require('chai').expect

describe('Test a function arguments', () => {
	it('Test the correctness of the arguments passed', () => {
		const spy = sinon.spy(Utils, 'calculateNumber');
		const argument1 = 100;
		const argument2 = 20
		sendPaymentRequestApi(argument1, argument2); // this invokes calculateNumber
		expect(spy.calledOnceWith('SUM', argument1, argument2)).to.be.true;
		spy.restore();
	});
});
