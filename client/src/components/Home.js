import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTask } from '../actions';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';
import Header from './Header';
import Projects from '../routes/projects/Projects';
import Tasks from '../routes/tasks/Tasks';
import TimeManage from '../routes/timemanage/TimeManage';
import FormCreate from './modal/FormCreate';
import FormEdit from './modal/FormEdit';
import styles from './Home.module.css';

const Home = ({ isDarkMode, setIsDarkMode, fetchTask }) => {
  const [isFormCreateOpen, setIsFormCreateOpen] = useState(false);
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [id, setId] = useState(null);
  const [isDetail, setIsDetail] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const params = useParams();
  const paramsArr = Object.values(params);

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.addEventListener('resize', updateDimension);
  }, []);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

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
      <div className={styles.container}>
        {width <= 600 ? (
          <MobileHeader
            currentPage={paramsArr[0]}
            handleFormCreate={handleFormCreate}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            width={width}
          />
        ) : (
          <React.Fragment>
            <Sidebar currentPage={paramsArr[0]} isDarkMode={isDarkMode} />
            <Header
              handleFormCreate={handleFormCreate}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              width={width}
            />
          </React.Fragment>
        )}

        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                <Projects
                  handleFormEdit={handleFormEdit}
                  isDarkMode={isDarkMode}
                  width={width}
                />
              }
            />
            <Route path="tasks" element={<Tasks isDarkMode={isDarkMode} />} />
            <Route
              path="timemanage"
              element={
                <TimeManage
                  showDetail={handleFormEdit}
                  setIsDetail={setIsDetail}
                  isDarkMode={isDarkMode}
                  width={width}
                />
              }
            />
          </Routes>
        </div>
      </div>

      {/* modal */}
      <div
        className={`${styles.modal} ${isDarkMode && styles['modal-dark']} ${
          !isFormCreateOpen && !isFormEditOpen && styles.hidden
        }`}
      >
        {isFormCreateOpen ? (
          <FormCreate
            setIsFormCreateOpen={setIsFormCreateOpen}
            isDarkMode={isDarkMode}
          />
        ) : isFormEditOpen ? (
          <FormEdit
            setIsFormEditOpen={setIsFormEditOpen}
            isDarkMode={isDarkMode}
            id={id}
            title={isDetail ? 'Details' : 'Edit Project'}
          />
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
