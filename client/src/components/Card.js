import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';
import styles from './Card.module.css';

const Card = ({ deleteTask, id, title, date, status }) => {
  // return <div className={styles.card}>Running</div>;

  const onClick = (id) => {
    deleteTask(id);
  };

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{status}</p>
      {/* <div>description</div> */}
      <button onClick={() => onClick(id)}>delete</button>
    </div>
  );
};

export default connect(null, {
  deleteTask,
})(Card);
