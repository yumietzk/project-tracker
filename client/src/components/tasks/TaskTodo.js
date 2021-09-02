import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkTodo, uncheckTodo } from '../../actions';
import styles from './TaskTodo.module.css';

const TaskTodo = ({ checkTodo, uncheckTodo, todo, id, isChecked }) => {
  const [checked, setChecked] = useState(
    isChecked ? isChecked.isChecked : false
  );

  // if (isChecked) setChecked(isChecked.isChecked);

  // useEffect(() => {
  //   if (checked) {
  //     uncheckTodo(id);
  //   }

  //   if (!checked) {
  //     checkTodo(id);
  //   }
  // }, []);

  const handleChecked = () => {
    if (checked) {
      uncheckTodo(id);
    }

    if (!checked) {
      checkTodo(id);
    }

    setChecked(!checked);
  };

  return (
    <div key={todo.id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
      />
      <p className={styles.text}>{todo.value}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isChecked: state.todocheck.find((item) => item.id === ownProps.id), // {isChecked: , id: }
  };
};

export default connect(mapStateToProps, {
  checkTodo,
  uncheckTodo,
})(TaskTodo);
