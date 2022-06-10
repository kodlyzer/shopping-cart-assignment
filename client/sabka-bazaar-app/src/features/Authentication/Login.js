import React from 'react';
import { AuthContainer } from './Authentication.styled';
import SignInForm from '../../components/SignInForm';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const onEmailSignIn = (email, password) => dispatch(loginAsync(email, password))
  return (
    <AuthContainer>
      <div>
        <h2>Get access to your orders, wishlist, and recommendations.</h2>
        <span>Sign in with your email and password</span>
      </div>
      <SignInForm onEmailSignIn={onEmailSignIn}/>
    </AuthContainer>
  );
};

export default Login;
