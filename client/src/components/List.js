import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
// import { fetchTasks } from '../actions';
import styles from './List.module.css';

const List = ({ label, tasks, isFetching, isError }) => {
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

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

    return tasks.map((task, i) => {
      return (
        <Card
          id={task._id}
          title={task.title}
          date={task.date}
          status={task.status}
          key={i}
        />
      );
    });
  };

  return (
    <div className={styles.list}>
      <h3 className={styles.title}>{label} 3</h3>
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
