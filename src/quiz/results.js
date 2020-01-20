import React, { Component } from 'react';
import ActiveResult from './active-result';

export default class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="hero is-fullheight is-light is-bold has-text-centered">
                <div className="hero-body">
                    <ActiveResult
                        winner={this.props.winner}
                        startOver={this.props.startOver}
                    />
                </div>
            </section>
        )
    }
}