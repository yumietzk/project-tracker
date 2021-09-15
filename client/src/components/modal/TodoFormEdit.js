import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import TodoListEdit from './TodoListEdit';
import styles from './TodoFormEdit.module.css';

const TodoFormEdit = ({ todos, handleCheck, addTodo, deleteTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) return;

    addTodo(input);
    setInput('');
  };

  return (
    <div className={styles.todoform}>
      <h2>Task</h2>
      <div className={styles.todo}>
        <input
          className={styles.todoinput}
          type="text"
          placeholder="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.todobtn} onClick={handleAdd}>
          <BsIcons.BsPlus />
          Add
        </button>
      </div>

      <div className={styles.todolists}>
        <TodoListEdit
          todos={todos}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoFormEdit;
