import React from 'react';
import styled from 'styled-components';

const Nav = (props) =>
  <NavContainer>
    <NavDrawer>
      <a href="#top">Top</a>
      <a href="#about">About Him</a>
      <a href="#applications">Applications</a>
      <a href="#tech">TechStack</a>
      {/* <a href="#blog">Blog</a> */}
      <a href="#contact">Contact</a>
    </NavDrawer>
    <DrawerTab>
      Nav
    </DrawerTab>
  </NavContainer>

const DrawerTab = styled.div`
  background: linear-gradient(to bottom, rgba(76,76,76,1) 0%, rgba(89,89,89,1) 10%, rgba(0,0,0,1) 14%, rgba(17,17,17,1) 75%, rgba(17,17,17,1) 98%, rgba(19,19,19,1) 100%);
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
  display: flex;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom, rgba(19,19,19,1) 0%,rgba(17,17,17,1) 14%,rgba(17,17,17,1) 14%,rgba(0,0,0,1) 75%,rgba(89,89,89,1) 98%,rgba(76,76,76,1) 100%);
  height: 35px;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  position: fixed;
  min-width: 600px;
  transition: 1s;
  top: -30px;
  width: 100%;
  z-index: 99999;
  &:hover {
    top: 0px;
  }
`;

export default Nav;