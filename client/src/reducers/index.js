import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';
// import todoReducer from './todoReducer';

export default combineReducers({
  data: taskReducer,
  error: errorReducer,
  // todocheck: todoReducer,
});
