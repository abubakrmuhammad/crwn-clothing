import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super();

    this.state = { email: '', password: '' };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
          <FormInput
            label='Email'
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='Password'
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />

          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
