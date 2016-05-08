import reduceReducers from 'reduce-reducers'
import setMode from './setMode'
import selectBox from './selectBox'
import selectedCells from './selectedCells'
import valuesSelector from './valuesSelector'
import toggleCellValue from './toggleCellValue'
import loadDailyPuzzle from './loadDailyPuzzle'

const rootReducer = reduceReducers(
	setMode,
	selectBox,
	loadDailyPuzzle,
	selectedCells,
	toggleCellValue,
	valuesSelector
);

export default rootReducer;
