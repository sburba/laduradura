import solved from '../src/validators/solved';
import solvedPuzzle from '../samples/simple-3.rendering.solved';
import incorrectlySolvedPuzzle from '../samples/simple-3.rendering.solved-incorrectly';
import puzzle from '../samples/simple-3.storage';
import {expect} from 'chai';

describe('solved', function() {
    it('should succeed if the puzzle is solved', function() {
        expect(solved(puzzle, solvedPuzzle)).to.be.true;
    });

    it('should fail if the puzzle is solved incorrectly', function() {
        expect(solved(puzzle, incorrectlySolvedPuzzle)).to.be.false;
    });
});
