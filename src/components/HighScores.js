import React, { Component } from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {COLOR, ThemeProvider, Button } from 'react-native-material-ui';

const window = Dimensions.get('window');

export default class HighScoresScreen extends Component {
  
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'High Scores',
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{ height: window.height }}>
        </View>
      );
    }
  }

  //Styles
  const styles = StyleSheet.create({
  });