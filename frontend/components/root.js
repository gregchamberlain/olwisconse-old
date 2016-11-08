/*eslint-disable import/no-unresolved*/
import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';
import { Provider } from 'react-redux';

import LoginPage from '../pages/Login';

const AuthExample = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
          <Match pattern="/" exactly render={props => (
            store.getState().session.currentUser ? (
              <div>Hello {store.getState().session.currentUser.username}!</div>
            ) : (
              <LoginPage />
            )
          )}/>
        </div>
    </Router>
  </Provider>
);

export default AuthExample
