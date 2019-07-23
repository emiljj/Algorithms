const getTime = require('./getTime');

module.exports = (func, funcName, unit = 'micro') => {
	const start = getTime(unit);
	const result = func() || null;
	const end = getTime(unit);
	const message = `Function [${funcName}] lead time: ${end -
		start} ${unit}seconds`;
	console.log(`MESSAGE: `, message);
	return {
		message,
		result,
	};
};
