import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { auth } from '../firebase';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import styles from './App.module.css';

const App = ({ signIn }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        signIn(user.uid, user.email);
      }
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className={`${isDarkMode && styles.main}`}>
                <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(null, {
  signIn,
})(App);
