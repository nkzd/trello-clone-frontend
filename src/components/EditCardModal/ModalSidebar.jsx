import React from 'react';
import styled from 'styled-components';
import AddToCard from './AddToCard';

const ModalSidebar = () => {
  return (
    <ModalSidebarWrapper>
      <p>ADD TO CARD</p>
      <AddToWrapper>
        <AddToCard type='description' />
        <AddToCard type='duedate' />
        <AddToCard type='progress' />
        <AddToCard type='labels' />
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
