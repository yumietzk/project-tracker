import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { checkTodo, uncheckTodo } from '../../actions';
import TaskTodo from './TaskTodo';
import styles from './TasksTodoList.module.css';

const TasksTodoList = ({ checkTodo, uncheckTodo, todos, isChecked }) => {
  // const [checked, setChecked] = useState(false);
  // const [id, setId] = useState(null);

  // useEffect(() => {
  //   if (checked) {
  //     uncheckTodo(id);
  //   }

  //   if (!checked) {
  //     checkTodo(id);
  //   }
  // }, []);

  // const handleChecked = (e, id) => {
  //   // e.preventDefault();

  //   // if (checked) {
  //   //   uncheckTodo(id);
  //   // }

  //   // if (!checked) {
  //   //   checkTodo(id);
  //   // }
  //   setId(id);
  //   setChecked(!checked);
  // };

  const renderTodos = () => {
    return todos.map((todo) => {
      return <TaskTodo todo={todo} id={todo.id} key={todo.id} />;
    });
  };

  return renderTodos();
};

// const mapStateToProps = (state) => {
//   return {
//     isChecked: state.todocheck, // [{isChecked: ,id: }, {}]
//   };
// };

export default TasksTodoList;
