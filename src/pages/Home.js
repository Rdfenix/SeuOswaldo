import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this.goToCamera.bind(this)}>
            <Image source={require('../image/camera.png')}/>
            <Text style={styles.camera}>
              Camera
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.camera} onPress={this.goToLogin.bind(this)}>LogOut</Text>
        </View>
      </View>
    );
  }
  goToCamera(){
    Actions.camera()
  }
  goToLogin() {
    Actions.login()
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#82d12d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    fontSize:20,
    textAlign: 'center',
    color: '#000'
  }
});
