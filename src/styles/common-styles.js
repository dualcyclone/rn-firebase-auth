'use strict';
import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  body_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    alignItems: 'center'
  },
  textinput: {
    height: 40, 
    borderColor: 'red', 
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'stretch'
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
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
    color: '#0485A9',
    fontSize: 14
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
  },
  spinnerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },
  spinner: {
    flex: 1
  }
});
