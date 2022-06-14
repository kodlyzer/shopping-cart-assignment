import React, { useEffect } from 'react';
import { AuthContainer, Note } from './Authentication.styled';
import SignInForm from '../../components/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.auth?.loading);
  const onEmailSignIn = (email, password) => {
    return dispatch(loginAsync(email, password));
  };

  return (
    <AuthContainer>
      <Note>
        <h2>Login</h2>
        <span>Get access to your orders, wishlist, and recommendations</span>
      </Note>
      <SignInForm onEmailSignIn={onEmailSignIn} isLoading={isLoading} />
    </AuthContainer>
  );
};

export default Login;
