import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import About from './About';
import Blog from './Blog';
import Food from './Food';
import Home from './Home';
import Movie from './Movie';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/food">Food</Link>
          <Link to="/movie">Movie</Link>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/food" component={Food} />
      <Route path="/movie" component={Movie} />
      <Route
        path="/about"
        component={
            () => (<About name="Zach" />)}
      />
    </div>
  </Router>
);

export default App;
