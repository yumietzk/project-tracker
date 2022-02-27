import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as Io5Icons from 'react-icons/io5';
import { auth } from '../firebase';
import { signOut } from '../actions';
import styles from './MobileHeader.module.css';

const MobileHeader = ({
  currentPage,
  handleFormCreate,
  isDarkMode,
  setIsDarkMode,
  width,
  signOut,
  user,
}) => {
  const [selectedPage, setSelectedPage] = useState('projects');
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    signOut();
    navigate('/login');
  };

  return (
    <div className={styles['mobile-header']}>
      <div className={styles.header}>
        <div className={styles['header-left']}>
          <div className={styles.logo}>Project Tracker</div>
          <DarkModeToggle
            onChange={setIsDarkMode}
            isDarkMode={isDarkMode}
            size={`${width <= 450 ? '3rem' : '3.5rem'}`}
            className={styles.toggle}
          />
        </div>
        <div className={styles['header-right']}>
          <div
            className={`${styles.userinfo} ${
              isDarkMode && styles['userinfo-dark']
            }`}
          >
            <AiIcons.AiOutlineUser className={styles.usericon} />
            <p>{user}</p>
          </div>
          <div className={styles.others}>
            <button
              className={`${styles.logout} ${
                isDarkMode && styles['logout-dark']
              }`}
              onClick={onLogout}
            >
              <p>LOGOUT</p>
              <IoIcons.IoIosLogOut
                className={`${styles.logouticon} ${
                  isDarkMode && styles['logouticon-dark']
                }`}
              />
            </button>
            <div
              className={`${styles.create} ${
                isDarkMode && styles['create-dark']
              }`}
              onClick={handleFormCreate}
            >
              <BsIcons.BsPlus className={styles.createicon} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.nav} ${isDarkMode && styles['nav-dark']}`}>
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
          <Io5Icons.IoTimeOutline className={styles.icon} />
          <span>Time Manage</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.email,
  };
};

export default connect(mapStateToProps, {
  signOut,
})(MobileHeader);
