import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { fetchTasks } from '../../actions';
import List from './List';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './ProjectsContent.module.css';

const ProjectsContent = ({
  handleFormEdit,
  fetchTasks,
  tasks,
  isFetching,
  isError,
}) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  let noStatus = [];
  let inProgress = [];
  let completed = [];

  const renderContent = () => {
    if (isFetching || !tasks) {
      return <LoadingIndicator />;
    }

    if (isError?.status) {
      return <p>{isError.errorMessage}</p>;
    }

    if (tasks) {
      if (tasks.length === 0) {
        return (
          <div className={styles.message}>
            <p>
              No projects yet. Create a new project by clicking add button on
              top right and manage it :)
            </p>
          </div>
        );
      } else {
        tasks.map((task) => {
          if (task.status === 'No Status') noStatus.push(task);
          if (task.status === 'In Progress') inProgress.push(task);
          if (task.status === 'Completed') completed.push(task);
        });

        return (
          <div className={styles.projects}>
            <List
              handleFormEdit={handleFormEdit}
              label="No Status"
              data={noStatus}
            />
            <List
              handleFormEdit={handleFormEdit}
              label="In Progress"
              data={inProgress}
            />
            <List
              handleFormEdit={handleFormEdit}
              label="Completed"
              data={completed}
            />
          </div>
        );
      }
    }
  };

  return renderContent();
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
})(ProjectsContent);
