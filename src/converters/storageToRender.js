
const divSymbol = '\u00F7';

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

export default function storageToRender(storageObject) {
    var result = {
        extent: storageObject.extent
    };
    for (let cage of storageObject.cages) {
        var upperLeftmost = upperLeftmostCell(cage.cells);
        
    }
    return result;
}
