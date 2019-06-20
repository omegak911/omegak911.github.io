import React, { Component } from 'react';
import styled from 'styled-components';
import Coverflow from 'react-coverflow';

import { StandardComponentStyles } from './CoreStyles';
import Application from './Application';
import applications from '../assets/appData';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications
    }
  }

  render() {
    const { applications } = this.state;
    return (
      <AppContainer>
        <MidAppContainer>
          <div>
            <h2>&nbsp; MVP Applications</h2>
            <MVPApplications>
              <Coverflow
                height={400}
                width={1500}
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
              >
                {applications.map((app, i) =>
                  <Application key={i} app={app}/>
                )}
              </Coverflow>
          </MVPApplications>
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
  box-shadow: 10px 10px 10px rgb(185, 186, 186);
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
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: center;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export default Applications;