/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Login from "./src/pages/Login";
import Camera from "./src/pages/Camera";
import Home from "./src/pages/Home";

export default class SeuOsvaldo extends Component {
  render() {
    return (
      //Roteador das telas.
      <Router>
        <Scene key="root" type="reset" hideNavBar>
          <Scene key="login" component={Login} initial/>
          <Scene key="home" component={Home}/>
          <Scene key="camera" component={Camera}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('SeuOsvaldo', () => SeuOsvaldo);
