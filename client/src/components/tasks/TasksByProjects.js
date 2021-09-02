import React from 'react';
import TasksTodoList from './TasksTodoList';
import styles from './TasksByProjects.module.css';

const TasksByProjects = ({ data, isFetching, isError }) => {
  const renderProjects = () => {
    if (isFetching || !data) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (data.length === 0) {
      return <p>No project.</p>;
    }

    return data.map((item) => {
      if (!item.todos || item.todos.length === 0) return null;

      return (
        <div
          key={item._id}
          className={`${styles.project} ${
            item.status === 'No Status' ? styles.nostatus : styles.inprogress
          }`}
        >
          <h3 className={styles.title}>{item.title}</h3>
          <TasksTodoList todos={item.todos} />
        </div>
      );
    });
  };

  return renderProjects();
};

export default TasksByProjects;
