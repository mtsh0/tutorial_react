import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'




class App extends Component {
  render() {
    return (
      <div>
        <div className="react-icon">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <Header />
      </div>
    );
  }
}

export default App;
