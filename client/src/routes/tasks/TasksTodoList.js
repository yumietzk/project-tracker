import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions';
import TaskTodo from './TaskTodo';

const TasksTodoList = ({ updateTask, data }) => {
  const [todos, setTodos] = useState(data.todos);

  const handleCheck = (id, isChecked) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoChecked: isChecked };
      } else {
        return { ...todo };
      }
    });

    setTodos(checkedTodos);

    updateTask(
      data._id,
      data.title,
      data.date,
      data.status,
      data.duedate,
      data.description,
      checkedTodos
    );
  };

  const renderTodos = () => {
    return todos.map((todo, i) => {
      return <TaskTodo todo={todo} handleCheck={handleCheck} key={i} />;
    });
  };

  return renderTodos();
};

export default connect(null, {
  updateTask,
})(TasksTodoList);
