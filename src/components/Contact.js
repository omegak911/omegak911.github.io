import React from 'react';
import styled from 'styled-components';

import { StandardComponentStyles } from './CoreStyles';

import GithubIcon from '../assets/GitHub.png';
import LinkedInIcon from '../assets/LinkedIn.png';

const Contact = (props) =>
  <ContactContainer id="contact">
    <InnerContainer>
      <h2>Let's Connect!</h2>
      <div>
        <a href="https://github.com/omegak911" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/thekinchan/">
          <img src={LinkedInIcon} alt="linkedIn"/>
        </a>
      </div>
      <StyledForm action="https://formspree.io/kinchan1287@gmail.com" method="POST">
        <input type="text" name="email" placeholder="your email" />
        <input type="text" name="subject" placeholder="subject" />
        <textarea type="text" name="message" placeholder="message" />
        <button type="submit">send</button>
      </StyledForm>
    </InnerContainer>
  </ContactContainer>

const ContactContainer = styled.div`
  ${StandardComponentStyles}
`;

const InnerContainer = styled.div`
  background-color: white;
  flex-direction: column;
  padding-bottom: 10px;
  text-align: center;
  width: 50%;
  min-width: 400px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 300px;
  & input {
    font-size: 1.1em;
    padding: 3px;
    text-align: center;
  }
  & textarea {
    font-size: 1.1em;
    min-height: 200px;
    text-align: center;
  }
`;

export default Contact;