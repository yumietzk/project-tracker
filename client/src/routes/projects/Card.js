import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io5';
import { deleteTask } from '../../actions';
import styles from './Card.module.css';

const Card = ({ handleFormEdit, isDarkMode, item, index, deleteTask }) => {
  const { _id: id, title, duedate, description } = item;

  const handleDelete = () => {
    deleteTask(id);
  };

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`${styles.card} ${isDarkMode && styles['card-dark']} ${
            snapshot.isDragging && styles['card-dragged']
          } ${
            snapshot.isDragging && isDarkMode && styles['card-dragged-dark']
          }`}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <h3 className={styles.title}>
            {title || '(No title)'}
            <div className={styles.btn} onClick={() => handleFormEdit(id)}>
              <BsIcons.BsThreeDots className={styles.btnicon} />
            </div>
          </h3>
          <p className={styles.description}>
            {truncate(description, 200) || '(no description)'}
          </p>
          <div className={styles.datedelete}>
            <p className={styles.date}>
              <CgIcons.CgCalendarDue
                className={`${styles.dateicon} ${
                  isDarkMode && styles['dateicon-dark']
                }`}
              />
              {duedate || '(no due date)'}
            </p>
            <button className={styles.delete} onClick={handleDelete}>
              <IoIcons.IoTrashOutline />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default connect(null, {
  deleteTask,
})(Card);
