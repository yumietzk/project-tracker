export default (state = { isFetching: false }, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isFetching: true };

    case 'CREATE_TASK':
    case 'RECEIVE_TASKS':
    case 'UPDATE_TASK':
    case 'DELETE_TASK':
      return {
        ...state,
        isFetching: false,
        tasks: action.payload,
      };

    case 'RECEIVE_TASK':
      return { ...state, isFetching: false, selectedTask: action.payload };

    // case 'CHECK_TODO':
    //   const checkList = state.tasks.map((task) => task.todos);
    //   checkList.forEach((list) => {
    //     list.map((item) => {
    //       if (item.id === action.payload) {
    //         item.todoChecked = true;
    //       }
    //     });
    //   });

    //   const checkTasks = checkList.map((data, i) => {
    //     return {
    //       ...state.tasks[i],
    //       todos: data,
    //     };
    //   });
    //   return { ...state, isFetching: false, tasks: checkTasks };

    // case 'UNCHECK_TODO':
    //   const uncheckList = state.tasks.map((task) => task.todos);
    //   uncheckList.forEach((list) => {
    //     list.map((item) => {
    //       if (item.id === action.payload) {
    //         item.todoChecked = false;
    //       }
    //     });
    //   });

    //   const uncheckTasks = uncheckList.map((data, i) => {
    //     return {
    //       ...state.tasks[i],
    //       todos: data,
    //     };
    //   });
    //   return { ...state, isFetching: false, tasks: uncheckTasks };

    default:
      return state;
  }
};
