import { range } from 'lodash'
import { gridEach } from '../util/grid'

const divSymbol = '\u00F7';

const parse = ( text ) => {
	let current, matrices = {}
	for(let line of text.split(/\r?\n/)) {
		if ( /^[A-Z]/i.test(line) ) {
			current = line;
			matrices[current] = [];
		}
		else {
			matrices[current].push(
				line.split(/\s+/)
					.filter(s => s.length > 0)
					.map(val => /^[0-9]+$/.test(val) ? parseInt(val) : val )
			)
		}
	}

	return matrices;
}

const emptyCells = ( extent ) => 
	range(extent).map( row => 
		range(extent).map( col => ({
			label: '',
			walls: { top: true, right: true, left: true, down: true },
			values: []
		}) )
	)

export default function dailyToRender( text ) {
	let data = parse( text );
	
	let extent = data['A'].length,
		cells = emptyCells( extent );

	gridEach( data['T'], ( target, row, col ) => {
		if(target > 0) { 
			let label = target,
				op = data['S'][row][col];

			switch(op) {
				case 0: 
				case 1:
					break;
				case '/': label += divSymbol; break;
				case '*': label += 'x'; break;
				default: label += op;
			}		

			cells[row][col].label = String(label);
		}
	})

	gridEach( data['V'], (wall, row, col) => {
		cells[row][col].walls.right = wall === 1;
		cells[row][col+1].walls.left = wall === 1;
	})
	gridEach( data['H'], (wall, row, col) => {
		cells[col][row].walls.down = wall === 1;
		cells[col+1][row].walls.top = wall === 1;
	})

	return { extent, cells }
}
