import React from 'react';
import { AuthContainer } from './Authentication.styled';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => (
  <AuthContainer>
    <div>
      <h2>We do not share your personal details with anyone</h2>
    </div>
    <SignUpForm />
  </AuthContainer>
);

export default SignUp;
