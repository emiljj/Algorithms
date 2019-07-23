const findLowestCostNode = require('./findLowestCostNode');
const getGraphDirectionFromTable = require('./getGraphDirectionFromTable');
const getLeadTime = require('../utils/getLeadTime');

const graph = {};
const costs = {};
const parents = {};
const processed = [];

// Graph
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['finish'] = 1;
graph['a']['b'] = 3;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['finish'] = 5;

graph['finish'] = {};

// Costs
costs['a'] = 6;
costs['b'] = 2;
costs['finish'] = Infinity;

// Parents
parents['a'] = 'start';
parents['b'] = 'start';
parents['finish'] = null;

getLeadTime(() => {
	let node = findLowestCostNode(costs, processed);
	while (node !== null) {
		const cost = costs[node];
		const neighbors = graph[node];
		for (neighbor in neighbors) {
			const newCost = cost + neighbors[neighbor];
			if (costs[neighbor] > newCost) {
				costs[neighbor] = newCost;
				parents[neighbor] = node;
			}
		}
		processed.push(node);
		node = findLowestCostNode(costs, processed);
	}
}, 'FindLowestCosts');

console.log('Result: ', getGraphDirectionFromTable(parents, 'start', graph));
