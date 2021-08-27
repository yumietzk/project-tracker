import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../../actions/index';
import styles from './FormCreate.module.css';

const FormCreate = ({ createTask }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2021/8/26');
  const [status, setStatus] = useState('no status');
  const [duedate, setDuedate] = useState('');
  const [description, setDescription] = useState('');

  // console.log(date);
  // console.log(typeof date);
  // const testid = date.split('/').join('');
  // console.log(testid);

  const onSubmit = (e) => {
    e.preventDefault();

    createTask(title, date, status, duedate);
    history.push(`/`);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.label}>New Project</h1>
      <form className={styles.content} onSubmit={(e) => onSubmit(e)}>
        <div className={styles.outline}>
          <div>
            <h2 className={styles.title}>Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Date created</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Status</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label>Due Date</label>
            <input
              type="text"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <p>To do</p>
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
