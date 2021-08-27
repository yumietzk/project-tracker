import React from 'react';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';
import * as BsIcons from 'react-icons/bs';
import styles from './Header.module.css';

const Header = ({ fetchTasks }) => {
  const history = useHistory();

  const onFetchData = () => {
    fetchTasks();
  };

  const onLogout = () => {
    auth.signOut();
    history.push('/login');
  };

  return (
    <div className={styles.header}>
      <button onClick={onFetchData}>fetch data</button>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
      <Link to="/formcreate" className={styles.link}>
        <BsIcons.BsPlus className={styles.plusicon} />
      </Link>
      {/* <button className={styles.button}>
      </button> */}
    </div>
  );
};

export default connect(null, {
  fetchTasks,
})(Header);
