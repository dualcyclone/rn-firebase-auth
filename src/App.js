'use strict';
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import Firebase, { auth } from 'firebase';

import Login from './pages/login';
import Signup from './pages/signup';
import Account from './pages/account';
import Forgot from './pages/forgot';

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

      state.loaded = true;

      this.setState(state);
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.renderBody() }
        { this.renderFooterButtons() }
        { this.renderLoading() }
      </View>
    );
  }

  renderBody() {
    if (this.state.component) {
      return React.createElement(this.state.component, { user: this.state.user, handler: this.handler.bind(this) });
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
          button_styles={[ styles.footer_btn, styles.footer_btn_left ]}
          button_text_styles={[ styles.footer_btn_text, styles.footer_btn_text_left ]} />
        <Button
          text={ this.state.component === Login ? 'New here?' : 'Got an Account?' }
          onpress={ this.state.component === Login ? this.goToSignup.bind(this) : this.goToLogin.bind(this) }
          button_styles={[ styles.footer_btn, styles.footer_btn_right ]}
          button_text_styles={[ styles.footer_btn_text, styles.footer_btn_text_right ]} />
      </View>
    );
  }

  renderLoading() {
    if (!this.state.loaded || !this.state.component) {
      return (
        <View style={ styles.spinnerContainer }>
          <ActivityIndicator style={ styles.spinner } size="large" color="rgb(89, 143, 219)"/>
        </View>
      );
    }
  }

  handler({ loaded }) {
    let state = {};

    if (this.state.component === Forgot) {
      state.component = Login;
    }

    state.loaded = loaded === undefined ? true : loaded;

    this.setState(state);
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
