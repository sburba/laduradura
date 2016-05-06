import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';

ReactDOM.render(
<Box leftIsOpen={false} rightIsOpen={true} topIsOpen={true} bottomIsOpen={true}/>,
    document.getElementById('app')
);
