import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';

var openBorders = {
    left: false,
    right: false,
    top: true,
    bottom: true
};

ReactDOM.render(
<Box openBorders={openBorders}/>,
    document.getElementById('app')
);
