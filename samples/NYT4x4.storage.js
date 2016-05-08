export default {
	extent: 4,
	cages: [ {
			target: 3,
			operator: '-',
			cells: [[0,0], [1,0]]
		}, {
			target: 4,
			operator: '=',
			cells: [[0,1]]
		}, {
			target: 1,
			operator: '-',
			cells: [[0,2], [0,3]]
		}, {
			target: 9,
			operator: '*',
			cells: [[1,1], [1,2], [2,2]]
		}, { 
			target: 2,
			operator: '=',
			cells: [[1,3]]
		}, { 
			target: 2,
			operator: '/',
			cells: [[2,0], [2,1]]
		}, {
			target: 3,
			operator: '-',
			cells: [[2,3], [3,3]]
		}, {
			target: 9,
			operator: '+',
			cells: [[3,0], [3,1], [3,2]]
		}
	]
}
