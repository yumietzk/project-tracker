import React, { useEffect, useState } from 'react';
import styles from './TodoListEdit.module.css';

const TodoListEdit = ({ todo, handleCheck }) => {
  const [checked, setChecked] = useState(todo?.todoChecked);

  useEffect(() => {
    setChecked(todo?.todoChecked);
  }, [todo]);

  const onCheck = () => {
    setChecked(!checked);
    handleCheck(todo?.id, !checked);
  };

  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={onCheck}
    />
  );
};

export default TodoListEdit;
