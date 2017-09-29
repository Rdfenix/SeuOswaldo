import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component {
  render(){
    return(
      <View style={style.container}>
        <StatusBar barStyle="light-content"/>
        <View>
          <TextInput style={style.entrada} returnKeyType="next" underlineColorAndroid='transparent' placeholderTextColor="rgba(47, 79, 79, 0.7)" placeholder='Login' editable={true} onChangeText={(user) => this.setState({user})} ref='user' value={this.state.user}/>
          <TextInput style={style.entrada} returnKeyType="go" secureTextEntry underlineColorAndroid='transparent' placeholderTextColor="rgba(47, 79, 79, 0.7)" placeholder='Senha' editable={true} onChangeText={(password) => this.setState({password})} ref="password" value={this.state.password}/>
          <TouchableOpacity style={style.buttonContainer} onPress={this.Login.bind(this)}>
            <Text style={style.enter}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  constructor(props) {
  super(props);
  this.state = {user: null, password: null};
}
  Login(){
    if (!this.state.user || !this.state.password) return;

    var user = this.state.user;
    var password = this.state.password;

    fetch('http://api.seuoswaldo.com.br/v1/user/validate?user.user=' + user + '&user.password=' + password, {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    }).then((response) => response.json()).then((responseData) => {
      if (responseData.status == 0) {
        Alert.alert('Login feito com sucesso');
        Actions.home();
      } else {
        Alert.alert('Não foi possivel fazer o login !', 'Login ou Senha errados.');
      }
    }).done();
  }
}
const style = StyleSheet.create({
  container: {
    padding: 20
  },
  entrada: {
    height: 40,
    backgroundColor: 'rgba(0, 100, 0, 0.2)',
    marginBottom: 13,
    color: '#fff',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#006400',
    paddingVertical: 13
  },
  enter: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});
