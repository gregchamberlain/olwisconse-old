import { LOGIN, LOGOUT } from '../actions/session';

const session = store => next => action => {
  switch (action.type) {
    case LOGIN:
      console.log('logging in', action.user);
      return next(action);
    case LOGOUT:
      console.log('logging out');
      return next(action);
    default:
      return next(action);
  }
};

export default session;
