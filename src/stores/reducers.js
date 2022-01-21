/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import Session from './session/reducer';

/**
* Merges the main reducer with the router state and dynamically injected reducers
*/
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    Session,
    ...injectedReducers,
  });
  return rootReducer;
}