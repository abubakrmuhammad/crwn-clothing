import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super();

    this.state = { email: '', password: '' };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleGoogleSignIn = event => {
    event.preventDefault();
    signInWithGoogle();
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={this.handleGoogleSignIn} variant="googleSignIn">
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
