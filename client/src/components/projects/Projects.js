import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../../actions';
import Home from '../Home';
import List from './List';
import styles from './Projects.module.css';

const Projects = ({ fetchTasks, tasks, isFetching, isError }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  const renderProjects = () => {
    const noStatus = [];
    const inProgress = [];
    const completed = [];

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
      return (
        <div className={styles.message}>
          <p>
            No projects yet. Create a new project by clicking add button on top
            right and manage it :)
          </p>
        </div>
      );
    }

    tasks?.map((task) => {
      if (task.status === 'No Status') noStatus.push(task);
      if (task.status === 'In Progress') inProgress.push(task);
      if (task.status === 'Completed') completed.push(task);
    });

    return (
      <div className={styles.projects}>
        <List label="No Status" data={noStatus} />
        <List label="In Progress" data={inProgress} />
        <List label="Completed" data={completed} />
      </div>
    );
  };

  return <Home>{renderProjects()}</Home>;
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
