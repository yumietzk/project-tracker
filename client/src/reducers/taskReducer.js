// const state ={
//   isFetching: false,
//   tasks: []
// }

export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isFetching: true };

    case 'RECEIVE_TASKS':
      return { ...state, isFetching: false, tasks: action.payload };

    case 'DELETE_TASK':
      // const task = state.data.filter((item) => item.id !== action.payload);
      return { ...state, isFetching: false, tasks: action.payload };

    default:
      return state;
  }
};
