import { applyMiddleware } from 'redux';
import session from './session';

export default applyMiddleware(
  session
);
