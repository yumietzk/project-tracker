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

  const noStatus = [];
  const inProgress = [];
  const completed = [];

  // if (isFetching || !tasks) {
  //   return <div>Now loading...</div>;
  // }

  // if (isError?.status) {
  //   return <p>{isError.error}</p>;
  // }

  // if (data.length === 0) {
  //   return <p>No data.</p>;
  // }

  tasks?.map((task) => {
    if (task.status === 'No Status') noStatus.push(task);
    if (task.status === 'In Progress') inProgress.push(task);
    if (task.status === 'Completed') completed.push(task);
  });

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
          key={task.id}
          className={`${styles.project} ${
            task.status === 'No Status'
              ? styles.projectNoStatus
              : task.status === 'In Progress'
              ? styles.projectInProgress
              : null
          }`}
        >
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.date}>{task.duedate}</p>
          <p className={styles.fire}>
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

        {/* <div className={`${styles.project} ${styles.projectNoStatus}`}>
          <h3>Title</h3>
          <p>Due Date</p>
          <p>
            <AiIcons.AiTwotoneFire />
          </p>
        </div>
        <div className={`${styles.project} ${styles.projectInProgress}`}>
          <h3>Title</h3>
          <p>Due Date</p>
          <p>
            <AiIcons.AiTwotoneFire />
          </p>
        </div>
        <div className={`${styles.project} ${styles.projectNoStatus}`}>
          <h3>Title</h3>
          <p>Due Date</p>
          <p>
            <AiIcons.AiTwotoneFire />
          </p>
        </div> */}
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
