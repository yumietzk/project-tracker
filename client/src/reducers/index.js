import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  data: taskReducer,
  error: errorReducer,
});
