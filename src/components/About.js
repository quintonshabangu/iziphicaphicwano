import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, DrawerLayoutAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AboutScreen extends Component {
    static navigationOptions = {
      title: 'About',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Text
          title="This is the profile button"
        />
      );
    }
  }