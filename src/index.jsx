import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';
import state from '../samples/simple-3.rendering';

var openBorders = {
    left: false,
    right: false,
    top: true,
    bottom: true
};

ReactDOM.render(
    <Box state={state.cells[0][0]}/>,
    document.getElementById('app')
);
