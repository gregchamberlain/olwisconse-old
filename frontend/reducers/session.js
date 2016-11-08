import { RECEIVE_CURRENT_USER } from '../actions/session';
import update from 'immutability-helper';

const session = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return update(state, { currentUser: { $set: action.user } });
    default:
      return state;
  }
};

export default session;
