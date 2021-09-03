import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions';
import TasksTodoList from './TasksTodoList';
import styles from './TasksByProjects.module.css';

const TasksByProjects = ({ updateTask, data }) => {
  // const handleCheck = () => {
  //   updateTask(id, title, date, status, duedate, description, todos);
  // };

  // const handleCheck = (id, isChecked) => {
  //   const checkedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, todoChecked: isChecked };
  //     } else {
  //       return { ...todo };
  //     }
  //   });

  //   setTodos(checkedTodos);
  // };

  const renderProjects = () => {
    // if (isFetching || !data) {
    //   return <div>Now loading...</div>;
    // }

    // if (isError?.status) {
    //   return <p>{isError.error}</p>;
    // }

    if (!data || data.length === 0) {
      return <p>No Tasks.</p>;
    }

    return data?.map((item) => {
      if (!item.todos || item.todos.length === 0) return null;

      return (
        <div
          key={item._id}
          className={`${styles.project} ${
            item.status === 'No Status' ? styles.nostatus : styles.inprogress
          }`}
        >
          <h3 className={styles.title}>{item.title}</h3>
          <TasksTodoList data={item} />
        </div>
      );
    });
  };

  return renderProjects();
};

export default connect(null, {
  updateTask,
})(TasksByProjects);
