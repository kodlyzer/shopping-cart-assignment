import React from 'react';
import { AuthContainer, Note } from './Authentication.styled';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => (
  <AuthContainer>
    <Note>
      <h2>We do not share your personal details with anyone</h2>
    </Note>
    <SignUpForm />
  </AuthContainer>
);

export default SignUp;
