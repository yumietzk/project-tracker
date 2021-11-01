import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import { connect } from 'react-redux';
import {
  updateTask,
  deleteTask,
  createEditError,
  clearEditError,
} from '../../actions';
import TodoFormEdit from './TodoFormEdit';
import history from '../../history';
import styles from './FormEdit.module.css';

const FormEdit = ({
  updateTask,
  deleteTask,
  createEditError,
  clearEditError,
  id,
  task,
  isError,
}) => {
  const splitdate = task?.date.split(', ');
  const monthdate = splitdate[0].split(' ');

  const splitduedate = task?.duedate.split(', ');
  const duemonthdate = splitduedate[0].split(' ');

  const [title, setTitle] = useState(task?.title);
  const [month, setMonth] = useState(monthdate[0]);
  const [date, setDate] = useState(monthdate[1]);
  const [year, setYear] = useState(splitdate[1]);
  const [status, setStatus] = useState(task?.status);
  const [dueMonth, setDueMonth] = useState(duemonthdate[0]);
  const [dueDate, setDueDate] = useState(duemonthdate[1]);
  const [dueYear, setDueYear] = useState(splitduedate[1]);
  const [description, setDescription] = useState(task?.description);
  const [todos, setTodos] = useState(task?.todos);

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

  const onFormUpdate = (e) => {
    e.preventDefault();

    if (
      !title ||
      month === '-' ||
      date === '-' ||
      year === '-' ||
      dueMonth === '-' ||
      dueDate === '-' ||
      dueYear === '-' ||
      !description
    ) {
      createEditError(id);
      return;
    }

    const newmonthdate = [month, date].join(' ');
    const newcreatedate = [newmonthdate, year].join(', ');

    const newduemonthdate = [dueMonth, dueDate].join(' ');
    const newduedate = [newduemonthdate, dueYear].join(', ');

    updateTask(
      id,
      title,
      newcreatedate,
      status,
      newduedate,
      description,
      todos
    );
    history.push(`/`);
  };

  const onFormDelete = (e) => {
    e.preventDefault();

    deleteTask(id);
    history.push('/');
  };

  const handleCheck = (id, isChecked) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoChecked: isChecked };
      } else {
        return { ...todo };
      }
    });

    setTodos(checkedTodos);
  };

  const addTodo = (input) => {
    const newtodo = {
      id: Math.floor(Math.random() * 10000),
      value: input,
      todoChecked: false,
    };

    const newTodos = [...todos, newtodo];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.newproject}>Edit Project</h1>
      <form className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.title}>
            <input
              className={styles.input}
              type="text"
              value={title}
              placeholder="Title"
              required="required"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.date}>
            <label className={styles.label}>
              <IoIcons.IoTimeOutline className={styles.icon} />
              Date created *
            </label>
            <div className={styles.selectgroup}>
              <select
                className={styles.select}
                value={month}
                required
                onChange={(e) => setMonth(e.target.value)}
              >
                <option>-</option>
                {months.map((month, i) => {
                  return <option key={i}>{month}</option>;
                })}
              </select>
              <select
                className={styles.select}
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              >
                <option>-</option>
                {dates.map((date, i) => {
                  return <option key={i}>{date}</option>;
                })}
              </select>
              <select
                className={styles.select}
                value={year}
                required
                onChange={(e) => setYear(e.target.value)}
              >
                <option>-</option>
                {years.map((year, i) => {
                  return <option key={i}>{year}</option>;
                })}
              </select>
            </div>
          </div>

          <div className={styles.status}>
            <label className={styles.label}>
              <GrIcons.GrStatusPlaceholderSmall className={styles.icon} />
              Status *
            </label>
            <div className={styles.selectgroup}>
              <select
                className={styles.select}
                value={status}
                required
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="No Status">No Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className={styles.duedate}>
            <label className={styles.label}>
              <CgIcons.CgCalendarDue className={styles.icon} />
              Due Date *
            </label>
            <div className={styles.selectgroup}>
              <select
                className={styles.select}
                value={dueMonth}
                required
                onChange={(e) => setDueMonth(e.target.value)}
              >
                <option>-</option>
                {months.map((month, i) => {
                  return <option key={i}>{month}</option>;
                })}
              </select>
              <select
                className={styles.select}
                value={dueDate}
                required
                onChange={(e) => setDueDate(e.target.value)}
              >
                <option>-</option>
                {dates.map((date, i) => {
                  return <option key={i}>{date}</option>;
                })}
              </select>
              <select
                className={styles.select}
                value={dueYear}
                required
                onChange={(e) => setDueYear(e.target.value)}
              >
                <option>-</option>
                {years.map((year, i) => {
                  return <option key={i}>{year}</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <h2>Description *</h2>
          <textarea
            className={styles.textarea}
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <TodoFormEdit
          todos={todos}
          handleCheck={handleCheck}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
        />

        <div className={styles.btnform}>
          <button className={styles.update} onClick={onFormUpdate}>
            Update
          </button>
          <button className={styles.deleteicon} onClick={onFormDelete}>
            <IoIcons.IoTrashOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isError: state.error.isError,
  };
};

export default connect(mapStateToProps, {
  updateTask,
  deleteTask,
  createEditError,
  clearEditError,
})(FormEdit);
