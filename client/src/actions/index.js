import axios from 'axios';

export const createTask =
  (title, date, status, duedate, description, todos) => async (dispatch) => {
    try {
      const response = await axios.post('/api/tasks', {
        title,
        date,
        status,
        duedate,
        description,
        todos,
      });

      dispatch({
        type: 'CREATE_TASK',
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'RECEIVE_DATA_FAILED',
        payload: err.response,
      });
    }
  };

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch({ type: 'REQUEST_DATA' });

    const response = await axios.get('/api/tasks');
    dispatch({ type: 'RECEIVE_TASKS', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: err.response,
    });
  }
};

export const fetchTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'REQUEST_DATA' });

    const response = await axios.get(`/api/tasks/${id}`);
    dispatch({ type: 'RECEIVE_TASK', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: err.response,
    });
  }
};

export const updateTask =
  (id, title, date, status, duedate, description, todos) =>
  async (dispatch) => {
    try {
      const response = await axios.patch(`/api/tasks/${id}`, {
        title,
        date,
        status,
        duedate,
        description,
        todos,
      });

      dispatch({ type: 'UPDATE_TASK', payload: response.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'RECEIVE_DATA_FAILED',
        payload: err.response,
      });
    }
  };

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'REQUEST_DATA' });

    const response = await axios.delete(`/api/tasks/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: err.response,
    });
  }
};

// export const checkTodo = (id) => async (dispatch) => {
//   return {
//     type: 'CHECK_TODO',
//     payload: id,
//   };
// };

// export const uncheckTodo = (id) => {
//   return {
//     type: 'UNCHECK_TODO',
//     payload: id,
//   };
// };
