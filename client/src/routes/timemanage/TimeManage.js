import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../../actions';
import Home from '../Home';
import TimeManageList from './TimeManageList';
import styles from './TimeManage.module.css';

const TimeManage = ({ fetchTasks, tasks, isFetching, isError }) => {
  const [sort, setSort] = useState(false);

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
    const daysLeft = calcDueDate(date);

    if (daysLeft <= 2) return true;
  };

  const renderProjects = () => {
    if (isFetching || !tasks) {
      return (
        <div className={styles.loading}>
          <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
        </div>
      );
    }

    if (isError?.status) {
      return <p>{isError.errorMessage}</p>;
    }

    if (tasks && tasks.length === 0) {
      return (
        <p className={styles.message}>
          No data yet. Create a new project by clicking add button on top right
          :)
        </p>
      );
    }

    if (tasks.every((task) => task.status === 'Completed')) {
      return (
        <p className={styles.message}>
          All projects are finished :) No more new projects now.
        </p>
      );
    }

    const sortedTask = [...tasks];
    if (sort) {
      sortedTask.sort((task1, task2) => {
        const calcdate1 = new Date(task1.duedate);
        const calcdate2 = new Date(task2.duedate);
        return calcdate1 - calcdate2;
      });
    }

    const targettasks = sort ? sortedTask : tasks;

    return targettasks.map((task, i) => {
      if (task.status === 'Completed') return null;

      return (
        <TimeManageList
          task={task}
          renderDueDate={renderDueDate}
          handleFire={handleFire}
          key={i}
        />
      );
    });
  };

  return (
    <Home>
      <div className={styles.timemanage}>
        <div className={styles.reference}>
          <div className={styles.type}>
            <div className={styles.nostatus}>No Status</div>
            <div className={styles.inprogress}>In Progress</div>
          </div>
          <button className={styles.btnsort} onClick={() => setSort(!sort)}>
            {sort ? 'Clear Sort' : 'Sort by Due Date'}
          </button>
        </div>
        <div className={styles.example}>
          <p className={styles.title}>Title</p>
          <p className={styles.date}>Due Date</p>
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
