import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About Me</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route
path="/about"
component={
              () => (<About name="Zach" />) }
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
