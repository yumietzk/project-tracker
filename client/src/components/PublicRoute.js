import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ isSignedIn, component, exact, path }) => {
  return !isSignedIn ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(PublicRoute);
