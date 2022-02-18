import React, { useEffect, useState } from 'react';
import styles from './TodoEdit.module.css';

const TodoListEdit = ({ todo, handleCheck }) => {
  // const { id, value, todoChecked } = todo;
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
