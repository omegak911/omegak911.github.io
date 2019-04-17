import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TechDroppableItem from './TechDroppableTopItem';

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
            <TechDroppableItem tech={tech}/>
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
  border: ${props => props.isDraggingOver ? '1px solid black' : '0px'};
  box-shadow: ${props => props.isDraggingOver ? '1px 1px 5px black' : '0px'};
  height: 108px;
  width: 84px;
`;

export default TechDroppable;