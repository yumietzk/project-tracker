import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Overlay.module.css';

const Overlay = () => {
  const history = useHistory();

  return (
    <div className={styles.overlay} onClick={() => history.push(`/`)}></div>
  );
};

export default Overlay;
