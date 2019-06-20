import React from 'react';
import styled from 'styled-components';

const ApplicationDetail = ({ detail }) => {

  const renderLink = (url, text) => {
    return (
      <div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer">
          {text}
        </a>
      </div>
    )
  }

  return (
    <StyledApplicationDetail>
      <div>{detail.techStack}</div>
      {detail.url && renderLink(detail.url, 'Website')}
      {renderLink(detail.code, 'Codebase')}
      {detail.special && renderLink(detail.special[0][1], detail.special[0][0])}
      {detail.special && detail.special[1] && renderLink(detail.special[1][1], detail.special[1][0])}
    </StyledApplicationDetail>
  )
}

const StyledApplicationDetail = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ApplicationDetail;