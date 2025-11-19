const { expect }  = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');

describe('beforeEach and afterEach hooks', () => {
	// Before each test case we setup a spy on calculateNumber & console.log
	let spy;
	let spyConsole;

	beforeEach(() => {
		spy = sinon.spy(Utils, 'calculateNumber');
		spyConsole = sinon.spy(console, 'log');
	});

	it ('Test calculateNumber was called with arguments SUM, 100, 20 ', () => {
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;
		expect(spyConsole.calledWith('The total is: 120')).to.be.true;
	});

	it ('test calculateNumber was called with arguments  SUM, 10, 10 ', () => {
		sendPaymentRequestToApi(10, 10);
		expect(spy.calledWith('SUM', 10, 10)).to.be.true;
		expect(spyConsole.calledWith('The total is: 20')).to.be.true;
	});

	// after each test case we remove the spies 
	
	afterEach(() => {
		spy.restore();
		spyConsole.restore();
	});
});
