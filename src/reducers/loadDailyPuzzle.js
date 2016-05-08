import update from 'react-addons-update'
import { LOAD_DAILY_PUZZLE } from '../actions'

export default function loadDailyPuzzle(state, action) {
	switch(action.type) {
		case LOAD_DAILY_PUZZLE: 
			return update(state, { puzzle: { $set: action.puzzle } }) 
		default:
			return state;
	}
}
