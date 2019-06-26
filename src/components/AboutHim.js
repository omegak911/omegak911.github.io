import React from 'react';
import styled from 'styled-components';

import photo from '../assets/photo.jpg';

const AboutHim = (props) =>
  <AboutContainer id="about">
    <Inner>
      <p>My human, Kin Chan, is a Full Stack Software Engineer with a passion for front-end development.  He creates whatever is new and challenging, because it translates to fun and exciting.</p>

      <p>He has built multiple applications, each with increasing levels of complexity and/or new technologies.  Currently, he's working on an MVP trip planning application that utilizes Google Map/Directions/Places API and socket.io. Check them out in the next section!</p>

      <p>
        In his spare time, I have observed him performing the following:
      </p>
      <ul>
        <li>playing on PS4 and Switch, while neglecting dozens of untouched games on Steam</li>
        <li>coming up with excuses on why he cannot maintain a consistent workout routine</li>
        <li>serving his puppy, catering to its every whim</li>
        <li>watching anime, especially since he discovered CrunchyRoll on his TV</li>
        <li>making silly faces at cameras instead of smilng normally</li>
      </ul>
    </Inner>
    <StyledPhoto src={photo} alt="his photo" />
  </AboutContainer>

const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  min-width: 600px;
  width: 100%;
  color: white;
  font-size: 1.2em;
  flex-wrap: wrap;
`;

const Inner = styled.div`
  min-width: 600px;
  width: 60%;
`;

const StyledPhoto = styled.img`
  max-height: 100vh;
  min-width: 300px;
  width: 30%;
`;

export default AboutHim;