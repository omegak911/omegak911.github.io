import React from 'react';
import styled from 'styled-components';

const Nav = (props) =>
  <NavContainer>
    <DrawerTab/>
    <NavDrawer>
      <a href="#top">Top</a>
      <a href="#applications">Applications</a>
      <a href="#tech">TechStack</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </NavDrawer>
  </NavContainer>

const DrawerTab = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 50px;
`;

const NavDrawer = styled.div`
  display: none;
  width: 100%;
  background: linear-gradient(to bottom, rgba(19,19,19,1) 0%,rgba(17,17,17,1) 14%,rgba(17,17,17,1) 14%,rgba(0,0,0,1) 75%,rgba(89,89,89,1) 98%,rgba(76,76,76,1) 100%);
  height: 100%;
  z-index: 99999;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  position: fixed;
  width: 100%;
  &:hover {
    >:nth-child(1) {
      display: none;
    }
    >:nth-child(2) {
      display: flex;
    }
  }
`

export default Nav;