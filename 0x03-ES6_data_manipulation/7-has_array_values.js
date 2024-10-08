export default function hasValuesFromArray(set, array) {
	for (let value of array) {
		if (!set.has(value)) 
			return false;
	}
	return true;
}

