import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndOdd from './components/Topics/EvenAndOdd';
import FilterObject from './components/Topics/FilterObject';
import FilterString from './components/Topics/FilterString';
import Palindrome from './components/Topics/Palindrome';

class App extends Component {
  render() {
    return (
      <div>
        <TopicBrowser />
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
      </div>
    );
  }
}

export default App;
