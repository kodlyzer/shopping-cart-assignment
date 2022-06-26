import React from 'react';
import { signoutUser } from '../../utils/firebase.utils';

const Home = () => (
  <div>
    <button onClick={() => signoutUser()}>singout</button>
  </div>
);

export default Home;
