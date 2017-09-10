import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {
                    number: 2,
                    name: 'Tommy',
                    age: 23,
                    hobby: 'Biking',
                    animal: 'Monkey'
                },
                {
                    number: 1,
                    name: 'Michael',
                    age: 25,
                    hobby: 'Climbing',
                    rock: 'Sandstone'
                },
                {
                    number: 3,
                    name: 'Collin',
                    age: 17,
                    emotions: 'Openbook',
                },
                {
                    number: 4,
                    name: 'Carson',
                    age: 15,
                    emotions: 'Closed',
                    videoGames: 'Yes'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    setInput(val) {
        this.setState({
            userInput: val
        })
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={() => {}}></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectPB">{this.state.userInput}</span>
            </div>
        );
    }
}

export default FilterObject;
