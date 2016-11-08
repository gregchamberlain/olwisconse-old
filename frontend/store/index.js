import { createStore } from 'redux';
import RootReducer from '../reducers';
import RootMiddleware from '../middleware';

const configureStore = initialState => createStore(
  RootReducer,
  initialState,
  RootMiddleware
);

export default configureStore;
