import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MostViewedContainer from './containers/MostViewedContainer'




class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Readus</h1>
        </header>
          <MostViewedContainer/>
      </div>
    );
  }
}

export default App;
