import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../../actions';
import TasksByStatus from './TasksByStatus';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './Tasks.module.css';

const Tasks = ({ fetchTasks, tasks, isFetching, isError }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  let noStatus = [];
  let inProgress = [];

  const renderTasks = () => {
    if (isFetching || !tasks) {
      return <LoadingIndicator />;
    }

    if (isError?.status) {
      return <p>{isError.errorMessage}</p>;
    }

    if (tasks) {
      if (tasks.length === 0) {
        return <p className={styles.message}>No tasks yet.</p>;
      } else {
        tasks.map((task) => {
          if (task.status === 'No Status') noStatus.push(task);
          if (task.status === 'In Progress') inProgress.push(task);
        });

        return (
          <div className={styles.tasks}>
            <TasksByStatus type="No Status" data={noStatus} />
            <TasksByStatus type="In Progress" data={inProgress} />
          </div>
        );
      }
    }
  };

  return renderTasks();
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
