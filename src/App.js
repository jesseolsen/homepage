import React, { Component } from 'react';

import Routing from './components/Routing';
import logo from './logo.svg';
import Hero from 'grommet/components/Hero';

import { Clock } from 'grommet2';
import { Grommet } from 'grommet2';

class App extends Component {
  render() {
    return (
      <Grommet>
        <div class="navbar">
          <a href="/">
            <Clock
              type="digital"
              size="small"
              hourLimit="12"
              precision="minutes"
            />
          </a>
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
      </Grommet>
    );
  }
}

export default App;
