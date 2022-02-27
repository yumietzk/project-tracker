import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import styles from './Sidebar.module.css';

const Sidebar = ({ currentPage, isDarkMode }) => {
  const [selectedPage, setSelectedPage] = useState('projects');

  return (
    <div
      className={`${styles.sidebar} ${isDarkMode && styles['sidebar-dark']}`}
    >
      <div className={`${styles.logo} ${isDarkMode && styles['logo-dark']}`}>
        Project Tracker
      </div>
      <div className={styles.nav}>
        <Link
          to="/"
          className={`${isDarkMode ? styles['link-dark'] : styles.link} ${
            currentPage === '' || selectedPage === 'projects'
              ? styles.selected
              : null
          } `}
          onClick={() => setSelectedPage('projects')}
        >
          <CgIcons.CgWorkAlt className={styles.icon} />
          <span>Projects</span>
        </Link>
        <Link
          to="/tasks"
          className={`${isDarkMode ? styles['link-dark'] : styles.link} ${
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
          className={`${isDarkMode ? styles['link-dark'] : styles.link} ${
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
