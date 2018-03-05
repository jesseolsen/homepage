import React, { Component } from 'react';

import Routing from './components/Routing';
import logo from './logo.svg';
import Hero from 'grommet/components/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <div class="navbar">
          <a href="/">Home</a>
          <a href="/languages">Languages</a>
          <a href="/technologies">Technologies</a>
          <a href="/about">About</a>
        </div>
        <Hero>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Jesse Olsen</h1>
          </header>
        </Hero>
        <Routing />
      </div>
    );
  }
}

export default App;
