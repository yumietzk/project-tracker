import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../../actions';
import Home from '../Home';
import TasksByStatus from './TasksByStatus';
import styles from './Tasks.module.css';

const Tasks = ({ fetchTasks, tasks, isFetching, isError }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasks = () => {
    const noStatus = [];
    const inProgress = [];

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

    if (tasks.length === 0) {
      return <p className={styles.message}>No tasks yet.</p>;
    }

    tasks?.map((task) => {
      if (task.status === 'No Status') noStatus.push(task);
      if (task.status === 'In Progress') inProgress.push(task);
    });

    return (
      <div className={styles.tasks}>
        <TasksByStatus type="No Status" data={noStatus} />
        <TasksByStatus type="In Progress" data={inProgress} />
      </div>
    );
  };

  return <Home>{renderTasks()}</Home>;
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
})(Tasks);
