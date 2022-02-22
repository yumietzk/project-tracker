import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isSignedIn }) => {
  return isSignedIn ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
