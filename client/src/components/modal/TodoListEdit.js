import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import styles from './TodoListEdit.module.css';

const TodoListEdit = ({ todos, onDelete }) => {
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: '',
  // });
  const [checked, setChecked] = useState(false);

  const onCheck = () => {
    setChecked(!checked);
  };

  if (!todos) return null;

  return todos.map((todo, i) => {
    return (
      <div key={i} className={styles.todolist}>
        <button className={styles.btn} onClick={(e) => onDelete(e, todo.id)}>
          <IoIcons.IoCloseOutline className={styles.icon} />
        </button>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onCheck}
        />
        <div key={todo.id} className={styles.text}>
          {todo.value}
        </div>
      </div>
    );
  });
};

export default TodoListEdit;
