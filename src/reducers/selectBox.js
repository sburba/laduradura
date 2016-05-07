import { SELECT_BOX } from '../actions'
import * as cells from './utils/cells' 

const selectBoxForPlayer = (state, action) => {
	let { row, col } = action,
		isSelected = !!state.puzzle.cells[row][col].selected,
		nextState = cells.clearSelection(state);

	if(isSelected) 
		return nextState; 
	else 
		return cells.setSelected(nextState, row, col, true);
	
}

const selectBoxForBuilder = (state, action) => {
	let { row, col } = action,
		selected = !!state.puzzle.cells[row][col].selected;
		
	return cells.setSelected( state, row, col, !selected )
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
