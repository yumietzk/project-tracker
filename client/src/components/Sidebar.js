import React from 'react';
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          <CgIcons.CgWorkAlt className={styles.icon} />
          <span>Projects</span>
        </Link>
        <Link to="/todo" className={styles.link}>
          <RiIcons.RiTodoLine className={styles.icon} />
          <span>Today's task</span>
        </Link>
        <Link to="/timemanage" className={styles.link}>
          <IoIcons.IoTimeOutline className={styles.icon} />
          <span>Time Manage</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
