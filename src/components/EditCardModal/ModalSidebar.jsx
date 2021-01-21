import React from 'react';
import styled from 'styled-components';
import AddToCard from '../../containers/AddToCard';

const ModalSidebar = ({ listId, cardId }) => {
  return (
    <ModalSidebarWrapper>
      <p>ADD TO CARD</p>
      <AddToWrapper>
        <AddToCard type='description' listId={listId} cardId={cardId} />
        <AddToCard type='duedate' listId={listId} cardId={cardId} />
        <AddToCard type='progress' listId={listId} cardId={cardId} />
        <AddToCard type='labels' listId={listId} cardId={cardId} />
      </AddToWrapper>
    </ModalSidebarWrapper>
  );
};

const AddToWrapper = styled.div`
  & > * {
    margin-top: 5px;
  }
  & > *:first-child {
    margin-top: 0px;
  }
`;
const ModalSidebarWrapper = styled.div`
  p {
    color: #5e6c84;
    font-size: 12px;
    font-weight: 500;
  }
`;

export default ModalSidebar;
