import React from 'react';

import './Button.scss';

const Button = ({ children, variant, ...props }) => {
  const classNames = {
    googleSignIn: 'google-sign-in',
    inverted: 'inverted'
  };

  return (
    <button className={`${classNames[variant]} custom-button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
