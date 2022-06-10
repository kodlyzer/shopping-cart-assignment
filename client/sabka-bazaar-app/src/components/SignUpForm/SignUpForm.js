import React, { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { firstName, lastName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label='First Name'
        type='text'
        required
        onChange={handleChange}
        name='firstName'
        value={firstName}
      />
      <FormInput
        label='Last Name'
        type='text'
        required
        onChange={handleChange}
        name='lastName'
        value={lastName}
      />

      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />

      <FormInput
        label='Confirm Password'
        type='password'
        required
        onChange={handleChange}
        name='confirmPassword'
        value={confirmPassword}
      />
      <Button type='submit'>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
