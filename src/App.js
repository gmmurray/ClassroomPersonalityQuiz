import React, { Component } from 'react';
import './sass/styles.scss';
import Intro from './quiz/intro.js';
import InProgress from './quiz/in-progress';
import Results from './quiz/results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: false,
      complete: false,
      winner: ''
    };
  }

  render() {
    if (!this.state.testing && !this.state.complete) {
      return (
        <Intro 
          beginQuiz={() => this.setState({testing: true})}
        />
      )
    } else if (this.state.testing && !this.state.complete){
      return (
        <InProgress
        endQuiz={(win) => this.setState({testing: false, complete: true, winner: win})}
        />
      )
    } else if (!this.state.testing && this.state.complete) {
      return (
        <Results 
          winner={this.state.winner}
          startOver={() => this.setState({testing: false, complete: false})}
        />
      )
    }
  }
}
