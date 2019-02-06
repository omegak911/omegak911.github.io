import React, { Component } from 'react';

import { GlobalStyle } from './CoreStyles';
import Intro from './Intro';
import Nav from './Nav';
import Applications from './Applications';
import Contact from './Contact';

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
        <Applications />
        <Contact />
      </div>
    );
  }
}

export default App;
