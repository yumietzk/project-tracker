import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { auth } from '../firebase';
// import { useHistory } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
// import Projects from './Projects';
// import ToDo from './ToDo';
// import TimeManage from './TimeManage';
import styles from './Home.module.css';

const Home = ({ children }) => {
  // const history = useHistory();

  // const onLogout = () => {
  //   auth.signOut();
  //   history.push('/login');
  // };

  return (
    // <div>
    //   <h1>Home</h1>
    //   <button onClick={onLogout}>Logout</button>
    // </div>

    // <BrowserRouter>
    //   <div className={styles.home}>
    //     <Sidebar />
    //     <div className={styles.main}>
    //       <Header />
    //       <div className={styles.content}>
    //         <Switch>
    //           <Route path="/" exact component={Projects} />
    //           <Route path="/todo" component={ToDo} />
    //           <Route path="/timemanage" component={TimeManage} />
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </BrowserRouter>

    <div className={styles.home}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Home;
