import React, { useState } from 'react';
import * as GoIcons from 'react-icons/go';
import TasksByProjects from './TasksByProjects';
import styles from './TasksByStatus.module.css';

const TasksByStatus = ({ type, data, isFetching, isError }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div className={styles.content}>
      <div className={styles.status}>
        <button className={styles.togglebtn} onClick={handleDisplay}>
          {display ? (
            <GoIcons.GoTriangleDown className={styles.toggleicon} />
          ) : (
            <GoIcons.GoTriangleRight className={styles.toggleicon} />
          )}
        </button>
        <h2>{type}</h2>
      </div>

      <div className={`${styles.projects} ${display ? styles.visible : null}`}>
        <TasksByProjects
          data={data}
          isFetching={isFetching}
          isError={isError}
        />
      </div>
    </div>
  );
};

export default TasksByStatus;
