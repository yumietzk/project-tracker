export default (
  state = { isError: { status: false, errorMessage: null } },
  action
) => {
  switch (action.type) {
    case 'CREATE_TASK_FAILED':
    case 'RECEIVE_TASKS_FAILED':
    case 'RECEIVE_TASK_FAILED':
    case 'UPDATE_TASK_FAILED':
    case 'DELETE_TASK_FAILED':
    case 'ERROR_CREATED':
      return {
        ...state,
        isError: { status: true, errorMessage: action.payload.message },
      };

    case 'ERROR_CLEARED':
      return {
        ...state,
        isError: { status: false, errorMessage: null },
      };

    default:
      return state;
  }
};
