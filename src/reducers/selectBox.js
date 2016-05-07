import update from 'react-addons-update'
import { SELECT_BOX } from '../actions'

const updateSelected = (state, row, col, selected) => 
	update(state, { puzzle: { cells: { [row]: { [col]: { $merge: { selected } } } } } }) 

const clearBoxSelections = (state) => {
	let nextState = state,
		n = state.puzzle.extents;

	for(let i = 0; i < n; i++) {
		for(let j = 0; j < n; j++) {
			if( state.puzzle.cells[i][j].selected )
				nextState = updateSelected( nextState, i, j, false );
		}
	}

	return nextState;
}

const selectBoxForPlayer = (state, action) => {
	let { row, col } = action,
		isSelected = !!state.puzzle.cells[row][col].selected,
		nextState = clearBoxSelections(state);

	if(isSelected) {
		return nextState;
	}
	else {
		throw new Error('Not implemented yet :-/')	
	}
}

const selectBoxForBuilder = (state, action) => {
	let { row, col } = action,
		selected = !!state.puzzle.cells[row][col].selected;

	return updateSelected( state, row, col, !selected );
}

export default function selectBox(state, action) {
	switch(action.type) {
		case SELECT_BOX:
			if(state.mode === 'Player')
				return selectBoxForPlayer(state, action)
			else
				return selectBoxForBuilder(state, action)
			
		default: 
			return state;
	}
}
