Introduction
=

LaDuraDura is a pure JavaScript client implementation of KenKen.  A KenKen puzzle is rendered.  A
user can interact with the puzzle, working toward a solution.  A user can annotate any cell of the
puzzle with one or more candidate values.  If a cell contains only a single candidate value, it
represents the user's answer to the final solution.  The user can revise any cell.
[Here is a reasonably decent implementaion in Flash](http://www.nytimes.com/ref/crosswords/kenken.html?_r=0)

Definitions/Requirements
=

A "puzzle" is a square 2D matrix of "cells" of a fixed extent between 3 and 9.  2 is boring.  So
is 3. 10 or more is feasible, but out of scope.

For a puzzle of extent N, each row or column of the grid must contain each of the digits 1..N
exactly once.   

The cells in the grid are partitioned in to "cages".  Each cage has a corresponding "target" number
and "operator" (e.g. 3-, 5+).  Cells within a cage must share an edge with another cell in the
cage. When rendering a cage, the outline of the cells in the cage is drawn with a thicker border
(when rendering a cell, edges shared with cage members are thin, all other edges are thick).  The
target and operator are drawn (in that order) in the upper left corner of the upper leftmost cell
within the cage.

Targets must be integral values. 

Supported operators are =, +, -, x, /.  = may have only one operand cell.  - and / must have exactly
two operand cells.  + and x can have 2 or more operand cells.

Operator constraint functions
=

* =

    cage cell == target
    
* +

    sum(cage cells) == target

* x

    product(cage cells) == target
    
* -

    abs(some cage cell - other cage cell) == target
    
* /

    max(cage cells) / min(cage cells) == target

## Development
Install nodejs latest from here: https://nodejs.org/en/
run `npm start` in the root of the project directory