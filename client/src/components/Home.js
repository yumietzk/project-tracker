import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTask } from '../actions';
import Sidebar from './Sidebar';
import Header from './Header';
import Projects from '../routes/projects/Projects';
import Tasks from '../routes/tasks/Tasks';
// import TimeManage from '../routes/timemanage/TimeManage';
import TimeManageTimeline from '../routes/timemanage/TimeManageTimeline';
import FormCreate from './modal/FormCreate';
import FormEdit from './modal/FormEdit';
import styles from './Home.module.css';

const Home = ({ fetchTask }) => {
  const [isFormCreateOpen, setIsFormCreateOpen] = useState(false);
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [id, setId] = useState(null);

  const params = useParams();
  const paramsArr = Object.values(params);

  const handleFormCreate = () => {
    setIsFormCreateOpen(true);
  };

  const handleFormEdit = (id) => {
    setId(id);
    fetchTask(id);
    setIsFormEditOpen(true);
  };

  return (
    <div className={styles.home}>
      <Sidebar currentPage={paramsArr[0]} />
      <Header handleFormCreate={handleFormCreate} />

      <div className={styles.content}>
        <Routes>
          <Route
            path="/"
            element={<Projects handleFormEdit={handleFormEdit} />}
          />
          <Route path="tasks" element={<Tasks />} />
          <Route path="timemanage" element={<TimeManageTimeline />} />
        </Routes>
      </div>

      {/* modal */}
      <div
        className={`${styles.modal} ${
          !isFormCreateOpen && !isFormEditOpen && styles.hidden
        }`}
      >
        {isFormCreateOpen ? (
          <FormCreate setIsFormCreateOpen={setIsFormCreateOpen} />
        ) : isFormEditOpen ? (
          <FormEdit setIsFormEditOpen={setIsFormEditOpen} id={id} />
        ) : null}
      </div>
      <div
        className={`${styles.overlay} ${
          !isFormCreateOpen && !isFormEditOpen && styles.hidden
        }`}
        onClick={
          isFormCreateOpen
            ? () => setIsFormCreateOpen(false)
            : isFormEditOpen
            ? () => setIsFormEditOpen(false)
            : null
        }
      ></div>
    </div>
  );
};

export default connect(null, {
  fetchTask,
})(Home);
