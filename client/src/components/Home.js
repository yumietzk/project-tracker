import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Home.module.css';

const Home = ({ children }) => {
  return (
    <div className={styles.home}>
      <Sidebar />
      {/* <div className={styles.main}> */}
      <Header />
      <div className={styles.content}>{children}</div>
      {/* </div> */}
    </div>
  );
};

export default Home;
