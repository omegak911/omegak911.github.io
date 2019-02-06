import React from 'react';
import styled from 'styled-components';

import { StandardComponentStyles } from './CoreStyles';

import GithubIcon from '../assets/GitHub.png';
import LinkedInIcon from '../assets/LinkedIn.png';
import GmailIcon from '../assets/Gmail.png';

const Contact = (props) =>
  <ContactContainer id="contact">
    <h2>Let's Connect!</h2>

    {''/*

      github icon
      email icon
      linkedin icon

    */}
    <div>
      <img src={GithubIcon} alt="github"/>
      <img src={LinkedInIcon} alt="linkedIn"/>
      <img src={GmailIcon} alt="gmail"/>
    </div>


  </ContactContainer>

const ContactContainer = styled.div`
  ${StandardComponentStyles}
  flex-direction: column;
  > div {
    display: flex;
  }
`
export default Contact;