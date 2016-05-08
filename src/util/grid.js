import { forEach, noop } from 'lodash'

export const gridEach = ( grid, fn = noop ) =>
	forEach( grid, (row, i) => forEach(row, (cell, j) => fn(cell, i, j, grid) ) )
