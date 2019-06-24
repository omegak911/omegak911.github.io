import React from 'react';
import styled from 'styled-components';

import Sphere from './Sphere';
import { StandardComponentStyles } from './CoreStyles';

const Intro = (props) =>
  <IntroContainer id="top">
    <h2>Welcome!</h2>
    <h3>I'm Kin's Portfolio</h3>
    <Sphere />
  </IntroContainer>

const IntroContainer = styled.div`
  ${StandardComponentStyles}
  background-size: cover;
  color: white;
  font-size: 2em;
  flex-direction: column;
  position: relative;
  text-shadow: 5px 5px 10px black;
  > h2 {
    margin: 0px;
    position: absolute;
    z-index: 10;
  }
  > h3 {
    position: absolute;
    z-index: 10;
  }
  > p {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export default Intro;