import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TechDraggable from './TechDraggable';
import TechDroppableTop from './TechDroppableTop';

import { techDraggables, techDroppables } from '../../assets/dragAndDrops';

class TechStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techDraggables,
      techDroppables,
      additional: [
        'Agile Methodologies',
        'AWS EC2/S3/RDS',
        'AngularJS',
        'RESTful API Architecture',
        'Microservices Artchitecture',
        'Passport.js',
        'Vue',
        //Heroku bcrypt  React Native TDD 
      ]
    }
  }

  onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    let { techDraggables } = this.state;
    let techName = techDraggables[source.index];
    let [ tech, dropIndex ] = destination.droppableId.split('|');
    if (techName === tech) {
      this.handleCorrectDecision(dropIndex, source.index);
    }
  }

  solve = () => {

  }

  unsolve = () => {
    
  }

  handleCorrectDecision = (dropIndex, dragIndex) => {
    console.log('handling correct decision')
    let techDraggables = [...this.state.techDraggables];
    let techDroppables = [...this.state.techDroppables];
    techDraggables.splice(dragIndex, 1);
    techDroppables[dropIndex].correct = true;
    this.setState({ techDraggables, techDroppables });
  }

  render(){
    let { techDraggables, techDroppables, additional } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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