import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
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
import ModalDetail from './modal/ModalDetail';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';

const App = ({ signIn }) => {
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        signIn(user.uid);
      }
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Projects} />
          <PrivateRoute path="/tasks" component={Tasks} />
          <PrivateRoute path="/timemanage" component={TimeManage} />
          <PrivateRoute path="/formcreate" component={ModalCreate} />
          <PrivateRoute path="/formedit/:id" component={ModalEdit} />
          <PrivateRoute path="/detail/:id" component={ModalDetail} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, {
  signIn,
})(App);
