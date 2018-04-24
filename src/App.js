import React, { Component } from 'react';
import Tickers from './components/Tickers.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cryptocurrency Baby</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
