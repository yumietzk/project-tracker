export default (
  state = { isError: { status: false, errorMessage: null } },
  action
) => {
  switch (action.type) {
    case 'RECEIVE_DATA_FAILED':
      return {
        ...state,
        isError: { status: true, errorMessage: action.payload.message },
      };

    default:
      return state;
  }
};
