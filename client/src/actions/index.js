import axios from 'axios';
import history from '../history';

export const signIn = (userId, email) => {
  return {
    type: 'SIGN_IN',
    payload: {
      userId: userId,
      email: email,
    },
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
    try {
      dispatch({ type: 'CREATE_TASK' });

      const { userId } = getState().auth;
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
        type: 'CREATED_TASK',
        payload: { data: response.data, userId: userId },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'CREATE_TASK_FAILED',
        payload: {
          message:
            'Something went wrong. Could not create a new project. Please try again.',
        },
      });
    }
  };

export const fetchTasks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'REQUEST_TASKS' });
    // これ意味あるの？
    dispatch({ type: 'ERROR_CLEARED' });

    const { userId } = getState().auth;
    const response = await axios.get('/api/tasks');

    dispatch({
      type: 'RECEIVED_TASKS',
      payload: { data: response.data, userId: userId },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_TASKS_FAILED',
      payload: {
        message: 'Something went wrong. Could not get data. Please try again.',
      },
    });
  }
};

export const fetchTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'REQUEST_TASK' });
    dispatch({ type: 'ERROR_CLEARED' });

    const response = await axios.get(`/api/tasks/${id}`);
    dispatch({ type: 'RECEIVE_TASK', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_TASK_FAILED',
      payload: {
        message: 'Something went wrong. Could not get data. Please try again.',
      },
    });
  }
};

export const updateTask =
  (id, title, date, status, duedate, description, todos) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: 'UPDATE_TASK' });
      dispatch({ type: 'ERROR_CLEARED' });

      const { userId } = getState().auth;
      const response = await axios.patch(`/api/tasks/${id}`, {
        title,
        date,
        status,
        duedate,
        description,
        todos,
      });

      dispatch({
        type: 'UPDATED_TASK',
        payload: { data: response.data, userId: userId },
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'UPDATE_TASK_FAILED',
        payload: {
          message:
            'Something went wrong. Could not update data. Please try again.',
        },
      });
    }
  };

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'DELETE_TASK' });
    dispatch({ type: 'ERROR_CLEARED' });

    const { userId } = getState().auth;

    const response = await axios.delete(`/api/tasks/${id}`);
    dispatch({
      type: 'DELETED_TASK',
      payload: { data: response.data, userId: userId },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'DELETE_TASK_FAILED',
      payload: {
        message:
          'Something went wrong. Could not delete a project. Please try again.',
      },
    });
  }
};

// ここからのアクション必要？なに？
export const createError = () => {
  history.push(`/formcreate`);

  return {
    type: 'ERROR_CREATED',
    payload: {
      message:
        'Something went wrong. Could not create a new project. Please check if you fill in all required fields: "Title", "Date created", "Status", "Due Date", "Description',
    },
  };
};

export const createEditError = (id) => {
  history.push(`/formedit/${id}`);

  return {
    type: 'ERROR_CREATED',
    payload: {
      message:
        'Something went wrong. Could not update the project. Please check if you fill in all required fields: "Title", "Date created", "Status", "Due Date", "Description',
    },
  };
};

export const clearError = () => {
  history.push(`/formcreate`);

  return {
    type: 'ERROR_CLEARED',
  };
};

export const clearEditError = (id) => {
  history.push(`/formedit/${id}`);

  return {
    type: 'ERROR_CLEARED',
  };
};
