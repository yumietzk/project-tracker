import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../actions';
import Home from './Home';
import styles from './TimeManage.module.css';

const TimeManage = ({ fetchTasks, tasks, isFetching, isError }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const calcDueDate = (date) => {
    const targetdate = new Date(date);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const calcDaysLeft = (date1, date2) =>
      (date2 - date1) / (1000 * 60 * 60 * 24);

    const daysLeft = calcDaysLeft(+today, +targetdate);
    return daysLeft;
  };

  const renderDueDate = (date) => {
    const daysLeft = calcDueDate(date);

    if (daysLeft < 0) return `${Math.abs(daysLeft)} days ago`;
    if (daysLeft === 0) return 'Today';
    if (daysLeft === 1) return 'Tomorrow';
    if (daysLeft <= 7) return `${daysLeft} days left`;
    else {
      return date;
    }
  };

  const handleFire = (date) => {
    const daysLeft = calcDueDate(date);

    if (daysLeft <= 2) return true;
  };

  // if (tasks) calcDueDate(tasks[0].duedate);

  const renderProjects = () => {
    if (isFetching || !tasks) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (tasks && tasks.length === 0) {
      return <p>No data.</p>;
    }

    return tasks.map((task) => {
      if (task.status === 'Completed') return;

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
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.date}>{renderDueDate(task.duedate)}</p>
          <p
            className={`${styles.fire} ${
              handleFire(task.duedate) ? styles.render : null
            }`}
          >
            <AiIcons.AiTwotoneFire />
          </p>
        </div>
      );
    });
  };

  return (
    <Home>
      <div className={styles.timemanage}>
        <div className={styles.reference}>
          <div className={styles.nostatus}>No Status</div>
          <div className={styles.inprogress}>In Progress</div>
        </div>
        <div className={styles.example}>
          <p className={styles.title}>Title</p>
          <p className={styles.date}>Due Date</p>
          <p className={styles.fire}>&nbsp;</p>
        </div>

        {renderProjects()}
      </div>
    </Home>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.data.tasks,
    isFetching: state.data.isFetching,
    isError: state.error.isError,
  };
};

export default connect(mapStateToProps, {
  fetchTasks,
})(TimeManage);
