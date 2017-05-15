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
import Login from './login';

import styles from '../styles/common-styles.js';

export default class signup extends Component {
	constructor(props) {
		super(props);

		this.firebase = props.firebase;

		this.state = {
      loaded: true,
			email: '',
			password: ''
		};
	}

  signup() {
    this.setState({
      loaded: false
    });

    this.firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user) => {
      this.setState({
        loaded: true
      });

      this.props.navigator.push({
        component: Account,
        user: user,
        firebase: this.firebase
      });
    }).catch((error) => {
      if(error){
        switch(error.code){
          case "auth/email-already-in-use":
            alert("The new user account cannot be created because the email is already in use.");
            break;

          case "auth/invalid-email":
            alert("The specified email is not a valid email.");
            break;

          default:
            alert("Error creating user:");
            console.log(error)
        }
      }
    });

    this.setState({
      email: '',
      password: '',
      loaded: true
    });

  }

  goToLogin() {
    this.props.navigator.push({
      component: Login,
      firebase: this.firebase
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header text='Signup' loaded={ this.state.loaded } />
        <View style={ styles.body }>
  		    <TextInput
    		    style={ styles.textinput }
    		    onChangeText={ (text) => this.setState({email: text}) }
    		    value={ this.state.email }
            placeholder={ 'Email Address' }
  		    />
          <TextInput
            style={ styles.textinput }
            onChangeText={ (text) => this.setState({password: text}) }
            value={ this.state.password }
            secureTextEntry={ true }
            placeholder={ 'Password' }
          />
          <Button 
            text='Signup' 
            onpress={ this.signup.bind(this) } 
            button_styles={ styles.primary_button } 
            button_text_styles={ styles.primary_button_text } />
          <Button 
            text='Got an Account?' 
            onpress={ this.goToLogin.bind(this) } 
            button_styles={ styles.transparent_button } 
            button_text_styles={ styles.transparent_button_text } />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('signup', () => signup);
