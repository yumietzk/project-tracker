import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import TodoList from './TodoList';
import styles from './TodoForm.module.css';

const TodoForm = ({ todos, addTodo, deleteTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) return;

    addTodo(input);
    setInput('');
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    deleteTodo(id);
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

      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default TodoForm;
