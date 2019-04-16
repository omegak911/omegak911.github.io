import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const TechDroppable = ({ techDroppables }) =>
  <TechDroppableTopContainer>
    {techDroppables.map((tech,index) =>
      <Droppable
        key={tech.text}
        droppableId={`${tech.text}|${index}`}
      >
        {(provided, snapshot) =>
          <DnDContainer 
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <img src={tech.image} alt=""/>
            <TechName>{tech.correct ? tech.text : ''}</TechName>
            {provided.placeholder}
          </DnDContainer>
        }
      </Droppable>
    )}
  </TechDroppableTopContainer>

const TechDroppableTopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
  height: 100%;
  width: 80%;
  min-width: 475px;
  > div {
    padding: 5px;
  }
`;

const DnDContainer = styled.div`
  ${'' /* background-color: ${props => props.isDraggingOver ? 'rgba(100,100,100,0.5)' : 'rgba(0,0,0,0)'}; */}
  border: ${props => props.isDraggingOver ? '1px solid black' : '0px'};
  box-shadow: ${props => props.isDraggingOver ? '1px 1px 5px black' : '0px'};
  height: 108px;
  width: 84px;
`;

const TechName = styled.div`
  background: grey;
  text-align: center;
  border: 2px solid black;
  height: 20px;
  width: 80px;
`;

export default TechDroppable;