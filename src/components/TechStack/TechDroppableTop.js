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
  width: 80%;
  > div {
    padding: 5px;
  }
`;

const DnDContainer = styled.div``;

const TechName = styled.div`
  background: grey;
  text-align: center;
  border: 2px solid black;
  height: 20px;
  width: 80px;
`;

export default TechDroppable;