'use strict';
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Firebase, { auth } from 'firebase';

import Login from './pages/login';
import Signup from './pages/signup';
import Account from './pages/account';
import Forgot from './pages/forgot';

import Header from './components/header';
import Button from './components/button';

import styles from './styles/common-styles.js';

class rnfirebaseauth extends Component {
  constructor(props) {
    super(props);

    const firebaseConfig = {};

    this.firebase = Firebase.initializeApp(firebaseConfig);

    this.state = {
      component: null,
      user: null,
      loaded: false
    };
  }

  componentWillMount() {
    let state = { component: null };

    auth().onAuthStateChanged((user) => {
      if (user) {
        state.component = Account;
        state.user = user;
      } else {
        state.component = Login;
      }

      this.setState(state);
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderBody() }
        { this.renderFooterButtons() }
      </View>
    );
  }

  renderBody() {
    if (this.state.component) {
      return React.createElement(this.state.component, { user: this.state.user, handler: this.handler.bind(this) });
    } else {
      return (
        <Header text='React Native Firebase Auth' loaded={ this.state.loaded }/>
      );
    }
  }

  renderFooterButtons() {
    // Don't show these buttons when on the Account view
    if (this.state.component === Account) {
      return;
    }

    return (
      <View style={ styles.footer }>
        <Button
          text='Forgotten your password?'
          onpress={ this.goToForgotPassword.bind(this) }
          button_styles={[ styles.transparent_button, styles.footer_btn_left ]}
          button_text_styles={[ styles.transparent_button_text, styles.footer_btn_text_left ]} />
        <Button
          text={ this.state.component === Login ? 'New here?' : 'Got an Account?' }
          onpress={ this.state.component === Login ? this.goToSignup.bind(this) : this.goToLogin.bind(this) }
          button_styles={[ styles.transparent_button, styles.footer_btn_right ]}
          button_text_styles={[ styles.transparent_button_text, styles.footer_btn_text_right ]} />
      </View>
    );
  }

  handler() {
    if (this.state.component === Forgot) {
      this.setState({
        component: Login
      });
    }
  }

  goToForgotPassword() {
    this.setState({
      component: Forgot
    });
  }

  goToSignup() {
    this.setState({
      component: Signup
    });
  }

  goToLogin() {
    this.setState({
      component: Login
    });
  }
}

export default rnfirebaseauth;
