import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

import { GlobalStyle } from './CoreStyles';
import Intro from './Intro';
import Nav from './Nav';
import AboutHim from './AboutHim';
import Applications from './Applications/Applications';
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
        this.showRestOfPortfolio();
      }
    })
  }

  showRestOfPortfolio = () => {
    if (!this.state.showApp) {
      this.setState({ showApp: true, showTech: true  });
    }
  }
  
  render() {
    let { showApp, showTech } = this.state;
    return (
      <div className="App">
        <GlobalStyle />
        <Nav showRestOfPortfolio={this.showRestOfPortfolio}/>
        <Intro />
        <AboutHim />
        <OnVisible >
          <Applications display={showApp}/>
        </OnVisible>
        <OnVisible >
          <TechStack display={showTech}/>
        </OnVisible>
        <Contact />
      </div>
    );
  }
}

export default App;
