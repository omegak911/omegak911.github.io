import React from 'react';
import styled from 'styled-components';

import { StandardComponentStyles } from './CoreStyles';

import GithubIcon from '../assets/GitHub.png';
import LinkedInIcon from '../assets/LinkedIn.png';
import GmailIcon from '../assets/Gmail.png';

const Contact = (props) =>
  <ContactContainer id="contact">
    <h2>Let's Connect!</h2>
    <div>
      <a href="https://github.com/omegak911" target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt="github"/>
      </a>
      <a href="mailto:xkinchanx@gmail.com">
        <img src={GmailIcon} alt="gmail"/>
      </a>
      <a href="https://www.linkedin.com/in/thekinchan/">
        <img src={LinkedInIcon} alt="linkedIn"/>
      </a>
    </div>
  </ContactContainer>

const ContactContainer = styled.div`
  ${StandardComponentStyles}
  flex-direction: column;
  > div {
    display: flex;
    width: 30%;
    justify-content: space-between;
    @media (max-width: 700px) {
      flex-direction: column;
      width: auto;
    } 
  }
`
export default Contact;