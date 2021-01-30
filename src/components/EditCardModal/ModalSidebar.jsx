import React from 'react';
import styled from 'styled-components';
import AddToCard from '../../containers/AddToCard';
import ModalAttributeTitle from './common/ModalAttributeWrapper';

const ModalSidebar = ({ listId, cardId }) => {
  return (
    <div>
      <StyledModalAttributeTitle>ADD TO CARD</StyledModalAttributeTitle>
      <AddToWrapper>
        <AddToCard type='description' listId={listId} cardId={cardId} />
        <AddToCard type='duedate' listId={listId} cardId={cardId} />
        <AddToCard type='progress' listId={listId} cardId={cardId} />
        <AddToCard type='labels' listId={listId} cardId={cardId} />
      </AddToWrapper>
    </div>
  );
};

const AddToWrapper = styled.div`
  & > * {
    margin-top: 5px;
  }
  & > *:first-child {
    margin-top: 0px;
  }
  overflow: hidden;
`;
const StyledModalAttributeTitle = styled(ModalAttributeTitle)`
  font-weight: 500;
`


export default ModalSidebar;
