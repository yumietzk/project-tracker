import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import styles from './FormCreate.module.css';

const FormEdit = ({ task }) => {
  const history = useHistory();
  const [title, setTitle] = useState(task?.title);
  const [date, setDate] = useState(task?.date);
  const [status, setStatus] = useState(task?.status);
  const [duedate, setDuedate] = useState(task?.duedate);
  const [description, setDescription] = useState(task?.description);

  // console.log(title, date, status, duedate, description);

  const onSubmit = (e) => {
    e.preventDefault();

    // createTask(title, date, status, duedate, description);
    history.push(`/`);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.newproject}>Edit Project</h1>
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
            <select
              className={styles.input}
              value={status}
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

        <button className={styles.btn}>Update</button>
      </form>
    </div>
  );
};

export default FormEdit;
