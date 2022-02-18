import React from 'react';
import * as AiIcons from 'react-icons/ai';
import styles from './LoadingIndicator.module.css';

const LoadingIndicator = () => {
  return (
    <div className={styles.loading}>
      <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
    </div>
  );
};

export default LoadingIndicator;
