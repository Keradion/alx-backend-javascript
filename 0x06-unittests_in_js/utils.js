const Utils = {
	calculateNumber: (type, a, b) => {
		a = Math.round(a);
		b = Math.round(b);
		
		if (type == 'SUM')
			return a + b;
		
		if (type == 'SUBTRACT')
			return b - a;
		
		if (type == 'DIVIDE') {
			if (b == 0)
				return 'Error';
			else return a / b;
		}
}

};
module.exports = Utils;
