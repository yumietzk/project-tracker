import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import styles from './Sidebar.module.css';

const Sidebar = ({ currentPage }) => {
  const [selectedPage, setSelectedPage] = useState('projects');

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Project Tracker</div>
      <div className={styles.nav}>
        <Link
          to="/"
          // className={styles.link}
          className={`${styles.link} ${
            currentPage === '' || selectedPage === 'projects'
              ? styles.selected
              : null
          }`}
          onClick={() => setSelectedPage('projects')}
        >
          <CgIcons.CgWorkAlt className={styles.icon} />
          <span>Projects</span>
        </Link>
        <Link
          to="/tasks"
          className={`${styles.link} ${
            currentPage === 'tasks' || selectedPage === 'tasks'
              ? styles.selected
              : null
          }`}
          onClick={() => setSelectedPage('tasks')}
        >
          <RiIcons.RiTodoLine className={styles.icon} />
          <span>Tasks</span>
        </Link>
        <Link
          to="/timemanage"
          className={`${styles.link} ${
            currentPage === 'timemanage' || selectedPage === 'timemanage'
              ? styles.selected
              : null
          }`}
          onClick={() => setSelectedPage('timemanage')}
        >
          <IoIcons.IoTimeOutline className={styles.icon} />
          <span>Time Manage</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
