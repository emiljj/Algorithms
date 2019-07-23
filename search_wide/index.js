const graph = require('./testData');
const getLeadTime = require('../utils/getLeadTime');

const NEEDED_PERSON = 'bob';
const isNeededPerson = name => name === NEEDED_PERSON;

const searchWide = name => {
	let queue = graph[name];
	const verified = [name];
	let iterations = 0;
	while (queue.length) {
		iterations += 1;
		const person = queue.shift();
		if (verified.indexOf(person) !== -1) {
			continue;
		}
		if (isNeededPerson(person)) {
			console.log('Person was found: ', person, 'Iterations: ', iterations);
			return person;
		} else {
			verified.push(person);
			const personsFriends = graph[person] || [];
			queue = [...queue, ...personsFriends];
		}
	}
	console.log('Person was not found!', 'Iterations: ', iterations);
};

getLeadTime(() => searchWide('emil'), searchWide.name, 'milli');
