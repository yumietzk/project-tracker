import React from 'react';
import * as AiIcons from 'react-icons/ai';
import styles from './TimeManageList.module.css';

const TimeManageList = ({
  showDetail,
  setIsDetail,
  isDarkMode,
  task,
  calcDate,
}) => {
  const handleClick = (id) => {
    showDetail(id);
    setIsDetail(true);
  };

  const renderTasksLeft = () => {
    let count = task.todos.length;

    if (count === 0) {
      return 'No task registered';
    } else {
      task.todos.map((todo) => {
        if (todo.todoChecked) {
          count--;
        }
      });

      if (count === 0) {
        return 'All tasks completed';
      } else if (count === 1) {
        return '1 task left';
      } else {
        return `${count} tasks left`;
      }
    }
  };

  const renderDueDate = (date) => {
    const daysLeft = calcDate(date);

    if (daysLeft < -1) return `${Math.abs(daysLeft)} days ago`;
    if (daysLeft === -1) return 'Yesterday';
    if (daysLeft === 0) return 'Today';
    if (daysLeft === 1) return 'Tomorrow';
    if (daysLeft <= 7) return `${daysLeft} days left`;
    else {
      return date;
    }
  };

  const handleFire = (date) => {
    const daysLeft = calcDate(date);

    if (daysLeft <= 2) return true;
  };

  return (
    <div className={styles.content}>
      <div
        key={task._id}
        className={`${styles.project} ${isDarkMode && styles['project-dark']} ${
          task.status === 'No Status'
            ? styles['project-nostatus']
            : task.status === 'In Progress'
            ? styles['project-inprogress']
            : null
        }`}
      >
        <div
          className={`${styles.title} ${isDarkMode && styles['title-dark']}`}
        >
          <div className={styles['title-text']}>{task.title}</div>
          <button
            className={`${styles['title-btn']} ${
              isDarkMode && styles['title-btn-dark']
            }`}
            onClick={() => handleClick(task._id)}
          >
            Details
          </button>
        </div>
        <div
          className={`${styles.tasks} ${isDarkMode && styles['tasks-dark']}`}
        >
          {renderTasksLeft()}
        </div>
        <div className={styles.date}>
          <div className={styles['date-text']}>
            {renderDueDate(task.duedate)}
          </div>
          <div
            className={`${styles['fire-icon']} ${
              handleFire(task.duedate) && styles.visible
            }`}
          >
            <AiIcons.AiTwotoneFire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManageList;
