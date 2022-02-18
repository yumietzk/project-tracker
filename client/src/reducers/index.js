import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  data: taskReducer,
  error: errorReducer,
  form: formReducer,
});
