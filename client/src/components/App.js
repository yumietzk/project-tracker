import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Projects from './Projects';
import ToDo from './ToDo';
import TimeManage from './TimeManage';
import Modal from './modal/Modal';
import SignUp from './SignUp';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/" exact component={Projects} />
            <PrivateRoute path="/todo" component={ToDo} />
            <PrivateRoute path="/timemanage" component={TimeManage} />
            <PrivateRoute path="/formcreate" component={Modal} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
