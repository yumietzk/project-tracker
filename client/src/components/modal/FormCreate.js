import { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import FormTemplate from './FormTemplate';
import Create from './Create';

const FormCreate = ({ setIsFormCreateOpen, isDarkMode, createTask }) => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (formValues) => {
    const {
      title,
      month,
      date,
      year,
      status,
      dueMonth,
      dueDate,
      dueYear,
      description,
    } = formValues;

    const monthdate = [month, date].join(' ');
    const createdate = [monthdate, year].join(', '); // January 1, 2022

    const duemonthdate = [dueMonth, dueDate].join(' ');
    const duedate = [duemonthdate, dueYear].join(', '); // January 1, 2022

    createTask(title, createdate, status, duedate, description, todos);

    setIsFormCreateOpen(false);
  };

  return (
    <FormTemplate
      isDarkMode={isDarkMode}
      type="New Project"
      handleSubmit={handleSubmit}
    >
      <Create isDarkMode={isDarkMode} todos={todos} setTodos={setTodos} />
    </FormTemplate>
  );
};

export default connect(null, {
  createTask,
})(FormCreate);
