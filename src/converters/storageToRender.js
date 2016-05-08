import _ from 'lodash';

const divSymbol = '\u00F7';
const multSymbol = 'x';

/** 
 * Determine the upper leftmost cell from a collection
 */
export function upperLeftmostCell(cells) {
    var minRow;
    for (let cell of cells) {
        minRow = minRow === undefined
            ? cell[0]
            : Math.min(minRow, cell[0]);
    }
    var result;
    for (let cell of cells) {
        if (cell[0] === minRow) {
            if ((result === undefined)
                || (cell[1] < result[1])) {
                result = cell;
            }
        }
    }
    return result;
}

export function cageLabel(cage) {
    var result = '' + cage.target;
    switch (cage.operator) {
    case '=':
        break;
    case '/':
        result += divSymbol;
        break;
	case '*':
		result += multSymbol;
		break;
    default:
        result += cage.operator;
    }
    return result;
}

export function inCells(cells, row, column) {
    for (let cell of cells) {
        if ((cell[0] == row)
            && (cell[1] == column)) {
            return true;
        }
    }
    return false;
}

export default function storageToRender(storageObject) {
    var result = {
        extent: storageObject.extent
    };
    result.cells = _.range(result.extent).map( () => new Array(result.extent) );
    for (let cage of storageObject.cages) {
        var upperLeftmost = upperLeftmostCell(cage.cells);
        for (let cell of cage.cells) {
            var cellContents = {
                label: '',
                walls: {
                    top: true,
                    right: true,
                    down: true,
                    left: true
                },
                values: []
            };
            if (cell === upperLeftmost) {
                cellContents.label = cageLabel(cage);
            }
            var row = cell[0];
            var column = cell[1];
            for (let neighbor of [
                { 
                    direction: "top",
                    offset: [-1,0]
                },
                { 
                    direction: "right",
                    offset: [0,1]
                },
                { 
                    direction: "down",
                    offset: [1,0]
                },
                { 
                    direction: "left",
                    offset: [0,-1]
                }]) {
                if (inCells(cage.cells, row + neighbor.offset[0], column + neighbor.offset[1])) {
                    cellContents.walls[neighbor.direction] = false;
                }
            }
            result.cells[row][column] = cellContents;
        }
    }
    return result;
}
