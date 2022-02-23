import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { fetchTasks, updateTask } from '../../actions';
import List from './List';
import LoadingIndicator from '../../helpers/LoadingIndicator';
import styles from './Projects.module.css';

const Projects = ({
  handleFormEdit,
  fetchTasks,
  updateTask,
  tasks,
  isFetching,
  isError,
}) => {
  const [dataArr, setDataArr] = useState({
    noStatus: [],
    inProgress: [],
    completed: [],
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks && tasks.length !== 0) {
      let noStatus = [];
      let inProgress = [];
      let completed = [];

      tasks.map((task) => {
        if (task.status === 'No Status') noStatus.push(task);
        if (task.status === 'In Progress') inProgress.push(task);
        if (task.status === 'Completed') completed.push(task);
      });

      setDataArr({
        ...dataArr,
        noStatus: noStatus,
        inProgress: inProgress,
        completed: completed,
      });
    }
  }, [tasks]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result);

    if (!destination) return;
    // sorting among list might be implemented later
    if (destination.droppableId === source.droppableId) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const targetTask = tasks.find((task) => task._id === draggableId);
    const { _id: id, title, date, duedate, description, todos } = targetTask;

    // when changing status
    if (destination.droppableId !== source.droppableId) {
      updateTask(
        id,
        title,
        date,
        destination.droppableId,
        duedate,
        description,
        todos
      );

      // For now, sorting among list is not implemented.
      // let targetArr;
      // if (destination.droppableId === 'No Status') {
      //   targetArr = dataArr.noStatus;
      // } else if (destination.droppableId === 'In Progress') {
      //   targetArr = dataArr.inProgress;
      // } else if (destination.droppableId === 'Completed') {
      //   targetArr = dataArr.completed;
      // }
    }
  };

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
        return (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.projects}>
              <List
                handleFormEdit={handleFormEdit}
                label="No Status"
                data={dataArr.noStatus}
              />
              <List
                handleFormEdit={handleFormEdit}
                label="In Progress"
                data={dataArr.inProgress}
              />
              <List
                handleFormEdit={handleFormEdit}
                label="Completed"
                data={dataArr.completed}
              />
            </div>
          </DragDropContext>
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
  updateTask,
})(Projects);
