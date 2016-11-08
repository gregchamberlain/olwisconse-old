/*eslint-disable import/no-unresolved*/
import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';
import { Provider } from 'react-redux';

import LoginPage from '../pages/Login';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    cb()
    setTimeout(cb, 100) // weird bug if async?
  }
}

////////////////////////////////////////////////////////////
const AuthExample = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
          <Match pattern="/login" component={LoginPage}/>
          <MatchWhenAuthorized pattern="/" component={() => <div>This is the protected page</div>}/>
        </div>
    </Router>
  </Provider>
);

////////////////////////////////////////////////////////////
const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} exactly render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

////////////////////////////////////////////////////////////
const Protected = () => <h3>Protected</h3>
const Public = () => <h3>Public</h3>

////////////////////////////////////////////////////////////
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { redirectToReferrer } = this.state

    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'}/>
        )}
        {from && (
          <p>
            You must log in to view the page at
            <code>{from.pathname}</code>
          </p>
        )}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default AuthExample
