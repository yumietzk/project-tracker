import React, { useState } from 'react';
import styles from './TaskTodo.module.css';

const TaskTodo = ({ todo, handleCheck }) => {
  const [checked, setChecked] = useState(todo?.todoChecked);

  const onCheck = () => {
    setChecked(!checked);
    handleCheck(todo.id, !checked);
  };

  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <p className={styles.text}>{todo?.value}</p>
    </div>
  );
};

export default TaskTodo;
