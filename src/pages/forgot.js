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

export default class forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header text='Login' loaded={ this.state.loaded } />
        <View style={ styles.body }>
          <TextInput
            style={ styles.textinput }
            onChangeText={ (text) => this.setState({ email: text }) }
            value={ this.state.email }
            placeholder={ 'Email Address' }
          />
          <Button
            text='Reset password'
            onpress={ this.reset.bind(this) }
            button_styles={ styles.primary_button }
            button_text_styles={ styles.primary_button_text } />
        </View>
      </View>
    );
  }

  reset(){
    this.setState({
      loaded: false
    });

    auth().sendPasswordResetEmail(this.state.email).then(() => {
      this.setState({
        loaded: true
      });

      alert('A password reset email has been sent');

      if (this.props.handler) {
        this.props.handler();
      }
    }).catch(function(error) {
      if(error){
        alert('Password reset failed');
      }
    });
  }
}

AppRegistry.registerComponent('forgot', () => forgot);
