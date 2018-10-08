import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import Navbar from './components/Navbar'
import MostViewedContainer from './containers/MostViewedContainer'
import TechViewContainer from './containers/TechViewContainer'
import MovieReviewContainer from './containers/MovieReviewContainer'



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Readus</h1>
        </header>
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={MostViewedContainer} />
            <Route exact path='/techstories' component={TechViewContainer} />
            <Route exact path='/moviereview' component={MovieReviewContainer} />
          </div>
        </Router>

      </div>
    );
  }
}


export default App;
