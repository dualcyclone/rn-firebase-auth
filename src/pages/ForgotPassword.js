'use strict';
import React, { Component } from 'react';
import { auth } from 'firebase';

import Form from '../components/Form';
import FormInput from '../components/FormInput';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  render() {
    return (
      <Form title="Forgotten password" formButtonText="Reset password" formButtonOnPress={ this.reset.bind(this) }>
        <FormInput icon="email" placeholder="Email Address"
                   onChangeText={ this.setFormValue.bind(this, 'email') }
                   getValue={ this.getFormValue.bind(this, 'email') } />
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

  reset(){
    if (this.state.email === '') {
      alert('No email provided. Please try again');
      return;
    }

    this.props.handler({ loaded: false });

    auth().sendPasswordResetEmail(this.state.email).then(() => {
      alert('A password reset email has been sent');

      this.props.handler();
    }).catch((error) => {
      this.props.handler();

      if (error) {
        alert('Password reset failed');
      }
    });
  }
}
