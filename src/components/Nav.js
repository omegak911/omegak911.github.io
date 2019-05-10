import React, { Component } from 'react';
import styled from 'styled-components';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
      hoveredTimes: 0
    }
  }

  toggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer, hoveredTimes: this.state.hoveredTimes + 1 }, () => {
      if (this.state.hoveredTimes === 1) {
        this.props.showRestOfPortfolio();
      }
    });
  }

  render() {
    let { showDrawer } = this.state;
    return (
      <NavContainer>
        <DrawerTab onMouseEnter={this.toggleDrawer} style={{ display: showDrawer ? 'none' : 'flex'}}>
          Nav
        </DrawerTab>
        <NavDrawer onMouseLeave={this.toggleDrawer} style={{ display: showDrawer ? 'flex' : 'none'}}>
          <a href="#top">Top</a>
          <a href="#tech">TechStack</a>
          <a href="#applications">Applications</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </NavDrawer>
      </NavContainer>
    )
  }
}

const DrawerTab = styled.div`
  background-color: black;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 1px 2px lightgrey;
  height: 20px;
  width: 50px;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const NavDrawer = styled.div`
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, rgba(19,19,19,1) 0%,rgba(17,17,17,1) 14%,rgba(17,17,17,1) 14%,rgba(0,0,0,1) 75%,rgba(89,89,89,1) 98%,rgba(76,76,76,1) 100%);
  height: 100%;
  & a {
    text-decoration: none;
    font-size: 1.5em;
    color: white;
    font-weight: 500;
    &:hover {
      text-shadow: 2px 2px 2px grey;
      background-color: rgb(30,30,30);
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 99999;
`;

export default Nav;