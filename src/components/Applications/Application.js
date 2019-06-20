import React from 'react';
import styled from 'styled-components';

const Application = ({ app }) => 
  <div>
      <StyledImg src={app.image} alt="app preview" style={{ width: '100%' }}/>
  </div>

const StyledImg = styled.img`
  border: 1px solid black;
`;

export default Application;