import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [0, 2, 4, 6, 8],
            oddArray: [ 1, 3, 5, 7, 9],
            userInput: ""
        }
    }
    setInput(newVal) {
        this.setState({
            userInput: newVal
        })
    }
    separateInput() {
        if (this.state.userInput) {
            this.setState({
                evenArray: this.state.userInput.split(",").map(a => parseInt(a)).filter(a => a % 2 === 0),
                oddArray: this.state.userInput.split(",").map(a => parseInt(a)).filter(a => a % 2 === 1)
            })
        }
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={e => this.setInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.separateInput()}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}

export default EvenAndOdd;
