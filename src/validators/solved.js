import _ from "lodash";

export default function(puzzle, gameState) {
    function cageIsValid(cage) {
        var values = cage.cells.map(toCellValue);
        var result = applyCageOperation(cage.operator, values);
        return cage.target === result;
    }

    function applyCageOperation(operator, values) {
        switch (operator) {
            case '-':
                if (values.length !== 2) {
                    throw new Error('Cannot have a subtraction operator with anything but two cells');
                }
                return Math.abs(values[0] - values[1]);
            case '+':
                return values.reduce((first, second) => first + second);
            case '÷':
                if (values.length !== 2) {
                    throw new Error('Cannot have a division operator with anything but two cells');
                }
                return Math.max(values[0] / values[1], values[1] / values[0]);
            case '×':
                return values.reduce((first, second) => first * second);
            default:
                throw new Error('Unknown operator ' + operator);
        }
    }

    function isValidNumberSet(values) {
        return _.range(values.length).every((number) => values.indexOf(number) > -1)
    }

    function cellGroupToValueGroup(cellGroup) {
        return cellGroup.map((cell) => cell.values[0]);
    }

    function getColumns(gameState) {

        function makeArray(rows, columns) {
            var arr = [];
            for(let i = 0; i < rows; i++) {
                arr[i] = new Array(columns);
            }
            return arr;
        }
        
        var columns = makeArray(gameState.cells.length, gameState.cells[0].length);
        for (let y = 0; y < gameState.cells.length; y++) {
            var row = gameState.cells[y];
            for (let x = 0; x < row.length; x++) {
                columns[y][x] = gameState.cells[x][y];
            }
        }
        return columns;
    }

    function getRows(gameState) {
        return gameState.cells;
    }

    function toCellValue(cell) {
        var column = cell[0];
        var row = cell[1];

        return gameState.cells[row][column];
    }

    let rowsAreValid = getRows(gameState).map(cellGroupToValueGroup).every(isValidNumberSet);
    let columnsAreValid = getColumns(gameState).map(cellGroupToValueGroup).every(isValidNumberSet);
    let cagesAreValid = puzzle.cages.every(cageIsValid);
    return rowsAreValid && columnsAreValid && cagesAreValid;
}