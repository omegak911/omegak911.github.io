import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import { GlobalStyle } from './CoreStyles';
import Intro from './Intro';
import Nav from './Nav';
import Applications from './Applications';
import Contact from './Contact';
import TechStack from './TechStack/TechStack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showApp: false,
      showTech: false,
    }
  }

  componentWillMount() {
    setDefaultProps({
      percent: 20,
      onChange: () => {
        if (!this.state.showApp) {
          this.setState({ showApp: true });
        } else {
          this.setState({ showTech: true });
        }
      }
    })
  }
  
  render() {
    let { showApp, showTech } = this.state;
    return (
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Intro />
        <OnVisible >
          {showApp && <Applications />}
        </OnVisible>
        <OnVisible >
          {showTech && <TechStack />}
        </OnVisible>
        <Contact />
      </div>
    );
  }
}

export default App;
