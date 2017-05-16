'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import Firebase, { auth } from 'firebase';

import Login from './src/pages/login';
import Account from './src/pages/account';

import Header from './src/components/header';

import styles from './src/styles/common-styles.js';

class rnfirebaseauth extends Component {
  constructor(props) {
    super(props);

    const firebaseConfig = {
      apiKey: "AIzaSyABPxpZrL3D3_KtOlH9TY_aQZGaaz-RF18",
      authDomain: "metume-ebf84.firebaseapp.com",
      databaseURL: "https://metume-ebf84.firebaseio.com",
      projectId: "metume-ebf84",
      storageBucket: "metume-ebf84.appspot.com",
      messagingSenderId: "659023108025"
    };

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
    if (this.state.component) {
      return (
        <Navigator
          initialRoute={{ component: this.state.component, user: this.state.user }}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator, user: route.user, firebase: route.firebase });
            }
          }}
        />
      );
    } else {
      return (
        <View style={ styles.container }>
          <Header text='React Native Firebase Auth' loaded={ this.state.loaded }/>
          <View style={ styles.body }></View>
        </View>
      );
    }
  }
}

AppRegistry.registerComponent('rnfirebaseauth', () => rnfirebaseauth);
