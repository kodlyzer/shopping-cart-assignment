import React from 'react';
import { Outlet, Link } from "react-router-dom";
import SignInForm from './components/SignInForm';

const App = () => {
  return (
    <>
    <header>
      It's Sabka Bazaar
    </header>
    <main>
      <Outlet />
    </main>
    <footer>© Kodlyzer</footer>
    </>
  );
}

export default App;
