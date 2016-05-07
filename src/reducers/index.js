import reduceReducers from 'reduce-reducers'
import selectBox from './selectBox'

const rootReducer = reduceReducers(
	selectBox
);

export default rootReducer;
