import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { auth } from '../firebase';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Projects from '../routes/projects/Projects';
import Tasks from '../routes/tasks/Tasks';
import TimeManage from '../routes/timemanage/TimeManage';
import ModalCreate from './modal/ModalCreate';
import ModalEdit from './modal/ModalEdit';
import SignUp from './SignUp';
import Login from './Login';
import history from '../history';
import './App.css';

const App = ({ signIn }) => {
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
    // <div>
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
          path="/"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route
          path="tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
        <Route
          path="timemanage"
          element={
            <PrivateRoute>
              <TimeManage />
            </PrivateRoute>
          }
        />
        {/* 
          <PrivateRoute path="/formcreate" component={ModalCreate} />
          <PrivateRoute path="/formedit/:id" component={ModalEdit} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} /> */}
      </Routes>
    </BrowserRouter>
    // </div>
  );
};

export default connect(null, {
  signIn,
})(App);
