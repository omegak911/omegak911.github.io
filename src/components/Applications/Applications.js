import React, { Component } from 'react';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';

import { StandardComponentStyles } from '../CoreStyles';
import Application from './Application';
import applications from '../../assets/appData';
import ApplicationDetail from './ApplicationDetail';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications,
      detail: null,
      active: 3
    }
  }

  componentDidMount() {
    this.setState({ detail: applications[this.state.active] });
  }

  updateDetail = (detail) => {
    this.setState({ detail });
  }

  detectWheel = (e) => {
    let { applications, active } = this.state;
    
    if (e.deltaY > 0) {
      active = active === 0 ? active : active - 1;
    } else {
      active = active < applications.length - 1 ? active + 1 : active;
    }

    this.setState({ active, detail: applications[active] });
  }

  handleDirection = (val) => {
    let { active, applications } = this.state;
    if (0 < active && val === -1 || 
      active < applications.length - 1 && val === 1) {
      this.setState({ active: active + val });
    }
  }

  render() {
    const { active, applications, detail } = this.state;
    const appImages = applications.map((app, i) => (
      <Application key={i} app={app} updateDetail={this.updateDetail}/>
    ));

    return (
      <AppContainer id="applications">
        {this.props.display && 
        <MidAppContainer>
            <h2>&nbsp; MVP Applications</h2>
            <MVPApplications onWheel={this.detectWheel}>
              <Coverflow
                height={400}
                width={1500}
                displayQuantityOfSide={2}
                enableScroll={false}
                clickable={false}
                active={active}
              >
                {appImages}
              </Coverflow>
          </MVPApplications>

          <ArrowContainer>
            <StyledArrow 
              direction="leftArrow" 
              onClick={() => this.handleDirection(-1)}
            >
              &#8592;
            </StyledArrow>
            <StyledArrow 
              direction="rightArrow" 
              onClick={() => this.handleDirection(1)}
              style={{
                marginRight: '0px',
                marginLeft: 'auto'
              }}
            >
              &#8594;
            </StyledArrow>
          </ArrowContainer>

          {detail && <ApplicationDetail detail={detail}/>}
       </MidAppContainer>}
     </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  ${StandardComponentStyles}
`;

const MidAppContainer = styled.div`
  background: linear-gradient(135deg, rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgb(30, 30, 30);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

const MVPApplications = styled.div`
  background-color: white;
  border: 5px solid black;
  display: flex;
  height: 50vh;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: center;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const ArrowContainer = styled.div`
  display: flex;
  width: 80%;
`;

const StyledArrow = styled.div`
  font-size: 2em;
  &:hover{ 
    font-weight: bold;
    text-shadow: 2px 2px 2px grey;
    cursor: pointer;
  }
`;

export default Applications;