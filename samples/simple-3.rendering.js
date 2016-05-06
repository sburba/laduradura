export default {
	extent: 3,
	cells: [
		[{ 
			label: '2-', 
			walls: { top: true, right: false, down: true, left: true },
			values: []
		 }, {
             label: '',
			walls: { top: true, right: true, down: true, left: false },
			values: []
		 }, {
			label: '2',
			walls: { top: true, right: true, down: true, left: true },
			values: []
		 }],
		[{
			label: '2\u00F7',
			walls: { top: true, right: true, down: false, left: true },
			values: []
		}, {
			label: '3\u00F7',
			walls: { top: true, right: false, down: true, left: true },
			values: []
		}, {
            label: '',
			walls: { top: true, right: true, down: true, left: false },
			values: []
		}],
		[{
            label: '',
			walls: { top: false, right: true, down: true, left: true },
			values: []
		}, {
			label: '1-',
			walls: { top: true, right: false, down: true, left: true },
			values: []
		}, {
            label: '',
			walls: { top: true, right: true, down: true, left: false },
			values: []
		}]
	]
}
