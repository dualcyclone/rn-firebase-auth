'use strict';
import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b5764'
  },
  text: {
    color: '#fff'
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
  },
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
