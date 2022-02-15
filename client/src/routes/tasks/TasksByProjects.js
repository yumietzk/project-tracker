import React from 'react';
import TasksTodoList from './TasksTodoList';
import styles from './TasksByProjects.module.css';

const TasksByProjects = ({ data }) => {
  const renderProjects = () => {
    if (!data || data.length === 0) {
      return <p className={styles.message}>No Tasks.</p>;
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

export default TasksByProjects;
