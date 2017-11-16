import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Components/Game'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Tic Tac Toe</h1>
          <Game/>
      </div>
    );
  }
}

export default App;
