import React from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import styles from './TimeManageList.module.css';

const TimeManageList = ({ task, renderDueDate, handleFire }) => {
  const tasksleftCount = () => {
    let count = task.todos.length;
    task.todos.map((todo) => {
      if (todo.todoChecked) {
        count--;
      }
    });
    return count;
  };

  const renderCount = () => {
    const count = tasksleftCount();

    if (count === 0) {
      return 'All tasks completed';
    } else if (count === 1) {
      return '1 task left';
    } else {
      return `${count} tasks left`;
    }
  };

  return (
    <div
      key={task._id}
      className={`${styles.project} ${
        task.status === 'No Status'
          ? styles.projectNoStatus
          : task.status === 'In Progress'
          ? styles.projectInProgress
          : null
      }`}
    >
      <div className={styles.maincontent}>
        <h3 className={styles.title}>{task.title}</h3>
        <p className={styles.date}>{renderDueDate(task.duedate)}</p>
      </div>
      <div className={styles.subcontent}>
        <div className={styles.others}>
          <Link to={`/detail/${task._id}`} className={styles.detail}>
            Detail
          </Link>
          <p className={styles.tasksleft}>{renderCount()}</p>
        </div>
        <p
          className={`${styles.fire} ${
            handleFire(task.duedate) ? styles.render : null
          }`}
        >
          <AiIcons.AiTwotoneFire />
        </p>
      </div>
    </div>
  );
};

export default TimeManageList;
