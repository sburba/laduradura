export default {
    extent: 3,
    cells: [
        [{
            label: '2-',
            walls: { top: true, right: false, down: true, left: true },
            values: [3]
        }, {
            label: '',
            walls: { top: true, right: true, down: true, left: false },
            values: [1]
        }, {
            label: '2',
            walls: { top: true, right: true, down: true, left: true },
            values: [2]
        }],
        [{
            label: '2\u00F7',
            walls: { top: true, right: true, down: false, left: true },
            values: [2]
        }, {
            label: '3\u00F7',
            walls: { top: true, right: false, down: true, left: true },
            values: [1]
        }, {
            label: '',
            walls: { top: true, right: true, down: true, left: false },
            values: [1]
        }],
        [{
            label: '',
            walls: { top: false, right: true, down: true, left: true },
            values: [1]
        }, {
            label: '1-',
            walls: { top: true, right: false, down: true, left: true },
            values: [2]
        }, {
            label: '',
            walls: { top: true, right: true, down: true, left: false },
            values: [3]
        }]
    ]
}


