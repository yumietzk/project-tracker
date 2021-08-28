import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
// import { fetchTasks } from '../actions';
import styles from './List.module.css';

const List = ({ label, tasks, isFetching, isError }) => {
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  const renderCard = () => {
    if (isFetching || !tasks) {
      return <div>Now loading...</div>;
    }

    if (isError?.status) {
      return <p>{isError.error}</p>;
    }

    if (tasks.length === 0) {
      return <p>No data.</p>;
    }

    return tasks.map((task) => {
      return (
        <Card
          id={task._id}
          title={task.title}
          description={task.description}
          duedate={task.duedate}
          key={task._id}
        />
      );
    });
  };

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{label} 3</h2>
      <div className={styles.cards}>{renderCard()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.data.tasks,
    isFetching: state.data.isFetching,
    isError: state.error.isError,
  };
};

export default connect(mapStateToProps)(List);
