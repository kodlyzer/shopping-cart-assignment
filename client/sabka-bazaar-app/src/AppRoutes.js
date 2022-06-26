import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import App from './App';
import Login from './features/Authentication/Login';
import SignUp from './features/Authentication/SignUp';
import Home from './features/Home/Home';

const AppRoutes = () => {
  let isLoggedIn = useSelector((state) => state?.auth?.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='signup' element={<SignUp />} />
          {/* <Route path='login' element={<ProtectedRoute redirectPath='/home' isAllowed={!isLoggedIn} />} > */}
          <Route path='login' element={<Login />} />
          {/* </Route> */}
          <Route
            path='/'
            element={<ProtectedRoute isAllowed={isLoggedIn} />}
          >
            <Route path='home' element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
