export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
