import axios from 'axios';

export const createTask =
  (title, date, status, duedate, description) => async (dispatch) => {
    console.log(title, date);
    try {
      // dispatch({ type: 'REQUEST_DATA' });

      const response = await axios.post('/api/tasks', {
        title,
        date,
        status,
        duedate,
        description,
      });

      console.log(response);
      // dispatch({ type: 'MOVIE_NOWPLAYING', payload: response.data.results });
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

    console.log(response.data); // [{id: , title: }, {}...]
    // console.log(response.data[0]._id);
    // console.log(typeof response.data);
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

    console.log(response.data); // [{id: , title: }]
    dispatch({ type: 'RECEIVE_TASK', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: err.response,
    });
  }
};

// export const updateTask = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: 'REQUEST_DATA' });

//     const response = await axios.put('/api/tasks', { id });

//     // サーバから改めてアプデしたデータを送られている
//     console.log(response.data); // {id: , title: }
//     dispatch({ type: 'RECEIVE_TASKS', payload: response.data });
//   } catch (err) {
//     console.log(err);
//     dispatch({
//       type: 'RECEIVE_DATA_FAILED',
//       payload: err.response,
//     });
//   }
// };

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'REQUEST_DATA' });

    // const response = await axios({
    //   method: 'delete',
    //   url: '/api/tasks',
    //   data: {
    //     id,
    //   },
    // });

    const response = await axios.delete(`/api/tasks/${id}`);

    // サーバから改めてアプデしたデータを送られている
    console.log(response.data); // {id: , title: }
    dispatch({ type: 'DELETE_TASK', payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'RECEIVE_DATA_FAILED',
      payload: err.response,
    });
  }
};
