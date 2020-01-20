import React from 'react';

export default (props) => {
    return (
        <section className="hero is-fullheight is-primary is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">
                        Personality Quiz
                    </h1>
                    <a onClick={props.beginQuiz}>Click here to begin</a>
                </div>
            </div>
        </section>
    );
};