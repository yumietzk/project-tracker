// state = {
//   id: id,
//   isChecked: true/false,
// }

export default (state = [{ isChecked: false, id: null }], action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      // [{}, {}], todos: {id: , value: }
      const ids = action.payload.map((item) => item.todos.id);
      let data = [];
      ids.map((targetid) => {
        const newdata = { isChecked: false, id: targetid };
        data.push(newdata);
      });
      return [...state, ...data];

    case 'CHECK_TODO':
      return [
        ...state,
        {
          isChecked: true,
          id: action.payload,
        },
      ];

    case 'UNCHECK_TODO':
      return [
        ...state,
        {
          isChecked: false,
          id: action.payload,
        },
      ];

    default:
      return state;
  }
};
