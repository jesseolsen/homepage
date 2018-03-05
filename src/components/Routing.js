import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Languages from './Languages';
import Technologies from './Technologies';
import About from './About';

const Routing = () => (
  <Router>
    <ul>
      {/*
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/topics">Topics</Link>
      <hr />
      */}
      <Route exact path="/" component={Home} />
      <Route path="/languages" component={Languages} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/about" component={About} />
    </ul>
  </Router>
);

export default Routing;
