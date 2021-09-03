import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import { createTask } from '../../actions/index';
import TodoForm from './TodoForm';
import styles from './FormCreate.module.css';

const FormCreate = ({ createTask }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [month, setMonth] = useState('-');
  const [date, setDate] = useState('-');
  const [year, setYear] = useState('-');
  const [status, setStatus] = useState('-');
  const [dueMonth, setDueMonth] = useState('-');
  const [dueDate, setDueDate] = useState('-');
  const [dueYear, setDueYear] = useState('-');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  const onSubmit = (e) => {
    e.preventDefault();

    const monthdate = [month, date].join(' ');
    const createdate = [monthdate, year].join(', ');

    const duemonthdate = [dueMonth, dueDate].join(' ');
    const duedate = [duemonthdate, dueYear].join(', ');

    createTask(title, createdate, status, duedate, description, todos);
    history.push(`/`);
  };

  const addTodo = (input) => {
    const todo = {
      id: Math.floor(Math.random() * 10000),
      value: input,
      todoChecked: false,
    };

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.newproject}>New Project</h1>
      <form className={styles.content}>
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
            <select
              className={styles.input}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option>-</option>
              {months.map((month, i) => {
                return <option key={i}>{month}</option>;
              })}
            </select>
            <select
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option>-</option>
              {dates.map((date, i) => {
                return <option key={i}>{date}</option>;
              })}
            </select>
            <select
              className={styles.input}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option>-</option>
              {years.map((year, i) => {
                return <option key={i}>{year}</option>;
              })}
            </select>
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
              <option value="">-</option>
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
            <select
              className={styles.input}
              value={dueMonth}
              onChange={(e) => setDueMonth(e.target.value)}
            >
              <option>-</option>
              {months.map((month, i) => {
                return <option key={i}>{month}</option>;
              })}
            </select>
            <select
              className={styles.input}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            >
              <option>-</option>
              {dates.map((date, i) => {
                return <option key={i}>{date}</option>;
              })}
            </select>
            <select
              className={styles.input}
              value={dueYear}
              onChange={(e) => setDueYear(e.target.value)}
            >
              <option>-</option>
              {years.map((year, i) => {
                return <option key={i}>{year}</option>;
              })}
            </select>
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

        <TodoForm todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />

        <button className={styles.btn} onClick={onSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default connect(null, {
  createTask,
})(FormCreate);
