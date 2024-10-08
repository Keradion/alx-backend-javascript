export default function cleanSet(set, startString) {
	let finalString = '';
	if (startString === '')
		return '';

	for (let value of set) {
		if (value.includes(startString)) {
			finalString = finalString + (value.split(startString)[1] + '-');
		};
	}
	return finalString.slice(0, -1);
};

