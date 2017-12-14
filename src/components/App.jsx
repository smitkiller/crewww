import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header txtTitle="App" />
        <p className="App-intro">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
    );
  }
}

export default App;
