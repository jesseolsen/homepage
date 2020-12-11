import React, { Component } from 'react';
import {
  Box,
  Clock,
  Grommet,
  Image,
  Text,
} from 'grommet';

import logo from './images/logo.svg';
import Routing from './components/Routing';

class App extends Component {
  render() {
    return (
      <Grommet>
        <Box direction='row' className="navbar">
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
          <a href="/">
            <Box align='stretch'>
              <Text size='xxlarge'>Jesse Olsen</Text>
            </Box>
          </a>
          <a href="https://reactjs.org">
            <Image background-size='small' src={logo} className="React-logo" alt="logo" />
          </a>
        </Box>
        <header className="App-header" />
        <Routing />
      </Grommet>
    );
  }
}

export default App;
