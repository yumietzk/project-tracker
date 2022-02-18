import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTask } from '../actions';
import Header from './Header';
import Sidebar from './Sidebar';
import FormCreate from './modal/FormCreate';
import FormEdit from './modal/FormEdit';
import styles from './Home.module.css';

const Home = ({ children, fetchTask }) => {
  const [isFormCreateOpen, setIsFormCreateOpen] = useState(false);
  const [isFormEditOpen, setIsFormEditOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleFormCreate = () => {
    setIsFormCreateOpen(true);
  };

  const handleFormEdit = (id) => {
    setId(id);
    fetchTask(id);
    setIsFormEditOpen(true);
  };

  const childElement = React.cloneElement(children, {
    handleFormEdit: handleFormEdit,
  });

  return (
    <div className={styles.home}>
      <Sidebar />
      <Header handleFormCreate={handleFormCreate} />
      <div className={styles.content}>{childElement}</div>

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
