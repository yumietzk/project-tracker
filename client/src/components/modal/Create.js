import React from 'react';
import Todo from './Todo';
import styles from './Create.module.css';

const Create = ({ todos, setTodos }) => {
  return (
    <React.Fragment>
      <Todo todos={todos} setTodos={setTodos} />
      <button type="submit" className={styles.btn}>
        Create
      </button>
    </React.Fragment>
  );
};

export default Create;
