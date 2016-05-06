import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleGrid from './components/PuzzleGrid.jsx'
import state from '../samples/simple-3.storage';
import storageToRender from './converters/storageToRender';

var renderingState = storageToRender(state);

ReactDOM.render(
    <div>
        <PuzzleGrid state={renderingState}/>
    </div>,
    document.getElementById('app')
);
