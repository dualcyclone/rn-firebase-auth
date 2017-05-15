'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';

import Account from './account';
import Signup from './signup';

import styles from '../styles/common-styles.js';

export default class login extends Component {
  constructor(props) {
    super(props);

    this.firebase = props.firebase;

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
          <TextInput
            style={ styles.textinput }
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
          <Button 
            text='New here?' 
            onpress={ this.goToSignup.bind(this) }
            button_styles={ styles.transparent_button }
            button_text_styles={ styles.transparent_button_text } />
        </View>
      </View>
    );
  }

  login(){
    this.setState({
      loaded: false
    });

    this.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      this.setState({
        loaded: true
      });

      this.props.navigator.push({
        component: Account,
        user: user,
        firebase: this.firebase
      });
    }).catch(function(error) {
      if(error){
        alert('Login Failed. Please try again');
      }
    });
  }

  goToSignup(){
    this.props.navigator.push({
      component: Signup,
      firebase: this.firebase
    });
  }
}

AppRegistry.registerComponent('login', () => login);
