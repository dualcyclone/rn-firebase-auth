'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { auth } from 'firebase';

import Form from '../components/Form';

import styles from '../styles/common-styles.js';

export default class Account extends Component {
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
      <Form title="Account" formButtonText="Log out" formButtonOnPress={ this.logout.bind(this) }>
        {
          this.state.user &&
          <View style={ styles.body }>
            <View style={ page_styles.email_container }>
              <Text style={[ page_styles.email_text, styles.text ]}>{ this.state.user.email }</Text>
            </View>
            {
              this.state.user.photoURL &&
              <Image
                style={ page_styles.image }
                source={{ uri: this.state.user.photoURL }}
              />
            }
          </View>
        }
      </Form>
    );
  }

  logout(){
    this.props.handler({ loaded: false });

    auth().signOut().catch((error) => {
      this.props.handler();
      alert('Failed to logout....');
    });
  }
}

const page_styles = {
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  }
};
