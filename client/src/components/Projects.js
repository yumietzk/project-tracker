import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';
import List from './List';
import Home from './Home';
import styles from './Projects.module.css';

const Projects = ({ fetchTasks, tasks, isFetching, isError }) => {
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

  return (
    <Home>
      <div className={styles.projects}>
        <List
          label="No Status"
          data={noStatus}
          isFetching={isFetching}
          isError={isError}
        />
        <List
          label="In Progress"
          data={inProgress}
          isFetching={isFetching}
          isError={isError}
        />
        <List
          label="Completed"
          data={completed}
          isFetching={isFetching}
          isError={isError}
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
})(Projects);
