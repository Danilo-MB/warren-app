/**
 * Create the store with dynamic reducers
 */

import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./redux/reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}