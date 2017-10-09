import React from 'react';
import { StyleSheet, Text, View, DrawerLayoutAndroid, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {COLOR, ThemeProvider, Button, Card } from 'react-native-material-ui';
import api from '../api/index';

const window = Dimensions.get('window');


const Questions = (props) => {
  return (
    <Card raised style={{container: styles.gameCard}}>
    <Text style={styles.gameTitle}>Ngikuphicaphica: </Text>
    <View style={styles.horizontalLine} />
    <Text style={styles.gameQuestion}>{props.state.nextQuestion.question}</Text>
    <Button raised primary style={{ container: styles.gameOption }} text={props.state.nextQuestion.answers[0].value} onPress={() => props.handleAnswerSelection(props.state.nextQuestion.answers[0].correct )} />
    <Button raised primary style={{ container: styles.gameOption }} text={props.state.nextQuestion.answers[1].value} onPress={() => props.handleAnswerSelection(props.state.nextQuestion.answers[1].correct )} />
    <Button raised primary style={{ container: styles.gameOption }} text={props.state.nextQuestion.answers[2].value} onPress={() => props.handleAnswerSelection(props.state.nextQuestion.answers[2].correct )} />
    <Button raised accent style={{ container: styles.gameOption}} text="Skip" />
  </Card>
  )
}

const NewGame = (props) => {
  return (
    <Card raised style={{container: styles.gameCard}}>
          <Button raised accent style={{ container: styles.gameOption}} text="New Game" />
    </Card>
  )
}

export default class GameScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nextQuestion: api.getRandomQuestion(),
      score: 0,
      remainingQuestions: 10
    }

    this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
  }

  handleAnswerSelection(correct) {
    var newScore = this.state.score;
    var newRemainingQuestions = this.state.remainingQuestions - 1;
    var newNextQuestion = api.getRandomQuestion();
    if (correct == true) {
      newScore = this.state.score + 1;
    }

    this.setState({nextQuestion: newNextQuestion, score: newScore, remainingQuestions: newRemainingQuestions}, function() { this.render() });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Game',
    }
  }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{ height: window.height }}>
          { this.state.remainingQuestions > 0 ? <Questions state={this.state} handleAnswerSelection={this.handleAnswerSelection } /> : <NewGame />}
          
          <Card raised style={{container: styles.gameCard}}>
            <Text style={styles.gameTitle}>Score Card: </Text>
            <View style={styles.horizontalLine} />
            <Text style={styles.gameQuestion}>Score: {this.state.score}</Text>
          </Card>
        </View>
      );
    }
  }

  //Styles
  const styles = StyleSheet.create({
    gameCard: {
      marginTop: 20,
      marginBottom: 10,
      padding: 10
    },
    gameTitle: {
      fontSize: 25,
      paddingBottom: 10
    },
    gameQuestion: {
      fontSize: 20,
      color: COLOR.grey500,
      paddingBottom: 10
    },
    gameOption: {
      marginBottom: 10,
      marginTop: 10
    },
    horizontalLine: {
      borderBottomColor: COLOR.grey400,
      borderBottomWidth: 0.5,
      marginBottom: 15
    }
  });