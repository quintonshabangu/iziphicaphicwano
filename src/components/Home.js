import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {COLOR, ThemeProvider, Button } from 'react-native-material-ui';

const window = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Home',
        headerRight: <Button primary text="Profile" onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
      }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{ height: window.height }}>
          <Image source={require('../../media/landscape.png')} style={styles.homeLogo} />

          <View style={ styles.buttonsGroup }>
            <Button raised primary style={{ container : styles.homeButton }} text='New Game' onPress={() => navigate('Game') } />
            <Button raised primary style={{ container : styles.homeButton }} text='High Scores' onPress={() => navigate('HighScores') } />
            <Button raised primary style={{ container : styles.homeButton }} text='About' onPress={() => navigate('About') } />
          </View>
        </View>
      );
    }
  }

  //Styles
  const styles = StyleSheet.create({
    homeLogo: {
      top: 150,
      height: 60, 
      left: 0,  
      width: window.width
    },

    buttonsGroup: {
      position: 'absolute', 
      height: 50, 
      left: 0, 
      bottom: 75 * 3, 
      width: window.width
    },
    
    homeButton: {
      height: 50, 
      alignSelf: "center", 
      width: (window.width -20),
      marginBottom: 20
    },
});