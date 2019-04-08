import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const TechAvailable = ({ techToAssign }) =>
  <TechAvailableContainer>
    <Droppable
      droppableId="techLeft"
    >
    {(provided, snapshot) =>
      <DnDContainer 
        ref={provided.innerRef}
        {...provided.droppableProps}
        isDraggingOver={snapshot.isDraggingOver}
        techToAssign={techToAssign}
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
      </DnDContainer>
      }
    </Droppable>
  </TechAvailableContainer>

const TechAvailableContainer = styled.div`
  align-items: center;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  height: calc(100% - 20px);
  margin: 10px;
  width: 30%;
`;

const DnDContainer = styled.div``;

const StyledTechItem = styled.div`
  border: 1px solid black;
  margin-top: 5px;
  padding: 3px;
  text-align: center;
`;

export default TechAvailable;