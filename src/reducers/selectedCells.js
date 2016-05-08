import update from 'react-addons-update'
import { SELECT_BOX, SET_MODE, LOAD_DAILY_PUZZLE } from '../actions'

const getSelectedCells = (state) => {
	const cells = [],
		  n = state.puzzle.extent;

	for(let i = 0; i < n; i++) {
		for(let j = 0; j < n; j++) {
			if(state.puzzle.cells[i][j].selected ) 
				cells.push( [i,j] ) 	
		}
	}

	return update(state, { selectedCells: { $set: cells } });
}

export default function selectedCells(state, action) {
	switch(action.type) {
		case SELECT_BOX:
		case SET_MODE:
		case LOAD_DAILY_PUZZLE: 
			return getSelectedCells(state);
		default:
			return state;
	}
}
