import React from 'react';
import styled from 'styled-components';

import Sphere from './Sphere';
import { StandardComponentStyles } from './CoreStyles';

const Intro = (props) =>
  <IntroContainer id="top">
    <h2 className="name">Kin Chan</h2>
    <Sphere />
  </IntroContainer>

const IntroContainer = styled.div`
  ${StandardComponentStyles}
  ${'' /* background-image: url("https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-138815.jpg"); */}
  background-size: cover;
  color: white;
  font-size: 3em;
  flex-direction: column;
  text-shadow: 5px 5px 10px black;
  > h2 {
    margin: 0px;
  }
  > p {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export default Intro;