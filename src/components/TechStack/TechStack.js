import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
      techToAssign: [
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
      techCenter: [
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
    let { techToAssign, techCenter, additional } = this.state;

    return (
      <DragDropContext onDragEnd={() => console.log('hey')}>
        <TechContainer id="tech">
          <Droppable
            droppableId="techLeft"
          >
            {(provided, snapshot) =>
            <TechAvailableContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {techToAssign.map((tech, index) => 
                <Draggable
                  key={tech}
                  draggableId={`${tech}.${index}`}
                  index={index}
                >
                  {(provided, snapshot) =>
                    <StyledTechItem
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                      draggingOver={snapshot.draggingOver}
                      >
                      {tech}
                    </StyledTechItem>
                  }
                </Draggable>
              )}
            </TechAvailableContainer>
            }
          </Droppable>

          <TechCenterWrapper>
            
            <div>
              <h2>TechStack</h2>
              <div>Here lies various techs I've used over the past year.  See if you can match all the text to the right logo!  Drag and drop the text to its respective logo.</div>
            </div>

            <div><button>Solve</button><button>UnSolve</button></div>

            <TechCenterTopContainer>
              {techCenter.map(tech =>
                <Droppable
                  key={tech.text}
                  droppableId={tech.text}
                >
                  {(provided, snapshot) =>
                    <StyledTechItem 
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                      <img src={tech.image} alt=""/>
                      <TechName>{tech.correct ? tech.text : ''}</TechName>
                    </StyledTechItem>
                  }
                </Droppable>
              )}
            </TechCenterTopContainer>

            <TechCenterBottomContainer>
              Additional mentions:
              {additional.map(tech =>
                <div key={tech}>
                  {tech}
                </div>
              )}
            </TechCenterBottomContainer>
          </TechCenterWrapper>
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

const TechName = styled.div`
  background: grey;
  text-align: center;
  border: 2px solid black;
  height: 20px;
  width: 80px;
`;

const TechAvailableContainer = styled.div`
  background-color: white;
  margin: 10px;
  width: 20%;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TechCenterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const TechCenterStylez = `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  > div {
    padding: 5px;
  }
`;

const TechCenterTopContainer = styled.div`
  margin-top: 10px;
  ${TechCenterStylez}
`;

const TechCenterBottomContainer = styled.div`
  ${TechCenterStylez}
  margin-top: auto;
`

export default TechStack;