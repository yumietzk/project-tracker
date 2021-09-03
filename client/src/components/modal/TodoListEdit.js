import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import TodoEdit from './TodoEdit';
import styles from './TodoListEdit.module.css';

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
