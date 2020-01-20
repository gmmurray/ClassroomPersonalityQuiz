import React, { Component, Fragment } from 'react';
import ActiveQuestion from './active-question';
import Questions from './question-store';

const answers = ['Lion', 'Beaver', 'Otter', 'GoldenRetriever'];
export default class InProgress extends Component {
    constructor(props) {
        super(props);
        const initialIndex = 0;
        this.state = {
            index: initialIndex,
            currentQuestion: Questions[initialIndex],
            firstItem: 0,
            lastItem: Questions.length - 1,
            score: {
                Lion: 0,
                Beaver: 0,
                Otter: 0,
                GoldenRetriever: 0
            },
            winner: 0
        };
        this.updateScore = this.updateScore.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.getWinner = this.getWinner.bind(this);
        this.convertIndexToKey = this.convertIndexToKey.bind(this);
    }

    updateScore(choice) {
        let answer = answers[choice];
        this.setState(prevState => {
            return {
                score: {
                    ...prevState.score,
                    [answer]: prevState.score[answer] + 1,
                }
            }
        });
    }

    nextQuestion(choice) {
        if (this.state.index < 9) {
            this.updateScore(choice);
            this.setState({ currentQuestion: Questions[this.state.index + 1], index: this.state.index + 1 });
            
        } else {
            this.updateScore(choice);
            this.props.endQuiz(this.getWinner());
        }
    }

    getWinner() {
        let indexOfWinner = 0;
        for (let i = 0; i < 4; i ++){
            if (this.state.score[this.convertIndexToKey(i)] > this.state.score[this.convertIndexToKey(indexOfWinner)]){
                indexOfWinner = i;
            }
        }
        return this.convertIndexToKey(indexOfWinner);
    }

    convertIndexToKey(index){
        return answers[index];
    }

    render() {

        return (
            //<Fragment>
                <ActiveQuestion
                    questionNumber={this.state.currentQuestion.number}
                    options={this.state.currentQuestion.options}
                    next={(choice) => this.nextQuestion(choice)}
                />

                /*{ <p>Lion: {this.state.score['Lion']}</p>
                <p>Beaver: {this.state.score['Beaver']}</p>
                <p>Otter: {this.state.score['Otter']}</p>
                <p>Golden Retriever: {this.state.score['GoldenRetriever']}</p>
                <p>Winner: {this.getWinner()}</p> }*/
            //</Fragment>
        );
    }
}
