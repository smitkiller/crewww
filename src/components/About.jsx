import React, { Component } from 'react';
//import logo from '../logo.svg';
import Header from './Header';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


class About extends Component {
  render() {
    return (
      <div className="App">
      <Header txtTitle="About" />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <li>E-mail </li>
      </div>
    );
  }
}


export default About;
