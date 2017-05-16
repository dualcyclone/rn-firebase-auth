'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import { auth } from 'firebase';

import Button from '../components/button';
import Header from '../components/header';

import Login from './login';

import styles from '../styles/common-styles.js';

export default class account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.setState({
      user: this.props.user
    });
  }

  render(){
    return (
      <View style={ styles.container }>
        <Header text='Account' />
        <View style={ styles.body }>
        {
          this.state.user && 
            <View style={ styles.body }>
              <View style={ page_styles.email_container }>
                <Text style={ page_styles.email_text }>{ this.state.user.email }</Text>
              </View>
              { this.state.user.photoURL &&
                  <Image
                    style={ styles.image }
                    source={{uri: this.state.user.photoURL}}
                  />
              }
              <Button 
                  text='Logout' 
                  onpress={ this.logout.bind(this) }
                  button_styles={ styles.primary_button }
                  button_text_styles={ styles.primary_button_text } />
            </View>
        }
        </View>
      </View>
    );
  }

  logout(){
    this.props.handler({ loaded: false });

    auth().signOut().catch((error) => {
      this.props.handler({ loaded: true });
      alert('Failed to logout....');
    });
  }
}

const page_styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});
