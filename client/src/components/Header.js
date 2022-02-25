import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import { auth } from '../firebase';
import { signOut } from '../actions';
import styles from './Header.module.css';

const Header = ({
  handleFormCreate,
  isDarkMode,
  setIsDarkMode,
  signOut,
  user,
}) => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    signOut();
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <DarkModeToggle
        onChange={setIsDarkMode}
        isDarkMode={isDarkMode}
        size={'4rem'}
        className={styles.toggle}
      />
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
          className={`${styles.logout} ${isDarkMode && styles['logout-dark']}`}
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
          className={`${styles.create} ${isDarkMode && styles['create-dark']}`}
          onClick={handleFormCreate}
        >
          <BsIcons.BsPlus className={styles.createicon} />
        </div>
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
})(Header);
