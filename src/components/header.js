'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class header extends Component {
  render() {
    return (
      <View style={ styles.header }>
        <Text style={ styles.header_text }>{ this.props.text }</Text>
      </View>
    );
  }
}

const styles = {
  header: {
    padding: 10,
    marginBottom: 5
  },
  header_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
};

AppRegistry.registerComponent('header', () => header);
