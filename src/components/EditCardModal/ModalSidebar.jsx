import React from 'react';
import styled from 'styled-components';
import AddToCard from './AddToCard';

const ModalSidebar = () => {
  return (
    <ModalSidebarWrapper>
      <AddToCard type='description' />
      <AddToCard type='duedate' />
      <AddToCard type='progress' />
      <AddToCard type='labels' />
    </ModalSidebarWrapper>
  );
};

const ModalSidebarWrapper = styled.div`
  & > * {
    margin-top: 5px;
  }
  & > *:first-child {
    margin-top: 0px;
  }
`;

export default ModalSidebar;
