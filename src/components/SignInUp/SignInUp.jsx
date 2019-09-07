import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import './SignInUp.scss';

const SignInUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
