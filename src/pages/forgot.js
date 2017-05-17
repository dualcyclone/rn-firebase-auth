'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  View
} from 'react-native';

import { auth } from 'firebase';

import Icon from 'react-native-vector-icons/EvilIcons';

import Button from '../components/button';
import Header from '../components/header';

import styles from '../styles/common-styles.js';

export default class forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  render() {
    const emailIcon = (<Icon name="envelope" size={30} color="#4b5764" style={{ position: 'absolute', top: 8, left: 8 }} />);

    return (
      <View style={ styles.container }>
        <View style={ styles.body }>
          <Header text='Forgotten password' />
          <View style={[ styles.textinput, styles.textinput_bottom, styles.textinput_top ]}>
            <TextInput
              underlineColorAndroid='transparent'
              style={ styles.textinput_field }
              onChangeText={ (text) => this.setState({ email: text }) }
              value={ this.state.email }
              placeholder={ 'Email Address' }
            />
            { emailIcon }
          </View>
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
    if (this.state.email === '') {
      alert('No email provided. Please try again');
      return;
    }

    this.props.handler({ loaded: false });

    auth().sendPasswordResetEmail(this.state.email).then(() => {
      alert('A password reset email has been sent');

      if (this.props.handler) {
        this.props.handler();
      }
    }).catch(function(error) {
      this.props.handler({ loaded: true });
      if(error){
        alert('Password reset failed');
      }
    });
  }
}

AppRegistry.registerComponent('forgot', () => forgot);
