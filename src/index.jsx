import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './components/DevTools'
import App from './components/App'
import state from '../samples/simple-3.storage';
import storageToRender from './converters/storageToRender';

var renderingState = storageToRender(state);

renderingState.cells[0][1].values = [2,3];
renderingState.cells[1][2].values = [3];

//TODO use memoized mappings instead of storing derived data
const store = configureStore({ 
	mode: 'Player',
	selectedCells: [],
	valuesSelector: { show: false, values: [] },
	puzzle: renderingState 
});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<App />
			<DevTools visibleOnLoad="false" />
		</div>
	</Provider>,
    document.getElementById('app')
);
