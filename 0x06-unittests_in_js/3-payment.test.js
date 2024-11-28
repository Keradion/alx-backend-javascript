const sinon = require('sinon')
const calculateNumber = require('./utils.js').calculateNumber;
const sendPaymentRequestApi = require('./3-payment.js')


describe('Test a function arguments', () => {
	// Run before each unit test 
	const spy = sinon.spy(calculateNumber);
	
	it('Test the correctness of the arguments passed', () => {
		argument1 = 100;
		argument2 = 20
		sendPaymentRequestApi(argument1, argument2); // this invokes calculateNumber
		spy.calledWith('SUM', argument1, argument2); // Test calculateNumber called with arg1 and arg2 from sendpaymentRequestApi.
	});
});
