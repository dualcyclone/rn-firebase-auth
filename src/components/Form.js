'use strict';
import React, { Component } from 'react';

import Body from './Body';
import Button from './Button';
import Header from './Header';

export default class Form extends Component {
  render() {
    return (
      <Body>
        <Header text={ this.props.title } />
        { this.props.children }
        <Button
          text={ this.props.formButtonText }
          onpress={ this.props.formButtonOnPress }
          button_styles={ styles.primary_button }
          button_text_styles={ styles.primary_button_text } />
      </Body>
    );
  }
}

const styles = {
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#517399',
    borderRadius: 5,
    alignSelf: 'stretch'
  },
  primary_button_text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18
  }
};
