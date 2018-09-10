import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="react-icon">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      // </div>
    );
  }
}

export default App;
