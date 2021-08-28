import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';
import styles from './Card.module.css';

const Card = ({ deleteTask, id, title, description, duedate }) => {
  const onClick = (id) => {
    deleteTask(id);
  };

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>
        {truncate(description, 100) || 'description'}
      </div>
      <div className={styles.date}>{duedate || 'due date'}</div>
      <button onClick={() => onClick(id)}>delete</button>
    </div>
  );
};

export default connect(null, {
  deleteTask,
})(Card);
