import { LOGIN, LOGOUT, receiveCurrentUser } from '../actions/session';
import axios from 'axios';

const session = ({ dispatch }) => next => action => {
  switch (action.type) {
    case LOGIN:
      axios.post('/api/session', {
        user: action.user
      }).then(resp => {
        dispatch(receiveCurrentUser(resp.data));
        console.log(resp.data);
      }).catch(err => {
        console.log(err);
      });
      return next(action);
    case LOGOUT:
      console.log('logging out');
      return next(action);
    default:
      return next(action);
  }
};

export default session;
