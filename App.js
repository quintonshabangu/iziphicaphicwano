import React, { Component } from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import ProfileScreen from './src/components/Profile';
import GameScreen from './src/components/Game';
import HighScoresScreen from './src/components/HighScores';
import AboutScreen from './src/components/About';
import {COLOR, ThemeProvider, Button } from 'react-native-material-ui';

const window = Dimensions.get('window');

const App =  StackNavigator({
        Home: { screen: HomeScreen },
        Profile: { screen: ProfileScreen },
        Game: { screen: GameScreen },
        HighScores: { screen: HighScoresScreen },
        About: { screen: AboutScreen }
    },
    {
        navigationOptions : {
        headerTintColor: COLOR.white,
        headerStyle: {
            backgroundColor: COLOR.green100,
            height: 70
            }
        }
    }
);

const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.red500
  },
  Button: {
        container: { height: 50, alignSelf: "center", width: (window.width -40) }
  },
};

class Main extends Component {
  render() {
      return (
          <ThemeProvider uiTheme={uiTheme}>
              <App />
          </ThemeProvider>
      );
  }
}

export default Main;