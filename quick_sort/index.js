const testArr = require('./test-data');
const getLeadTime = require('../utils/getLeadTime');

const getPivot = arr => {
	if (arr.length > 6) {
		return arr[arr.length / 2];
	} else {
		return arr[0];
	}
};

const quickSort = arr => {
	if (arr.length < 2) {
		return arr;
	} else {
		const pivot = getPivot(arr);
		const less = [];
		const greater = [];

		for (i of arr) {
			if (i < pivot) {
				less.push(i);
			} else if (i > pivot) {
				greater.push(i);
			}
		}
		return quickSort(less).concat([pivot], quickSort(greater));
	}
};

getLeadTime(() => quickSort(testArr), 'quickSort');
getLeadTime(() => testArr.sort((a, b) => a - b), 'JS global func');
