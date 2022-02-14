import React from 'react';
import styles from './Landing.module.css';

const Landing = ({ children }) => {
  return (
    <div className={styles.landing}>
      <div className={styles['landing-left']}></div>
      <div className={styles['landing-right']}>
        <div className={styles['right-container']}>{children}</div>
      </div>
    </div>
  );
};

export default Landing;
