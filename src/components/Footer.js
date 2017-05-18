'use strict';
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import Button from './Button';

export default class Footer extends Component {
  render() {
    const { display, leftButton, rightButton } = this.props;

    // Hide the footer when configured to hide
    if (!display) {
      return null;
    }

    return (
      <View style={ styles.footer }>
        { leftButton &&
          <Button
            text={ leftButton.text }
            onpress={ leftButton.onPress }
            button_styles={[styles.footer_btn, styles.footer_btn_left]}
            button_text_styles={[styles.footer_btn_text, styles.footer_btn_text_left]}/>
        }
        { rightButton &&
          <Button
            text={ rightButton.text }
            onpress={ rightButton.onPress }
            button_styles={[styles.footer_btn, styles.footer_btn_right]}
            button_text_styles={[styles.footer_btn_text, styles.footer_btn_text_right]}/>
        }
      </View>
    );
  }
}

const styles = {
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    flex: 1
  },
  footer_btn: {
    marginTop: 10,
    padding: 15
  },
  footer_btn_text: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationColor: "#fff",
  },
  footer_btn_left: {
    flex: 3
  },
  footer_btn_text_left: {
    textAlign: 'left'
  },
  footer_btn_right: {
    flex: 2
  },
  footer_btn_text_right: {
    textAlign: 'right'
  }
};
