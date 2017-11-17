/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './splash';
import Login from './src/components/Login/Login';
import TestComponent from './src/components/TestComponent/TestComponent';
import Component4 from './src/components/Component4/Component4';
import Component5 from './src/components/Component5/Component5';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

state = {
  data: [],
}

  render() {
    return (
      <View style={styles.container}>
      <Component5 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
