import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import styles from './SignUp.module.css';

const SignUp = ({ signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      const userSignIn = await auth.onAuthStateChanged((user) => {
        signIn(user.uid);
      });
      userSignIn();

      history.push('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className={styles.signup}>
      <h1 className={styles.title}>Sign Up</h1>
      <p className={styles.description}>
        Already have an account?
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </p>
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
        <button className={styles.btn}>Sign up</button>
      </form>
    </div>
  );
};

export default connect(null, {
  signIn,
})(SignUp);
