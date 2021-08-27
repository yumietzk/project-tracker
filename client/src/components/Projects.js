import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';
import List from './List';
import Home from './Home';
import styles from './Projects.module.css';

const Projects = ({ fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Home>
      <div className={styles.projects}>
        <List label="No Status" />
        <List label="In Progress" />
        <List label="Completed" />
      </div>
    </Home>
  );
};

export default connect(null, {
  fetchTasks,
})(Projects);
