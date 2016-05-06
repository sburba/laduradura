import {expect} from 'chai';

import * as module from '../src/converters/storageToRender';

describe('storageToRender', function () {
    describe('upperLeftMost', function () {
        it('should pick the upper leftmost cell, no matter the cell order', function () {
            var upperLeftmost = [0,0];
            var cells = [ [1,0], upperLeftmost ];
            expect(module.upperLeftmostCell(cells)).to.equal(upperLeftmost);
        })
    });
});
