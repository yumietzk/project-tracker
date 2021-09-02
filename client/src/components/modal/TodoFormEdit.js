import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import TodoListEdit from './TodoListEdit';
import styles from './TodoFormEdit.module.css';

const TodoFormEdit = ({ todos, addTodo, deleteTodo }) => {
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
      <h2>To Do</h2>
      <div className={styles.todo}>
        <input
          className={styles.todoinput}
          type="text"
          placeholder="to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.todobtn} onClick={handleAdd}>
          <BsIcons.BsPlus />
          Add
        </button>
      </div>

      <TodoListEdit todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default TodoFormEdit;
