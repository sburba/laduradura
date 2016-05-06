import {expect} from 'chai';

import storageToRender, * as module from '../src/converters/storageToRender';
import storage from '../samples/simple-3.storage';
import rendering from '../samples/simple-3.rendering';

describe('storageToRender', function () {
    describe('upperLeftMost', function () {
        it('should pick the upper leftmost cell, no matter the cell order', function () {
            var upperLeftmost = [0,0];
            var cells = [ [1,0], upperLeftmost ];
            expect(module.upperLeftmostCell(cells)).to.equal(upperLeftmost);
        })
    });
    it('converts sample storage to sample render', function () {
        expect(storageToRender(storage)).to.deep.equal(rendering);
    });
});
