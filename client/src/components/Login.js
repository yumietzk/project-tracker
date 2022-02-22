import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import Landing from './Landing';
import LandingForm from './LandingForm';
import history from '../history';
import styles from './Login.module.css';

const Login = ({ signIn }) => {
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    const { email, password } = values;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      await auth.onAuthStateChanged((user) => {
        signIn(user.uid, user.email);
      });

      history.push('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Landing>
      <h1 className={styles.logo}>Project Tracker</h1>
      <div className={styles.title}>
        <h2>Welcome back to Project Tracker.</h2>
        <p>
          New here?
          <Link to="/signup" className={styles.link}>
            Create an account.
          </Link>
        </p>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <LandingForm onSubmit={onSubmit} label="Login" />
    </Landing>
  );
};

export default connect(null, {
  signIn,
})(Login);
