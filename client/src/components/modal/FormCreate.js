import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import { createTask } from '../../actions/index';
import styles from './FormCreate.module.css';

const FormCreate = ({ createTask }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [duedate, setDuedate] = useState('');
  const [description, setDescription] = useState('');

  // console.log(date);
  // console.log(typeof date);
  // const testid = date.split('/').join('');
  // console.log(testid);

  const onSubmit = (e) => {
    e.preventDefault();

    createTask(title, date, status, duedate, description);
    history.push(`/`);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.newproject}>New Project</h1>
      <form className={styles.content} onSubmit={(e) => onSubmit(e)}>
        <div className={styles.overview}>
          <div className={styles.title}>
            {/* <label className={styles.label}>Title</label> */}
            <input
              className={styles.input}
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.date}>
            <label className={styles.label}>
              <IoIcons.IoTimeOutline className={styles.icon} />
              Date created
            </label>
            <input
              className={styles.input}
              type="text"
              value={date}
              placeholder="yyyy/mm/dd"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.status}>
            <label className={styles.label}>
              <GrIcons.GrStatusPlaceholderSmall className={styles.icon} />
              Status
            </label>
            {/* <input
              className={styles.input}
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            /> */}
            <select
              className={styles.input}
              // value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="No Status">No Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className={styles.duedate}>
            <label className={styles.label}>
              <CgIcons.CgCalendarDue className={styles.icon} />
              Due Date
            </label>
            <input
              className={styles.input}
              type="text"
              value={duedate}
              placeholder="yyyy/mm/dd"
              onChange={(e) => setDuedate(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.description}>
          <h2>Description</h2>
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.todo}>
          <h2>To Do</h2>
        </div>

        <button className={styles.btn}>Create</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  createTask,
})(FormCreate);
