import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './features/Authentication/Login';
import SignUp from './features/Authentication/SignUp';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
