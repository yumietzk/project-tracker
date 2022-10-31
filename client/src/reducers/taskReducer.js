export default function taskReducer(state = { isFetching: false }, action) {
  switch (action.type) {
    case 'CREATE_TASK':
    case 'REQUEST_TASKS':
    case 'REQUEST_TASK':
    case 'UPDATE_TASK':
    case 'DELETE_TASK':
      return { ...state, isFetching: true };

    case 'CREATED_TASK':
    case 'RECEIVED_TASKS':
    case 'UPDATED_TASK':
    case 'DELETED_TASK':
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
}
