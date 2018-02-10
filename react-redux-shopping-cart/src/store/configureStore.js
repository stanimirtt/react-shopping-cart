import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const configureStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
