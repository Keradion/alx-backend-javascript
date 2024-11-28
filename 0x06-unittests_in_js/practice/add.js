const add = (a, b) => {
	if (typeof a == 'string') return 'None';
	return a + b;
};

module.exports = add;
