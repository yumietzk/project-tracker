import axios from 'axios';

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};

export const createTask =
  (title, date, status, duedate, description, todos) =>
  async (dispatch, getState) => {
    const { userId } = getState().auth;

    try {
      const response = await axios.post('/api/tasks', {
        title,
        date,
        status,
        duedate,
        description,
        todos,
        userId,
      });

      dispatch({
        type: 'CREATE_TASK',
        payload: { data: response.data, userId: userId },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'RECEIVE_DATA_FAILED',
        payload: {
          message: 'Something went wrong. Could not create a new project.',
        },
      });
    }
  };

export const fetchTasks = () => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;

    dispatch({ type: 'REQUEST_DATA' });

    const response = await axios.get('/api/tasks');
    dispatch({
      type: 'RECEIVE_TASKS',
      payload: { data: response.data, userId: userId },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: {
        message: 'Something went wrong. Could not get data.',
      },
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
      payload: {
        message: 'Something went wrong. Could not get data.',
      },
    });
  }
};

export const updateTask =
  (id, title, date, status, duedate, description, todos) =>
  async (dispatch, getState) => {
    const { userId } = getState().auth;

    try {
      const response = await axios.patch(`/api/tasks/${id}`, {
        title,
        date,
        status,
        duedate,
        description,
        todos,
      });

      dispatch({
        type: 'UPDATE_TASK',
        payload: { data: response.data, userId: userId },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'RECEIVE_DATA_FAILED',
        payload: {
          message: 'Something went wrong. Could not update data.',
        },
      });
    }
  };

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;

    dispatch({ type: 'REQUEST_DATA' });

    const response = await axios.delete(`/api/tasks/${id}`);
    dispatch({
      type: 'DELETE_TASK',
      payload: { data: response.data, userId: userId },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: {
        message: 'Something went wrong. Could not delete a project.',
      },
    });
  }
};
