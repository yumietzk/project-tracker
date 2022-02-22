import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ children, isSignedIn }) => {
  return !isSignedIn ? children : <Navigate to="/" />;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(PublicRoute);
