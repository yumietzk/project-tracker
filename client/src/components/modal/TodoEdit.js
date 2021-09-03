import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import styles from './TodoListEdit.module.css';

const TodoEdit = ({ todo, handleCheck, deleteTodo }) => {
  const [checked, setChecked] = useState(todo?.todoChecked);

  const onCheck = () => {
    setChecked(!checked);
    handleCheck(todo?.id, !checked);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    deleteTodo(id);
  };

  return (
    <div className={styles.todolist}>
      <button className={styles.btn} onClick={(e) => handleDelete(e, todo?.id)}>
        <IoIcons.IoCloseOutline className={styles.icon} />
      </button>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <div key={todo?.id} className={styles.text}>
        {todo?.value}
      </div>
    </div>
  );
};

export default TodoEdit;
