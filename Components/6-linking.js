import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  Linking,
} from 'react-native';
import logo from '../assets/ic_launcher.png';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: '#3F5AB0',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              margin: 10,
              color: '#f9f9f9',
            }}
          >
            Intend1
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View
            style={{
              alignItems: 'center',
              width: 240,
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: '#d3d3d3', fontSize: 33 }}>
              Intend Example
            </Text>
          </View>
          <Image
            source={logo}
            style={{ backgroundColor: '#d3d3d3', height: 240, width: 240 }}
          />
          <Button
            onPress={() => {
              Linking.openURL('http://www.163.com');
            }}
          >
            START BROWSER
          </Button>
          <Button
            onPress={() => {
              Linking.openURL('tel:13888888888');
            }}
          >
            START PHONE
          </Button>
        </View>
      </View>
    );
  }
}
const Button = ({ onPress, children }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#d3d3d3',
          alignItems: 'center',
          width: 240,
          margin: 10,
        }}
        onPress={onPress}
      >
        <Text style={{ padding: 5, fontSize: 25 }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
