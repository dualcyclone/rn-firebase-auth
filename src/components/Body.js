'use strict';
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import styles from '../styles/common-styles.js';

export default class Body extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.body }>
          { this.props.children }
        </View>
      </View>
    );
  }
}
