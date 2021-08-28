import React from 'react';
import { connect } from 'react-redux';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io5';
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
      <h3 className={styles.title}>
        {title}
        <button className={styles.btn}>
          <BsIcons.BsThreeDots className={styles.btnicon} />
        </button>
      </h3>
      <p className={styles.description}>
        {truncate(description, 150) || 'description'}
      </p>
      <p className={styles.date}>
        <CgIcons.CgCalendarDue className={styles.dateicon} />
        {duedate || 'due date'}
      </p>
      <button className={styles.delete} onClick={() => onClick(id)}>
        <IoIcons.IoTrashOutline />
      </button>
    </div>
  );
};

export default connect(null, {
  deleteTask,
})(Card);
