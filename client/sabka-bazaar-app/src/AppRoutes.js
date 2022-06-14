import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import App from './App';
import Login from './features/Authentication/Login';
import SignUp from './features/Authentication/SignUp';
import Home from './features/Home/Home';

const ProtectedRoutes = ({
  isAllowed,
  redirectPath = '/login',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const AppRoutes = () => {
  let isLoggedIn = useSelector((state) => state?.auth?.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route
            path='/'
            element={<ProtectedRoutes isAllowed={isLoggedIn} />}
          >
            <Route path='home' element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
