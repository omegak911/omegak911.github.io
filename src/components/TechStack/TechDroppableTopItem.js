import React, { Component } from 'react';
import styled from 'styled-components';

class TechDroppableTopItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.tech === this.props.tech);
  }

  render() {
    console.log('droppable droppable')
    let { tech } = this.props;
    return (
      <div>
        <img src={tech.image} alt=""/>
        <TechName>{tech.correct ? tech.text : ''}</TechName>
      </div>
    )
  }
}

const TechName = styled.div`
  background: grey;
  text-align: center;
  border: 2px solid black;
  height: 20px;
  width: 80px;
`;

export default TechDroppableTopItem;