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

export default class signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

  signup() {
    this.props.handler({ loaded: false });

    auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error) => {
      if(error){
        this.props.handler({ loaded: true });
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
      password: ''
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.body }>
          <Header text='Signup' />
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
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('signup', () => signup);
