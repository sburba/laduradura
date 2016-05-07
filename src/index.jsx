import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './components/DevTools'
import PuzzleGrid from './components/PuzzleGrid.jsx'
import state from '../samples/simple-3.storage';
import storageToRender from './converters/storageToRender';

var renderingState = storageToRender(state);

renderingState.cells[0][1].values = [2,3];
renderingState.cells[1][2].values = [3];

const store = configureStore({ mode: 'Builder', puzzle: renderingState });

ReactDOM.render(
	<Provider store={store}>
		<div>
			<PuzzleGrid />
			<DevTools />
		</div>
	</Provider>,
    document.getElementById('app')
);
