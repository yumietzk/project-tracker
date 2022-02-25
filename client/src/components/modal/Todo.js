import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import TodoList from './TodoList';
import styles from './Todo.module.css';

const Todo = ({ isDarkMode, todos, setTodos, edit }) => {
  const [input, setInput] = useState('');

  const addTodo = (input) => {
    const todo = {
      id: Math.floor(Math.random() * 10000),
      value: input,
      todoChecked: false,
    };

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  // ここもフォームバリデーションできそう。ボタンをおして空欄だったらEnter a task表示
  const handleAdd = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) return;

    addTodo(input);
    setInput('');
  };

  return (
    <div className={styles.form}>
      <h2>Task</h2>
      <div className={styles.todo}>
        <input
          className={`${styles['todo-input']} ${
            isDarkMode && styles['todo-input-dark']
          }`}
          type="text"
          placeholder="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={`${styles.btn} ${isDarkMode && styles['btn-dark']}`}
          onClick={handleAdd}
        >
          <BsIcons.BsPlus />
          Add
        </button>
      </div>

      <div className={styles.lists}>
        <TodoList todos={todos} setTodos={setTodos} edit={edit} />
      </div>
    </div>
  );
};

export default Todo;
