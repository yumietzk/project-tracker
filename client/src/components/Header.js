import React from 'react';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import styles from './Header.module.css';

const Header = () => {
  const history = useHistory();

  const onLogout = () => {
    auth.signOut();
    history.push('/login');
  };

  return (
    <div className={styles.header}>
      <button className={styles.logout} onClick={onLogout}>
        <p>LOGOUT</p>
        <GrIcons.GrLogout className={styles.logouticon} />
      </button>
      <Link to="/formcreate" className={styles.create}>
        <BsIcons.BsPlus className={styles.createicon} />
      </Link>
    </div>
  );
};

export default Header;
