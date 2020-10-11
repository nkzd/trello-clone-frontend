import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
const AddAnotherList = () => {
  return (
    <AddAnotherListWrapper>
      <PlusIcon size={22} />
      <span>Add another list</span>
    </AddAnotherListWrapper>
  );
};

const PlusIcon = styled(Plus)`
  color: '#616161';
  margin-right: 5px;
`;

const AddAnotherListWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: hsla(0,0%,100%,.24);
  &:hover {
    background-color: hsla(0,0%,100%,.44);
  }
`;

export default AddAnotherList;
