import update from 'react-addons-update'
import { SET_MODE } from '../actions'
import { clearSelection } from './utils/cells'

export default function toggleMode(state, event) {
	switch(event.type) {
		case SET_MODE:
			let nextState = clearSelection(state);
			return update(nextState, { mode: { $set: event.mode } })
		default:
			return state;
	}
}
