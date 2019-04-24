import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TechDraggableItem from './TechDraggableItem';

const TechDraggable = ({ techDraggables }) =>
  <TechDraggableContainer>
    <Droppable
      droppableId="techLeft"
    >
    {(provided, snapshot) =>
      <DnDContainer 
        ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
      >
        {techDraggables.map((tech, index) => 
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
                <TechDraggableItem tech={tech}/>
              </StyledTechItem>
            }
          </Draggable>
        )}
        {provided.placeholder}
      </DnDContainer>
    }
    </Droppable>
  </TechDraggableContainer>

const TechDraggableContainer = styled.div`
  align-items: center;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  height: 70%;
  margin: 10px;
  max-width: 180px;
  width: 30%;
`;

const DnDContainer = styled.div``;

const StyledTechItem = styled.div`
  border: 1px solid black;
  margin-top: 5px;
  padding: 3px;
  text-align: center;
`;

export default TechDraggable;