import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import CocktailsRouter from './CocktailsRouter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>

          <Router>
              <div>
                  <div>
                      <Navigation/>
                      <hr/>
                  </div>
                  <Route exact path='/' component={Home} />
                  <Route path='/cocktails' component={CocktailsRouter} />
              </div>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
