import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Camera from 'react-native-camera';

export default class CameraOV extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
             <Text style={styles.home}  onPress={this.goTOHome.bind(this)}>
               Home
             </Text>
           <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
              <Image source={require('../image/cap.png')}/>
            </TouchableOpacity>
       </Camera>
      </View>
    );
  }
  goTOHome(){
    Actions.home()
  }
  takePicture() {
   this.camera.capture()
     .then((data) => console.log(data))
     .catch(err => console.error(err));
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  capture: {
    flex: 0,
    margin: 40,
    alignItems: 'center'
  },
  home: {
    flex: 1,
    color: '#fff',
    marginTop:17,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: '700'
  }
});
