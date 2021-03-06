'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor={ "#6b99ce" } onPress={ this.props.onpress } style={ this.props.button_styles }>
        <View>
            <Text style={ this.props.button_text_styles }>{ this.props.text }</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
