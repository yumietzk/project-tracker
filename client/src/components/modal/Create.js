import React from 'react';
import Todo from './Todo';
import styles from './Create.module.css';

const Create = ({ isDarkMode, todos, setTodos }) => {
  return (
    <React.Fragment>
      <Todo isDarkMode={isDarkMode} todos={todos} setTodos={setTodos} />
      <button
        type="submit"
        className={`${styles.btn} ${isDarkMode && styles['btn-dark']}`}
      >
        Create
      </button>
    </React.Fragment>
  );
};

export default Create;
