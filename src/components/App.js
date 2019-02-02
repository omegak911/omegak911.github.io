import React, { Component } from 'react';

import { GlobalStyle } from './CoreStyles';
import Intro from './Intro';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default App;
