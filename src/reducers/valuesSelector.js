import update from 'react-addons-update'
import { flow, clone } from 'lodash'
import { SELECT_BOX, SET_MODE, TOGGLE_CELL_VALUE, LOAD_DAILY_PUZZLE } from '../actions'

const updateShowing = (state) => {
	const wasShowing = state.valuesSelector.show || false,
		  shouldShow = state.mode === 'Player' && state.selectedCells.length > 0;

	if(wasShowing != shouldShow)
		return update(state, { valuesSelector: { show: { $set: shouldShow } } })
	else
		return state;
}

const updateValues = (state) => {
	const firstCell = state.selectedCells[0];
	if(firstCell) {
		const [row, col] = firstCell,
			  values = clone(state.puzzle.cells[row][col].values);

		return update(state, { valuesSelector: { values: { $set: values } } })
	}
	else
		return state;
}

const updateState = flow( updateShowing, updateValues)

export default function valuesSelector(state, action) {
	switch(action.type) {
		case SELECT_BOX:
		case SET_MODE:
		case TOGGLE_CELL_VALUE:
		case LOAD_DAILY_PUZZLE:
			return updateState(state);
		default:
			return state;
	}
}
