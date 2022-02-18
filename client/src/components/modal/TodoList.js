import React from 'react';
import * as IoIcons from 'react-icons/io5';
import TodoListEdit from './TodoListEdit';
import styles from './ToDoList.module.css';

const ToDoList = ({ todos, setTodos, edit }) => {
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    deleteTodo(id);
  };

  const handleCheck = (id, isChecked) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoChecked: isChecked };
      } else {
        return { ...todo };
      }
    });

    setTodos(checkedTodos);
  };

  if (!todos || todos.length === 0) return null;

  return todos.map((todo, i) => {
    return (
      <div key={i} className={styles.list}>
        <button
          className={styles.btn}
          onClick={(e) => handleDelete(e, todo.id)}
        >
          <IoIcons.IoCloseOutline className={styles.icon} />
        </button>

        {edit && <TodoListEdit todo={todo} handleCheck={handleCheck} />}

        <div key={todo.id} className={styles.text}>
          {todo.value}
        </div>
      </div>
    );
  });
};

export default ToDoList;
