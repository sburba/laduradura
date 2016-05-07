import loadPuzzle from './loadPuzzle'

export const LOAD_DAILY_PUZZLE = 'LOAD_DAILY_PUZZLE'

export const loadDailyPuzzle = difficulty => (dispatch, getState) => {
	loadPuzzle(difficulty)
		.then( puzzle => dispatch({ type: LOAD_DAILY_PUZZLE, puzzle }) )
}
