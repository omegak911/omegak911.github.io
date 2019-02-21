import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Github, Html5, Node, ReactLogo } from 'styled-icons/fa-brands';
import { Css3 } from 'styled-icons/boxicons-logos';

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
          {techLeft.map(tech => 
            <div key={tech}>
              {tech}
            </div>
          )}
        </TechLeftContainer>

        <TechCenterContainer>
          <Fragment>
            <ReactLogo />
            <Css3 />
            <Node />
            <Github />
            <Html5 />
          </Fragment>
        </TechCenterContainer>

        <TechRightContainer>
          {techRight.map(tech => 
            <div key={tech}>
              {tech}
            </div>
          )}
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
  background-color: white;
  margin: 10px;
  width: 20%;
  height: calc(100% - 20px);
`;

const TechLeftContainer = styled.div`
  ${LeftRightStyles}
`;

const TechRightContainer = styled.div`
  ${LeftRightStyles}
`;

const TechCenterContainer = styled.div`
  width: 80%;
  height: 100%;
`;

export default TechStack;