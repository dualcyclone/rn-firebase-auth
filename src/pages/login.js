'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  View
} from 'react-native';

import { auth } from 'firebase';

import Button from '../components/button';
import Header from '../components/header';

import styles from '../styles/common-styles.js';

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.body }>
          <Header text='Login' />
          <TextInput
            style={[ styles.textinput, styles.textinput_top ]}
            onChangeText={ (text) => this.setState({ email: text }) }
            value={ this.state.email }
            placeholder={ 'Email Address' }
          />
          <TextInput
            style={[ styles.textinput, styles.textinput_bottom ]}
            onChangeText={ (text) => this.setState({ password: text }) }
            value={ this.state.password }
            secureTextEntry={ true }
            placeholder={ 'Password' }
          />
          <Button 
            text='Login' 
            onpress={ this.login.bind(this) }
            button_styles={ styles.primary_button }
            button_text_styles={ styles.primary_button_text } />
        </View>
      </View>
    );
  }

  login() {
    if (this.state.email === '' || this.state.password === '') {
      alert('Login fields are empty. Please try again');
      return;
    }

    this.props.handler({ loaded: false });

    auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      this.props.handler({ loaded: true });
      if(error){
        alert('Login Failed. Please try again');
      }
    });
  }
}

AppRegistry.registerComponent('login', () => login);
