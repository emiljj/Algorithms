const targetItem = 5978;
const list = [];

for (var i = 0; i < 10000; ++i) {
	list.push(i + 1);
}

function binarySearch(list, item) {
	let it = 0;
	let low = 0;
	let high = list.length - 1;
	let guess = null;

	while (low <= high) {
		console.log('low: ', low);
		console.log('high: ', high);
		console.log('guess: ', guess);
		it += 1;
		mid = Math.round((low + high) / 2);
		console.log('mid: ', mid);
		guess = list[mid];
		console.log('guess -- U ', guess);

		if (guess === item) {
			return { guess, iterationsCount: it, success: true };
		}

		if (guess > item) {
			console.log('guess > item: mid - 1');
			high = Math.round(mid - 1);
		} else {
			console.log('guess < item: mid + 1');
			low = Math.round(mid + 1);
		}

		console.log('it -- U: ', it);
		console.log('low -- U ', low);
		console.log('high -- U ', high);
	}

	return { guess, iterationsCount: it, success: false };
}

const result = binarySearch(list, targetItem);

console.log('[RESULT]: ', result);
