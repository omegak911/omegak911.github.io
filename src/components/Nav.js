import React from 'react';
import styled from 'styled-components';

const Nav = (props) =>
  <NavContainer>
    <NavDrawer>
      <NavTag>
        <NavTagTop />
        <a href="#top">Top</a>
        <div />
      </NavTag>
      <NavTag>
        <NavTagTop />
          <a href="#about">About Him</a>
        <div />
      </NavTag>
      <NavTag>
        <NavTagTop />
        <a href="#applications">Applications</a>
        <div />
      </NavTag>
      <NavTag>
        <NavTagTop />
        <a href="#tech">TechStack</a>
        <div />
      </NavTag>
      <NavTag>
        <NavTagTop />
        <a href="#contact">Contact</a>
        <div />
      </NavTag>

      {/* <a href="#blog">Blog</a> */}
      
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
  height: 50px;
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
  height: 70px;
  position: fixed;
  min-width: 600px;
  transition: 0.5s;
  top: -50px;
  width: 100%;
  z-index: 99999;
  &:hover {
    top: 0px;
  }
`;

const NavTag = styled.div`
  position: relative;
  text-align: center;
  width: 125px;
  & div {
    position: absolute;
    height: 1px;
    width: 0px;
    transition: all 500ms ease-in-out;
    background-color: white;
  }
  &:hover {
    & div {
      width: 100%;
    }
    & a {
      font-size: 1.3em;
      padding: 0.2em;
    }
  }
  > a {
    &:hover {
      background-color: transparent;
    }
  }
`;

const NavTagTop = styled.div`
  right: 0px;
`;

export default Nav;