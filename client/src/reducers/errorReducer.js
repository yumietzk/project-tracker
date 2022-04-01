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
      return {
        ...state,
        isError: { status: true, errorMessage: action.payload.message },
      };

    default:
      return state;
  }
};
