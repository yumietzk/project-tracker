import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
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
import { AuthProvider } from '../context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
