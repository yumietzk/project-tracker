import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import styles from './TimeManageList.module.css';

const TimeManageList = ({ task, renderDueDate, handleFire }) => {
  const [detail, setDetail] = useState(false);

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

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  return (
    <div className={styles.content}>
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
            <button className={styles.btn} onClick={() => setDetail(!detail)}>
              {!detail ? 'Detail' : 'Hide'}
            </button>
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

      <div
        className={`${styles.detail} ${
          task.status === 'No Status'
            ? styles.detailNoStatus
            : task.status === 'In Progress'
            ? styles.detailInProgress
            : null
        } ${detail ? styles.visible : null}`}
      >
        <div className={styles.subcontent}>
          <div className={styles['sub-left']}>
            <p className={styles.subtitle}>Description:</p>
            <p className={styles['detail-description']}>
              {truncate(task.description, 150) || '(no description)'}
            </p>
          </div>
          <div className={styles['sub-right']}>
            <p className={styles.subtitle}>Tasks:</p>
            {task.todos.map((todo, i) => {
              return (
                <p
                  key={i}
                  className={`${styles.todos} ${
                    todo.todoChecked ? styles.checked : null
                  }`}
                >
                  &mdash; {todo.value}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManageList;
