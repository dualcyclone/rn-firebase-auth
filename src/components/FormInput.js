'use strict';
import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

export default class FormInput extends Component {
  render() {
    let iconStyle;

    if (this.props.icon === 'email') {
      iconStyle = 'envelope';
    }
    if (this.props.icon === 'password') {
      iconStyle = 'lock';
    }

    const icon = (<Icon name={ iconStyle } size={30} style={ styles.icon }/>);

    const inputStyle = [ styles.textinput ];
    const secureTextEntry = this.props.secureTextEntry || false;

    if (this.props.position === 'bottom' || !this.props.position) {
      inputStyle.push(styles.textinput_bottom)
    }

    if (this.props.position === 'top' || !this.props.position) {
      inputStyle.push(styles.textinput_top)
    }

    return (
      <View style={ inputStyle }>
        <TextInput
          underlineColorAndroid='transparent'
          style={ styles.textinput_field }
          onChangeText={ (text) => this.props.onChangeText(text) }
          value={ this.props.getValue() }
          secureTextEntry={ secureTextEntry }
          placeholder={ this.props.placeholder }
        />
        { icon }
      </View>
    );
  }
}

const styles = {
  icon: {
    color: '#4b5764',
    position: 'absolute',
    top: 8,
    left: 8
  },
  textinput: {
    alignSelf: 'stretch',
    marginRight: 10,
    marginLeft: 10,
    height: 40,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#fff'
  },
  textinput_top: {
    marginBottom: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  textinput_bottom: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  textinput_field: {
    paddingLeft: 40
  }
};
