import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import './App.css';

const App: React.ComponentType = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
