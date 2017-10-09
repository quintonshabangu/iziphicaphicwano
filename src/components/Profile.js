import React from 'react';
import { StyleSheet, Text, View, Button, DrawerLayoutAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
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