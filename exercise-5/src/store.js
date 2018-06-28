//
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default (options = {}) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger),
  );

  return store;
};