import React from 'react';

export default (props) => {
    return (
        <section className="hero is-fullheight is-info is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">
                        You are a {props.winner}
                    </h1>
                    <a onClick={props.startOver}><h2 className="subtitle is-3">Start Over</h2></a>
                </div>
            </div>
        </section>
    )
}