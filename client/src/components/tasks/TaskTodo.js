import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions';
import styles from './TaskTodo.module.css';

const TaskTodo = ({ updateTask, data, todo, handleCheck }) => {
  const [checked, setChecked] = useState(todo?.todoChecked);

  // const handleCheck = (id, isChecked) => {
  //   const checkedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, todoChecked: isChecked };
  //     } else {
  //       return { ...todo };
  //     }
  //   });

  //   setTodos(checkedTodos);
  // };

  const onCheck = () => {
    setChecked(!checked);
    handleCheck(todo.id, !checked);

    // const newTodos = data?.todos.map((item) => {
    //   if (item.id === todo?.id) {
    //     return { ...item, todoChecked: checked };
    //   }
    // });

    // updateTask(
    //   data._id,
    //   data.title,
    //   data.date,
    //   data.status,
    //   data.duedate,
    //   data.description,
    //   newTodos
    // );
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

export default connect(null, {
  updateTask,
})(TaskTodo);
