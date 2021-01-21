import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Card from '../Card';
import ListFooter from '../../containers/ListFooter';
import Popup from 'reactjs-popup';
import EditCardModal from '../../containers/EditCardModal';

const List = ({ name, cards = [], listId }) => {
  return (
    <ListWrapper>
      <ListNameWrapper>{name}</ListNameWrapper>
      <Droppable droppableId={listId}>
        {(provided, snapshot) => (
          <div
            style={{ minHeight: '30px', minWidth: '200px' }}
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
                      <Popup
                        trigger={
                          <div>
                            <Card {...card} />
                          </div>
                        }
                        modal={true}
                        closeOnDocumentClick
                        nested
                      >
                        <EditCardModal
                          {...card}
                          listName={name}
                          listId={listId}
                        />
                      </Popup>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <ListFooter listId={listId} />
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
