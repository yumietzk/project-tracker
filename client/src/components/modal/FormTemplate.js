import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';
import FormData from './FormData';
import styles from './FormTemplate.module.css';

// get current date
const now = new Date();
const currentMonth = now.getMonth();
const currentDate = now.getDate();
const currentYear = now.getFullYear();

const formObj = {
  title: '',
  month: FormData.months[currentMonth],
  date: currentDate,
  year: currentYear,
  status: '-',
  dueMonth: '-',
  dueDate: '-',
  dueYear: '-',
  description: '',
};

const FormTemplate = ({
  children,
  isDarkMode,
  type,
  data,
  edit,
  id,
  handleSubmit,
  handleUpdate,
  setIsFormEditOpen,
  deleteTask,
}) => {
  const [form, setForm] = useState(formObj);
  const [error, setError] = useState({}); // title, date, status, duedate, description
  const [isFormChecked, setIsFormChecked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    if (edit) {
      const { title, date, status, duedate, description } = data;

      const splitdate = date.split(', ');
      const monthdate = splitdate[0].split(' ');

      const splitduedate = duedate.split(', ');
      const duemonthdate = splitduedate[0].split(' ');

      setForm({
        ...form,
        title: title,
        month: monthdate[0],
        date: monthdate[1],
        year: splitdate[1],
        status: status,
        dueMonth: duemonthdate[0],
        dueDate: duemonthdate[1],
        dueYear: splitduedate[1],
        description: description,
      });
    }
  }, []);

  useEffect(() => {
    if (isFormChecked && Object.keys(error).length === 0) {
      if (edit) {
        handleUpdate(form);
      } else {
        handleSubmit(form);
      }
      setForm(formObj);
    }
  }, [isFormChecked]);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (isDelete) {
      deleteTask(id);
      setIsFormEditOpen(false);
    } else {
      setError({});

      let errorMsg = {};
      let isError = false;

      for (const [key, value] of Object.entries(form)) {
        if (key === 'month' || key === 'date' || key === 'year') {
          if (value === '-') {
            isError = true;
            errorMsg = {
              ...errorMsg,
              date: 'You must select month, date and year',
            };
          }
        } else {
          if (value === formObj[key]) {
            isError = true;
            if (key === 'status') {
              errorMsg = { ...errorMsg, [key]: `You must select a ${key}` };
            } else if (
              key === 'dueMonth' ||
              key === 'dueDate' ||
              key === 'dueYear'
            ) {
              errorMsg = {
                ...errorMsg,
                duedate: 'You must select month, date and year',
              };
            } else {
              errorMsg = { ...errorMsg, [key]: `You must enter a ${key}` };
            }
          }
        }
      }
      setError(errorMsg);

      if (!isError) setIsFormChecked(true);
    }
  };

  const renderError = (key) => {
    if (error && error[key]) {
      return <div className={styles.error}>{error[key]}</div>;
    }
  };

  const childElement = React.cloneElement(children, {
    setIsDelete: setIsDelete,
  });

  return (
    <React.Fragment>
      <div className={styles.form}>
        <h1 className={styles['form-title']}>{type}</h1>

        <form onSubmit={formHandler} className={styles['form-template']}>
          <div className={styles.title}>
            <input
              className={`${styles.input} ${
                isDarkMode && styles['input-dark']
              }`}
              type="text"
              name="title"
              placeholder="Title *"
              value={form.title}
              onChange={handleInputChange}
            />
            {renderError('title')}
          </div>

          <div className={styles.date}>
            <div className={styles['date-form']}>
              <label className={styles.label}>
                <IoIcons.IoTimeOutline className={styles.icon} />
                Date created *
              </label>
              <div className={styles.selectgroup}>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="month"
                  value={form.month}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.months.map((month, i) => {
                    return (
                      <option key={i} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.dates.map((date, i) => {
                    return (
                      <option key={i} value={date}>
                        {date}
                      </option>
                    );
                  })}
                </select>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="year"
                  value={form.year}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.years.map((year, i) => {
                    return (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {renderError('date')}
          </div>

          <div className={styles.status}>
            <div className={styles['status-form']}>
              <label className={styles.label}>
                <GrIcons.GrStatusPlaceholderSmall className={styles.icon} />
                Status *
              </label>
              <div className={styles.selectgroup}>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="status"
                  value={form.status}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  <option value="No Status">No Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            {renderError('status')}
          </div>

          <div className={styles.duedate}>
            <div className={styles['duedate-form']}>
              <label className={styles.label}>
                <CgIcons.CgCalendarDue className={styles.icon} />
                Due Date *
              </label>
              <div className={styles.selectgroup}>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="dueMonth"
                  value={form.dueMonth}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.months.map((month, i) => {
                    return (
                      <option key={i} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="dueDate"
                  value={form.dueDate}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.dates.map((date, i) => {
                    return (
                      <option key={i} value={date}>
                        {date}
                      </option>
                    );
                  })}
                </select>
                <select
                  className={`${styles.select} ${
                    isDarkMode && styles['select-dark']
                  }`}
                  name="dueYear"
                  value={form.dueYear}
                  onChange={handleInputChange}
                >
                  <option value="-">-</option>
                  {FormData.years.map((year, i) => {
                    return (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {renderError('duedate')}
          </div>

          <div className={styles.description}>
            <h2>Description *</h2>
            <textarea
              className={`${styles.textarea} ${
                isDarkMode && styles['textarea-dark']
              }`}
              name="description"
              value={form.description}
              onChange={handleInputChange}
            />
            {renderError('description')}
          </div>

          {childElement}
        </form>
      </div>
    </React.Fragment>
  );
};

export default connect(null, {
  deleteTask,
})(FormTemplate);
