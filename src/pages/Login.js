import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './components/LoginForm';

export default class Login extends Component {
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={style.principal}>
        <View style={style.logoContainer}>
          <Image style={style.logo} source={require('../image/osvaldo.png')}/>
        </View>
        <View style={style.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const style = StyleSheet.create({
  principal: {
    backgroundColor: '#82d12d',
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 330,
    height: 120
  }
});
