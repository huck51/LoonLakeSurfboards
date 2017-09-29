import React, { Component } from 'react';
import logo from './Loon_lake_logo.png';
import wrench from './wrench.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={wrench} alt="wrench" />
      </div>
    );
  }
}

export default App;
