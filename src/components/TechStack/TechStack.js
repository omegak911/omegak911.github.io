import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TechDraggable from './TechDraggable';
import TechDroppableTop from './TechDroppableTop';

import {
  css3,
  github, 
  html5, 
  javascript,
  jest, 
  jQuery,
  mongoDB,
  mySQL,
  nodeJS,
  postgreSQL,
  react,
  redux,
  socketIO,
  webpack
} from '../../assets/iconLinks';

class TechStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techDraggables: [
        "CSS",
        "Git",
        "HTML",
        "JavaScript",
        "Jest",
        "jQuery",
        "MongoDB",
        "MySQL",
        "Node.js",
        "PostgreSQL",
        "React",
        "Redux",
        "Socket.IO",
        "Webpack",
      ],
      techDroppables: [
        {
          image: css3,
          correct: false,
          text: 'CSS3'
        },
        {
          image: github,
          correct: false,
          text: 'git'
        },
        {
          image: html5,
          correct: false,
          text: 'HTML5'
        },
        {
          image: javascript,
          correct: false,
          text: 'JavaScript'
        },
        {
          image: jest,
          correct: false,
          text: 'Jest'
        },
        {
          image: jQuery,
          correct: false,
          text: 'jQuery'
        },
        {
          image: mongoDB,
          correct: false,
          text: 'MongoDB'
        },
        {
          image: mySQL,
          correct: false,
          text: 'MySQL'
        },
        {
          image: nodeJS,
          correct: false,
          text: 'Node.js'
        },
        {
          image: postgreSQL,
          correct: false,
          text: 'PostgreSQL'
        },
        {
          image: react,
          correct: false,
          text: 'React'
        },
        {
          image: redux,
          correct: false,
          text: 'Redux'
        },
        {
          image: socketIO,
          correct: false,
          text: 'Socket.IO'
        },
        {
          image: webpack,
          correct: false,
          text: 'Webpack'
        },
      ],
      additional: [
        'Agile Methodologies',
        'AWS EC2/S3/RDS',
        'AngularJS',
        'RESTful API Architecture',
        'Microservices Artchitecture',
        'Passport.js',
        'Vue',
      ]
    }
  }

  onDragEnd = (result) => {
    console.log('hey!: ', result);
  }

  render(){
    let { techDraggables, techDroppables, additional } = this.state;
    return (
      <DragDropContext onDragEnd={() => console.log('hey')}>
        <TechContainer id="tech">
          <TechDraggable techDraggables={techDraggables} />

          <TechDroppableWrapper>
            
            <div>
              <h2>TechStack</h2>
              <div>Here lies various techs I've used over the past year.  See if you can match all the text to the right logo!  Drag and drop the text to its respective logo.</div>
            </div>

            <div><button>Solve</button><button>UnSolve</button></div>

            <TechDroppableTop techDroppables={techDroppables} />
            <TechCenterBottomContainer>
              Additional mentions:
              {additional.map(tech =>
                <div key={tech}>
                  {tech}
                </div>
              )}
            </TechCenterBottomContainer>
          </TechDroppableWrapper>
        </TechContainer>
      </DragDropContext>
    )
  }
}

const StyledTechItem = styled.div`

`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TechContainer = styled.div`
  background-color: rgba(238,238,238,1);
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  & img {
    height: 80px;
    width: 80px;
  }
  animation: ${fadeIn} 2s linear;
`;

const TechDroppableWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TechCenterStylez = `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  > div {
    padding: 5px;
  }
`;



const TechCenterBottomContainer = styled.div`
  ${TechCenterStylez}
  margin-top: auto;
`

export default TechStack;