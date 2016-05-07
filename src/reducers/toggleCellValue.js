import update from 'react-addons-update'
import { without, indexOf } from 'lodash'
import { TOGGLE_CELL_VALUE } from '../actions'

const updateValues = (state, row, col, op) =>
	update(state, { puzzle: { cells: { [row]: { [col]: { values: op } } } } } )

const updateCell = (state, action) => {
	const firstCell = state.selectedCells[0];

	if(firstCell && state.mode == 'Player') {
		let [row, col] = firstCell,
			values = state.puzzle.cells[row][col].values,
			op =  indexOf(values, action.value) >= 0 ?
				{ $set: without(values, action.value) } :
				{ $push: [action.value] };

		return updateValues(state, row, col, op)	
	}
	else
		return state;
}

export default function toggleCellValue(state, action) {
	switch(action.type) {
		case TOGGLE_CELL_VALUE:
			return updateCell(state, action);	
		default:
			return state;
	}
}
