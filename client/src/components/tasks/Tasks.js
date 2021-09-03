import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';
import Home from '../Home';
import TasksByStatus from './TasksByStatus';
import styles from './Tasks.module.css';

const Tasks = ({ fetchTasks, tasks, isFetching, isError }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const noStatus = [];
  const inProgress = [];

  if (isFetching || !tasks) {
    return <div>Now loading...</div>;
  }

  if (isError?.status) {
    return <p>{isError.error}</p>;
  }

  if (tasks.length === 0) {
    return <p>No Tasks Yet.</p>;
  }

  // if (!tasks) return 'No Tasks.';

  tasks?.map((task) => {
    if (task.status === 'No Status') noStatus.push(task);
    if (task.status === 'In Progress') inProgress.push(task);
  });

  return (
    <Home>
      <div className={styles.tasks}>
        <TasksByStatus
          type="No Status"
          data={noStatus}
          // isFetching={isFetching}
          // isError={isError}
        />
        <TasksByStatus
          type="In Progress"
          data={inProgress}
          // isFetching={isFetching}
          // isError={isError}
        />
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
})(Tasks);
