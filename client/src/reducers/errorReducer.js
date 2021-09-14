export default (
  state = { isError: { status: false, errorMessage: null } },
  action
) => {
  switch (action.type) {
    case 'CREATE_DATA_FAILED':
    case 'RECEIVE_DATA_FAILED':
    case 'UPDATE_DATA_FAILED':
    case 'DELETE_DATA_FAILED':
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
