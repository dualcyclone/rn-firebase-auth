'use strict';
import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView
} from 'react-native';

import Firebase, { auth } from 'firebase';

import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import ForgotPassword from './pages/ForgotPassword';

import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

import styles from './styles/common-styles.js';

class rnfirebaseauth extends Component {
  constructor(props) {
    super(props);

    const firebaseConfig = {};

    this.firebase = Firebase.initializeApp(firebaseConfig);

    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount() {
    let state = { component: null };

    auth().onAuthStateChanged((user) => {
      if (user) {
        state.component = Account;
      } else {
        state.component = Login;
      }

      state.loaded = true;

      this.setState(state);
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={ styles.container } behavior="padding">
        <View style={ styles.body_container }>
          { this.renderBody() }
        </View>
        { this.renderFooterButtons() }
        <LoadingSpinner display={ !this.state.loaded || !this.state.component } />
      </KeyboardAvoidingView>
    );
  }

  renderBody() {
    if (this.state.component) {
      return React.createElement(this.state.component, { handler: this.handler.bind(this) });
    }
  }

  renderFooterButtons() {
    return (
      <Footer
        display={ this.state.component !== Account }
        leftButton={{
          text: (this.state.component !== ForgotPassword ? 'Reset password' : 'Register'),
          onPress: (this.state.component !== ForgotPassword ? this.goToForgotPassword.bind(this) : this.goToRegister.bind(this))
        }}
        rightButton={{
          text: (this.state.component === Login ? 'Register' : 'Login'),
          onPress: (this.state.component === Login ? this.goToRegister.bind(this) : this.goToLogin.bind(this))
        }}
      />
    );
  }

  handler({ loaded = true } = {}) {
    let state = {};

    if (this.state.component === ForgotPassword) {
      state.component = Login;
    }

    state.loaded = loaded;

    this.setState(state);
  }

  goToForgotPassword() {
    this.setState({
      component: ForgotPassword
    });
  }

  goToRegister() {
    this.setState({
      component: Register
    });
  }

  goToLogin() {
    this.setState({
      component: Login
    });
  }
}

export default rnfirebaseauth;
