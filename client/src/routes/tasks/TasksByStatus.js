import React from 'react';
import TasksByProjects from './TasksByProjects';
import styles from './TasksByStatus.module.css';

const TasksByStatus = ({ type, data }) => {
  return (
    <div className={styles.content}>
      <div className={styles.status}>
        <h2>{type}</h2>
      </div>
      <div className={styles.projects}>
        <TasksByProjects data={data} />
      </div>
    </div>
  );
};

export default TasksByStatus;
