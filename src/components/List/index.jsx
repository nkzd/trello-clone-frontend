import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Card from '../Card';
import ListFooter from '../ListFooter';

const List = ({ name, cards = [], listId }) => {
  return (
    <ListWrapper>
      <ListNameWrapper>{name}</ListNameWrapper>
      <Droppable droppableId={listId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
          >
            {cards.map((card, index) => {
              return (
                <Draggable key={card._id} draggableId={card._id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getItemStyle(
                      //   snapshot.isDragging,
                      //   provided.draggableProps.style
                      // )}
                    >
                      <Card {...card} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ListFooter />
    </ListWrapper>
  );
};

const ListNameWrapper = styled.div`
  font-weight: bold;
  padding: 10px;
`;

const ListWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 272px;
  width: 272px;
  margin: 0 5px;
  background-color: #ebecf0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
