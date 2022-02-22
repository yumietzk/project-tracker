import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { auth } from '../firebase';
import { signOut } from '../actions';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import styles from './Header.module.css';

const Header = ({ handleFormCreate, signOut, user }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    signOut();
    navigate('/login');
  };

  return (
    <div className={styles.header}>
      <div className={styles.userinfo}>
        <AiIcons.AiOutlineUser className={styles.usericon} />
        <p>{user}</p>
      </div>
      <div className={styles.others}>
        <button className={styles.logout} onClick={onLogout}>
          <p>LOGOUT</p>
          <GrIcons.GrLogout className={styles.logouticon} />
        </button>
        <div className={styles.create} onClick={handleFormCreate}>
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
