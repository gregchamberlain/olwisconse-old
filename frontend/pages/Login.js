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
    backgroundColor: '#444',
    // backgroundImage: 'url(https://lh3.googleusercontent.com/fojDxn5BfT7eTFHwGbvpPSjlUQAUBkgzJDzOwuPaOyQZjOIL8IYjcRpOx-kIWnJ8F-AmDjWrPyCR_3DqMXVKGI2PsSQLKOgp_j7tRod41wYe9jDNWof3Z-PJ9hYK5tfioYZ3zbwOOSP7thqqV1bRMicfKFrV7CjmgCkq-EPx6Cp79cB1I4Fw44v74A5Y1wfT5pi_Hd1pRItc-lyX7KOLV4RBWuZyNZiQZ0JhubD5UrXLrCttGYARZ2offCWTgNIuckXRsgVabzvkvgYkO0JjkEGoYqBiftocS0ESWmaKhgMIj6oL38SZX-ReK_GWU6mG_6QueiY7HriqXVx932m_u0t-qbYNyV_6lvHhSD6k68TUiau9xDA5GWUFSPuyPQb96qklux0bZNfvsZ-qd7XsL8WeqllLnKGF4coYTNTRv0djxexhcJ3cslsg1oGakFtYlJP8jvadFDVb1KLASBtnbSNBZnLuH_JAf_mdO1mj-McogyGmFvyBJpolCfUvkgzOxCuChNb_pPXHT-X11W162JptQ_uoN1_S3UPXKz0Hp0X9K-ZaI5uchb4WRxbeuhtwBmKZRykakwOb7zcFnPTG5qBaKDg227lUbTcwlUL3zXhUR3qb=w997-h651-no)',
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
