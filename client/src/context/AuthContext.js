import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';

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

      // if (user) {
      //   console.log(user);
      //   setUser(user);
      //   // setLoading(false);
      // }
    });

    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // } else {
  //   return (
  //     <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  //   );
  // }
};
