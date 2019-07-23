module.exports = (costs, processed) => {
	let lowestCost = Infinity;
	let lowestCostNode = null;

	for (node in costs) {
		const cost = costs[node];
		if (cost < lowestCost && processed.indexOf(node) === -1) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	return lowestCostNode;
};
