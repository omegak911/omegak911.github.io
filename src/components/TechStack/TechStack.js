import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import TechDraggable from './TechDraggable';
import TechDroppableTop from './TechDroppableTop';

import { techDraggables, techDroppables } from '../../assets/dragAndDrops';

class TechStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techDraggables,
      techDroppables: []
    }
  }

  componentDidMount() {
    let copyDroppables = [...techDroppables];
    let copyDraggables = [...techDraggables];
    this.randomizeDroppables(copyDroppables, copyDraggables);
  }

  randomizeDroppables = (techDroppables, techDraggables) => {
    for (let i = 0; i < techDroppables.length; i++) {
      let randomIndex = Math.floor(Math.random() * techDroppables.length);
      let temp = techDroppables[randomIndex];
      techDroppables[randomIndex] = techDroppables[i];
      techDroppables[i] = temp;
    }
    this.setState({ techDroppables, techDraggables });
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
    let techDroppables = [...this.state.techDroppables];
    for (let i = 0; i < techDroppables.length; i++) {
      techDroppables[i] = {...techDroppables[i]};
      techDroppables[i].correct = true;
    }
    this.setState({ techDraggables: [], techDroppables });
  }

  unSolve = () => {
    let droppables = [...this.state.techDroppables];
    for (let i = 0; i < droppables.length; i++) {
      droppables[i] = {...droppables[i]};
      droppables[i].correct = false;
    }
    this.setState({ techDraggables, techDroppables: droppables });
  }

  handleCorrectDecision = (dropIndex, dragIndex) => {
    let techDraggables = [...this.state.techDraggables];
    let techDroppables = [...this.state.techDroppables];
    techDraggables.splice(dragIndex, 1);
    techDroppables[dropIndex] = {...techDroppables[dropIndex]};
    techDroppables[dropIndex].correct = true;
    this.setState({ techDraggables, techDroppables });
  }

  render(){
    let { techDraggables, techDroppables } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <TechContainer id="tech">
          <TechDraggable techDraggables={techDraggables} />

          <TechDroppableWrapper>
            
            <div>
              <h2>TechStack</h2>
              <div>Here lies various techs I've used over the past year.  See if you can match all the text to the right logo!  Drag and drop the text to its respective logo.</div>
            </div>

            <div><button onClick={this.solve}>Solve</button><button onClick={this.unSolve}>UnSolve</button></div>

            <TechDroppableTop techDroppables={techDroppables} />
          </TechDroppableWrapper>
        </TechContainer>
      </DragDropContext>
    )
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  min-height: 690px;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
  & img {
    height: 80px;
    width: 80px;
  }
  animation: ${fadeIn} 2s linear;
`;

const TechDroppableWrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  > :nth-child(1) {
    padding: 0px 15% 10px;
  }
`;

export default TechStack;