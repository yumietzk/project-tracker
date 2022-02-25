import React from 'react';
import TasksByProjects from './TasksByProjects';
import styles from './TasksByStatus.module.css';

const TasksByStatus = ({ isDarkMode, type, data }) => {
  return (
    <div className={styles.content}>
      <div
        className={`${styles.status} ${isDarkMode && styles['status-dark']}`}
      >
        <h2>{type}</h2>
      </div>
      <div className={styles.projects}>
        <TasksByProjects isDarkMode={isDarkMode} data={data} />
      </div>
    </div>
  );
};

export default TasksByStatus;
