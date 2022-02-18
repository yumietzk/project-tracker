import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io5';
import { deleteTask } from '../../actions';
import styles from './Card.module.css';

const Card = ({ handleFormEdit, item, deleteTask }) => {
  const { _id: id, title, duedate, description } = item;

  const handleDelete = () => {
    deleteTask(id);
  };

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {title || '(No title)'}
        <div className={styles.btn} onClick={() => handleFormEdit(id)}>
          <BsIcons.BsThreeDots className={styles.btnicon} />
        </div>
      </h3>
      <p className={styles.description}>
        {truncate(description, 150) || '(no description)'}
      </p>
      <div className={styles.datedelete}>
        <p className={styles.date}>
          <CgIcons.CgCalendarDue className={styles.dateicon} />
          {duedate || '(no due date)'}
        </p>
        <button className={styles.delete} onClick={handleDelete}>
          <IoIcons.IoTrashOutline />
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  deleteTask,
})(Card);
