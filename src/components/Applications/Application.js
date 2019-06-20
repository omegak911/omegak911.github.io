import React, { Component } from 'react';
import styled from 'styled-components';

class Application extends Component {
  componentDidMount() {
    let { app, updateDetail } = this.props;
  }

  render() {
    let { app } = this.props;
    return (
      <div>
          <StyledImg src={app.image} alt="app preview" style={{ width: '100%' }}/>
      </div>
    )
  }
}

const StyledImg = styled.img`
  border: 1px solid black;
`;

const Modal = styled.div`
  align-items: center;
  background-color: rgba(181, 181, 181, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 400;
`

const ModalInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 80%;
  > a { 
    color: rgb(66, 158, 250);
  }
`;

const TeckStack = styled.div`
  color: gray;
`;

export default Application;