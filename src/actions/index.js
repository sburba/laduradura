export const SELECT_BOX = 'SELECT_BOX'
export const SET_MODE = 'SET_MODE'
export const TOGGLE_CELL_VALUE = 'TOGGLE_CELL_VALUE'

export const selectBox = (row, col) => ({ type: SELECT_BOX, row, col })
export const setMode = mode => ({ type: SET_MODE, mode })
export const toggleCellValue = value => ({ type: TOGGLE_CELL_VALUE, value }) 
