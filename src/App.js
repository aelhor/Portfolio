import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/common/nav'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Resume from './components/resume'



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path = '/' exact    component= {Home} />
          <Route path = '/about'     component= {About} />
          <Route path = '/Portfolio' component= {Portfolio} />
          <Route path = '/resume'    component= {Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
