export default (
  state = { isError: { status: false, error: null } },
  action
) => {
  switch (action.type) {
    case 'RECEIVE_DATA_FAILED':
      return { ...state, isError: { status: true, error: action.payload } };

    default:
      return state;
  }
};
