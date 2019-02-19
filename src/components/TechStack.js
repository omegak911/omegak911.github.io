import React, { Component } from 'react';
import styled from 'styled-components';

class TechStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techLeft: [
        "Agile Methodologies",
        // "AngularJS",
        "CSS",
        "Express",
        "Git",
        "HTML",
        "Jest",
        "jQuery",
        "MongoDB",
        "MySQL",
        "Node.js",
      ],
      techRight: [
        // "Passport.js",
        "PostgreSQL",
        "React",
        // "React Native"
        "Redux",
        "RESTful API",
        "Socket.IO",
        "Supertest",
        // "Vue",
        "Webpack",
      ]
    }
  }

  render(){
    let { techLeft, techRight } = this.state;

    return (
      <TechContainer id="tech">
        <TechLeftContainer>

        </TechLeftContainer>

        <TechCenterContainer>

        </TechCenterContainer>

        <TechRightContainer>
        
        </TechRightContainer>
      </TechContainer>
    )
  }
}

const TechContainer = styled.div`
  background-color: grey;
  display: flex;
  height: 100vh;
  width: 100%;
`;

const LeftRightStyles = `
  
`

const TechLeftContainer = styled.div`

`;

const TechRightContainer = styled.div`

`;

const TechCenterContainer = styled.div`

`

export default TechStack;