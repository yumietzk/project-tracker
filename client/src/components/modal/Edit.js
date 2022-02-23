import React from 'react';
import * as IoIcons from 'react-icons/io5';
import Todo from './Todo';
import styles from './Edit.module.css';

const Edit = ({ todos, setTodos, setIsDelete }) => {
  return (
    <React.Fragment>
      <Todo todos={todos} setTodos={setTodos} edit={true} />
      <div className={styles.btns}>
        <button type="submit" className={styles.update}>
          Update
        </button>
        <button
          type="submit"
          className={styles.delete}
          onClick={() => setIsDelete(true)}
        >
          <IoIcons.IoTrashOutline />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Edit;
