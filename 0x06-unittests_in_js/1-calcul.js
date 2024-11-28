const calculateNumber = (type, a, b) => {
	a = Math.round(a);
	b = Math.round(b);

	if (type == 'SUM') 
		return a + b;
	
	if (type == 'SUBTRACT') 
		return a - b;
	
	if (type == 'DIVIDE') {
		if (b == 0) 
			return 'Error';
		else return a / b;
	}
};

console.log(calculateNumber('DIVIDE', 5, 0));
module.exports = calculateNumber;
