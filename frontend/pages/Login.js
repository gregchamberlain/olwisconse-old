import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions/session';
import { Redirect } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  update = name => e => {
    this.setState({[name]: e.target.value});
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const { username, password } = this.state;
    if (this.props.currentUser) {
      return <Redirect to={{pathname: '/'}} />;
    }
    return (
      <form style={styles.root} onSubmit={this.login}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            style={styles.input}
            onChange={this.update('username')}
            value={username}
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            onChange={this.update('password')}
            value={password}
          />
          <button
            style={{...styles.input, ...{cursor: 'pointer'}}}
          >
            Login
          </button>
      </form>
    );
  }
}

const styles = {
  label: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  input: {
    border: 'none',
    outline: 'none',
    padding: 10,
    borderRadius: 2,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: '#444',
    backgroundImage: 'url(https://scontent-mia1-2.xx.fbcdn.net/v/t34.0-12/14958813_1235835326439676_2141494212_n.jpg?oh=bb78822f00c2a7cbd43570557e437223&oe=58234C99)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(ACTIONS.login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
