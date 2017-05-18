'use strict';
import React, { Component } from 'react';

import { auth } from 'firebase';

import Form from '../components/Form';
import FormInput from '../components/FormInput';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <Form title="Login" formButtonText="Login" formButtonOnPress={ this.login.bind(this) }>
        <FormInput icon="email" position="top" placeholder="Email Address"
                   onChangeText={ this.setFormValue.bind(this, 'email') }
                   getValue={ this.getFormValue.bind(this, 'email') } />
        <FormInput icon="password" position="bottom" placeholder="Password" secureTextEntry={ true }
                   onChangeText={ this.setFormValue.bind(this, 'password') }
                   getValue={ this.getFormValue.bind(this, 'password') } />
      </Form>
    );
  }

  setFormValue(key, value) {
    let state = {};
    state[key] = value;
    this.setState(state);
  }

  getFormValue(key) {
    return this.state[key];
  }

  login() {
    if (this.state.email === '' || this.state.password === '') {
      alert('Login fields are empty. Please try again');
      return;
    }

    this.props.handler({ loaded: false });

    auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      this.props.handler();

      if (error) {
        alert('Login Failed. Please try again');
      }
    });
  }
}
