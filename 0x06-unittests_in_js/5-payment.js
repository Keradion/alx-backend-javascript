const utils = require('./utils.js')
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
	result = utils.calculateNumber('SUM', totalAmount, totalShipping);
	console.log(`The total is: ${result}`);
};

module.exports = sendPaymentRequestToApi;
