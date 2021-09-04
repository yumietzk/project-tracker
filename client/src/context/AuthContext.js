import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import * as AiIcons from 'react-icons/ai';
import styles from './AuthContext.module.css';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const value = { user, loading };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <AiIcons.AiOutlineLoading3Quarters className={styles.icon} />
      </div>
    );
  } else {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }
};
