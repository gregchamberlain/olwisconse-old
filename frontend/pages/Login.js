import React from 'react';

const Login = () => (
  <div style={styles.root}>
      <label style={styles.label}>Username</label>
      <input type="text" style={styles.input}/>
      <label style={styles.label}>Password</label>
      <input type="password" style={styles.input}/>
      <input type="submit" />
  </div>
);

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
    backgroundImage: 'url(https://lh3.googleusercontent.com/fojDxn5BfT7eTFHwGbvpPSjlUQAUBkgzJDzOwuPaOyQZjOIL8IYjcRpOx-kIWnJ8F-AmDjWrPyCR_3DqMXVKGI2PsSQLKOgp_j7tRod41wYe9jDNWof3Z-PJ9hYK5tfioYZ3zbwOOSP7thqqV1bRMicfKFrV7CjmgCkq-EPx6Cp79cB1I4Fw44v74A5Y1wfT5pi_Hd1pRItc-lyX7KOLV4RBWuZyNZiQZ0JhubD5UrXLrCttGYARZ2offCWTgNIuckXRsgVabzvkvgYkO0JjkEGoYqBiftocS0ESWmaKhgMIj6oL38SZX-ReK_GWU6mG_6QueiY7HriqXVx932m_u0t-qbYNyV_6lvHhSD6k68TUiau9xDA5GWUFSPuyPQb96qklux0bZNfvsZ-qd7XsL8WeqllLnKGF4coYTNTRv0djxexhcJ3cslsg1oGakFtYlJP8jvadFDVb1KLASBtnbSNBZnLuH_JAf_mdO1mj-McogyGmFvyBJpolCfUvkgzOxCuChNb_pPXHT-X11W162JptQ_uoN1_S3UPXKz0Hp0X9K-ZaI5uchb4WRxbeuhtwBmKZRykakwOb7zcFnPTG5qBaKDg227lUbTcwlUL3zXhUR3qb=w997-h651-no)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

export default Login;