import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import history from '../history';
import Landing from './Landing';
import LandingForm from './LandingForm';
import styles from './SignUp.module.css';

const SignUp = ({ signIn }) => {
  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    const { email, password } = values;

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      await auth.onAuthStateChanged((user) => {
        if (user) {
          signIn(user.uid, user.email);
        }
      });

      history.push('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Landing>
      <h1 className={styles.title}>Sign Up</h1>
      <p className={styles.description}>
        Already have an account?
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </p>

      {error && <p className={styles.error}>{error}</p>}

      <LandingForm onSubmit={onSubmit} label="Sign Up" />
    </Landing>
  );
};

export default connect(null, {
  signIn,
})(SignUp);
