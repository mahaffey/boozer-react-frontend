import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './Navigation'
import './App.css'
import Home from './Home'
import CocktailsRouter from './CocktailsRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>

          <Router>
              <div>
                  <div>
                      <Navigation/>
                      <Route exact path='/' component={Home} />
                      <Route path='/cocktails' component={CocktailsRouter} />
                  </div>

              </div>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
