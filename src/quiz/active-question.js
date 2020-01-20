import React, { Component } from 'react';

export default class ActiveQuestion extends Component {
    constructor(props) {
        super(props);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion(choice) {
        this.props.next(choice);
    }

    render() {
        return (
            <section className="hero is-fullheight is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">
                            Question {this.props.questionNumber}
                        </h1>
                        <a onClick={() => this.nextQuestion(0)}><h2 className="subtitle is-3">{this.props.options[0]}</h2></a>
                    <a onClick={() => this.nextQuestion(1)}><h2 className="subtitle is-3">{this.props.options[1]}</h2></a>
                    <a onClick={() => this.nextQuestion(2)}><h2 className="subtitle is-3">{this.props.options[2]}</h2></a>
                    <a onClick={() => this.nextQuestion(3)}><h2 className="subtitle is-3">{this.props.options[3]}</h2></a>
                    </div>
                </div>
            </section>
        );
    }
}