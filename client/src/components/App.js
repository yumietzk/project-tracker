import React, { useEffect } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes } from 'react-router-dom';
=======
import { Router, Switch } from 'react-router-dom';
>>>>>>> origin/master
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { auth } from '../firebase';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Projects from './projects/Projects';
import Tasks from './tasks/Tasks';
import TimeManage from './timemanage/TimeManage';
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
    <div>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
=======
      <Router history={history}>
        <Switch>
>>>>>>> origin/master
          <PrivateRoute path="/" exact component={Projects} />
          <PrivateRoute path="/tasks" component={Tasks} />
          <PrivateRoute path="/timemanage" component={TimeManage} />
          <PrivateRoute path="/formcreate" component={ModalCreate} />
          <PrivateRoute path="/formedit/:id" component={ModalEdit} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} />
<<<<<<< HEAD
        </Routes>
      </BrowserRouter>
=======
        </Switch>
      </Router>
>>>>>>> origin/master
    </div>
  );
};

export default connect(null, {
  signIn,
})(App);
