'use strict';
import React, { Component } from 'react';

import { auth } from 'firebase';

import Form from '../components/Form';
import FormInput from '../components/FormInput';

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

  render() {
    return (
      <Form title="Signup" formButtonText="Signup" formButtonOnPress={ this.signup.bind(this) }>
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

  signup() {
    if (this.state.email === '' || this.state.password === '') {
      alert('Signup fields are empty. Please try again');
      return;
    }

    this.props.handler({ loaded: false });

    auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
      this.props.handler();
      if (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("The new user account cannot be created because the email is already in use.");
            break;

          case "auth/invalid-email":
            alert("The specified email is not a valid email.");
            break;

          default:
            alert("Error creating user:");
            console.log(error);
        }
      }
    });

    this.setState({
      email: '',
      password: ''
    });
  }
}
