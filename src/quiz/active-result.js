import React from 'react';
import {LionResults, OtterResults, GoldenRetrieverResults, BeaverResults} from './result-store';

export default function (props) {
    if (props.winner === 'Lion'){
        return (
            <div className="container">
                <h1 className="title is-1">You are a {props.winner}</h1>
                {LionResults.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
                <a onClick={props.startOver}><h2 className="subtitle is-3">Start Over</h2></a>
            </div>
        );
    } else if (props.winner === 'Otter'){
        return (
            <div className="container">
                <h1 className="title is-1">You are a {props.winner}</h1>
                {OtterResults.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
                <a onClick={props.startOver}><h2 className="subtitle is-3">Start Over</h2></a>
            </div>
        );
    } else if (props.winner === 'GoldenRetriever'){
        return (
            <div className="container">
                <h1 className="title is-1">You are a Golden Retriever</h1>
                {GoldenRetrieverResults.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
                <a onClick={props.startOver}><h2 className="subtitle is-3">Start Over</h2></a>
            </div>
        );
    } else if (props.winner === 'Beaver'){
        return (
            <div className="container">
                <h1 className="title is-1">You are a {props.winner}</h1>
                {BeaverResults.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
                <a onClick={props.startOver}><h2 className="subtitle is-3">Start Over</h2></a>
            </div>
        );
    }
}