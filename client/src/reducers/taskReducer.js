export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isFetching: true };

    case 'CREATE_TASK':
    case 'RECEIVE_TASKS':
    case 'UPDATE_TASK':
    case 'DELETE_TASK':
      const data = action.payload.data.filter(
        (data) => data.userId === action.payload.userId
      );

      return {
        ...state,
        isFetching: false,
        tasks: data,
      };

    case 'RECEIVE_TASK':
      return { ...state, isFetching: false, selectedTask: action.payload };

    default:
      return state;
  }
};
