import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../components/DevTools';

export default function configureStore(initialState = {}) {
	const store = createStore(
		rootReducer, 
		initialState, 
		compose( 
			applyMiddleware(thunk), 
			DevTools.instrument()
		)
	);

	if(module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer);
		})
	}

	return store;
}
