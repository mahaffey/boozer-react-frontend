import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Navigation from './Navigation'
import './App.css'
import Home from './Home'




class App extends Component {

render () {
    return (
      <div className="App">
          <div>
          <Router>
              <div>
                  <div>
                      <Navigation />
                      <Route exact path='/' component={ Home } />
                  </div>
              </div>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
