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

  render() {
    const { applications, detail } = this.state;

    const appImages = applications.map((app, i) => (
      <Application key={i} app={app} updateDetail={this.updateDetail}/>
    ));

    return (
      <AppContainer id="applications">
        <MidAppContainer>
          <div>
            <h2>&nbsp; MVP Applications</h2>
            <MVPApplications onWheel={this.detectWheel}>
              <Coverflow
                height={400}
                width={1500}
                displayQuantityOfSide={2}
                enableScroll={true}
                clickable={false}
                active={0}
              >
                {appImages}
              </Coverflow>
          </MVPApplications>
          {detail && <ApplicationDetail detail={detail}/>}
         </div>
       </MidAppContainer>
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
  justify-items: center;
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

export default Applications;