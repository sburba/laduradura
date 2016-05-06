import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';
import state from '../samples/simple-3.rendering';

ReactDOM.render(
    <div>
        {state.cells.map((row) => row.map((cell) => <Box {...cell}/>).concat(<br/>))}
    </div>,
    document.getElementById('app')
);
