import React from 'react';
import * as IoIcons from 'react-icons/io5';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDelete }) => {
  if (!todos) return null;

  return todos.map((todo, i) => {
    return (
      <div key={i} className={styles.todolist}>
        <button className={styles.btn} onClick={(e) => onDelete(e, todo.id)}>
          <IoIcons.IoCloseOutline className={styles.icon} />
        </button>
        <div key={todo.id} className={styles.text}>
          {todo.value}
        </div>
      </div>
    );
  });
};

export default TodoList;
