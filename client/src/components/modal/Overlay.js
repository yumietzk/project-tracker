import React from 'react';
import history from '../../history';
import styles from './Overlay.module.css';

const Overlay = () => {
  return (
    <div className={styles.overlay} onClick={() => history.push(`/`)}></div>
  );
};

export default Overlay;
