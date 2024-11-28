const sinon = require('sinon')
const sendPaymentRequestApi = require('./5-payment.js')

describe('Hooks', () => {
	let spy;
	beforeEach(() => {
		spy = sinon.spy(console, 'log');
	});
	afterEach(() => {
		sinon.assert.calledOnce(spy);
		sinon.restore()
	});

	it('Test sendPaymentRequestApi', () => {
		sendPaymentRequestApi(100, 20);
		sinon.assert.calledWith(spy, 'The total is: 120');
	});

	it('Test sendPaymentRequestApi', () => {
		sendPaymentRequestApi(10, 10);
                sinon.assert.calledWith(spy, 'The total is: 20');
        });
});
