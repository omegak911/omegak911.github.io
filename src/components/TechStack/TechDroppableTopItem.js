import React, { Component } from 'react';
import styled from 'styled-components';

class TechDroppableTopItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.tech === this.props.tech);
  }

  render() {
    let { correct, image, text } = this.props.tech;
    return (
      <div>
        <TechImage style={{
          backgroundImage: `url(${image})`
        }}>
        </TechImage>
        <TechName>{correct ? text : ''}</TechName>
      </div>
    )
  }
}

const TechImage = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  height: 85px;
  width: 85px;
`;

const TechName = styled.div`
  background: grey;
  text-align: center;
  border: 2px solid black;
  height: 20px;
  width: 80px;
`;

export default TechDroppableTopItem;