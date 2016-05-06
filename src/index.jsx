import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleGrid from './components/PuzzleGrid.jsx'
import state from '../samples/simple-3.rendering';

ReactDOM.render(
    <PuzzleGrid state={state}/>,
    document.getElementById('app')
);
