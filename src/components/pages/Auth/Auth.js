import React from 'react';
import './Auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Auth Page</h1>
        <button className="btn btn-danger" onClick={ this.loginClickEvent }>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
