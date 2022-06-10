import React from 'react';
import { AuthContainer } from './Authentication.styled';
import SignInForm from '../../components/SignInForm';

const Login = () => (
  <AuthContainer>
    <div>
      <h2>Get access to your orders, wishlist, and recommendations.</h2>
      <span>Sign in with your email and password</span>
    </div>
    <SignInForm />
  </AuthContainer>
);

export default Login;
