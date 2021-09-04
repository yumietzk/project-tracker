import React from 'react';
import TodoEdit from './TodoEdit';

const TodoListEdit = ({ todos, handleCheck, deleteTodo }) => {
  if (!todos || todos.length === 0) return null;

  return todos?.map((todo, i) => {
    return (
      <TodoEdit
        todo={todo}
        handleCheck={handleCheck}
        deleteTodo={deleteTodo}
        key={i}
      />
    );
  });
};

export default TodoListEdit;
