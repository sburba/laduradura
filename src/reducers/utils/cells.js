import update from 'react-addons-update'

export const setSelected = (state, row, col, selected) => 
	update(state, { puzzle: { cells: { [row]: { [col]: { $merge: { selected } } } } } }) 

export const clearSelection = (state) => {
	let nextState = state,
		n = state.puzzle.extent;

	for(let i = 0; i < n; i++) {
		for(let j = 0; j < n; j++) {
			if( state.puzzle.cells[i][j].selected )
				nextState = setSelected( nextState, i, j, false );
		}
	}

	return nextState;
}
