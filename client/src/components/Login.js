import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import history from '../history';
import styles from './Login.module.css';

const Login = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

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
    <div className={styles.login}>
      <div className={styles['login-left']}></div>
      <div className={styles['login-right']}>
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
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.input}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.inputbox}
              name="email"
              type="email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.inputbox}
              name="password"
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.btn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, {
  signIn,
})(Login);
