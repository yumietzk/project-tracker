import React from 'react';
import TasksTodoList from './TasksTodoList';
import styles from './TasksByProjects.module.css';

const TasksByProjects = ({ isDarkMode, data }) => {
  const renderProjects = () => {
    if (data?.length === 0) {
      return <p className={styles.message}>No Tasks.</p>;
    }

    return data?.map((item) => {
      if (!item.todos || item.todos.length === 0) return null;

      return (
        <div
          key={item._id}
          className={`${styles.project} ${
            isDarkMode && styles['project-dark']
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
