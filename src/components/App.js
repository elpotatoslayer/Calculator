/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,
    };
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="app">
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
