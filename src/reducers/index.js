import reduceReducers from 'reduce-reducers'
import setMode from './setMode'
import selectBox from './selectBox'
import selectedCells from './selectedCells'
import valuesSelector from './valuesSelector'
import toggleCellValue from './toggleCellValue'

const rootReducer = reduceReducers(
	setMode,
	selectBox,
	selectedCells,
	toggleCellValue,
	valuesSelector
);

export default rootReducer;
