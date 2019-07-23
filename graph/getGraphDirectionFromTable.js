const testData = { a: 'b', b: 'start', finish: 'a' };

const preparePath = (table, path = 'start', pointKey = 'start', graph) => {
	const children = table[pointKey];
	if (!children) {
		return path;
	} else {
		const updatedPath = `${path} = (${
			graph[pointKey][children]
		}) => ${children}`;
		return preparePath(table, updatedPath, children, graph);
	}
};

const getGraphDirectionFromTable = (
	parentsTable,
	startKey = 'start',
	graph,
) => {
	const revertedTable = Object.assign(
		{},
		...Object.entries(parentsTable).map(([a, b]) => ({ [b]: a })),
	);
	return preparePath(revertedTable, startKey, startKey, graph);
};

module.exports = getGraphDirectionFromTable;
