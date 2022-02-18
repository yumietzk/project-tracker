import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import ToDoList from './ToDoList';
import styles from './ToDo.module.css';

const ToDo = ({ todos, setTodos, edit }) => {
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
          className={styles['todo-input']}
          type="text"
          placeholder="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn} onClick={handleAdd}>
          <BsIcons.BsPlus />
          Add
        </button>
      </div>

      <div className={styles.lists}>
        <ToDoList todos={todos} setTodos={setTodos} edit={edit} />
      </div>
    </div>
  );
};

export default ToDo;
