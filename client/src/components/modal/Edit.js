import React from 'react';
import * as IoIcons from 'react-icons/io5';
import Todo from './Todo';
import styles from './Edit.module.css';

const Edit = ({ isDarkMode, todos, setTodos, setIsDelete }) => {
  return (
    <React.Fragment>
      <Todo
        isDarkMode={isDarkMode}
        todos={todos}
        setTodos={setTodos}
        edit={true}
      />
      <div className={styles.btns}>
        <button
          type="submit"
          className={`${styles.update} ${isDarkMode && styles['update-dark']}`}
        >
          Update
        </button>
        <button
          type="submit"
          className={`${styles.delete} ${isDarkMode && styles['delete-dark']}`}
          onClick={() => setIsDelete(true)}
        >
          <IoIcons.IoTrashOutline />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Edit;
