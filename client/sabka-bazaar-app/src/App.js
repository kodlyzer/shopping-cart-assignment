import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import Logo from './images/logo.png';
import { setCurrentUser } from './store/authSlice';
import { onAuthStateChangedListener } from './utils/firebase.utils';

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>© Kodlyzer</footer>
    </>
  );
};

export default App;
